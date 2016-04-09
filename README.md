EcmaScript example: a GSM driven relay
======================================

We are going to show you how to create in **Node.js** a small system to drive a relay remotely with a 
[YoctoHub-GSM-3G-EU](https://www.yoctopuce.com/EN/products/extensions-and-networking/yoctohub-gsm-3g-eu). 
As SIM chips available for laymen cannot contact public servers on Internet, 
we are going to host our Node.js code on [Heroku.com](https://www.heroku.com/).

The application is very simple on purpose: the aim is simply to show you how you can use the new EcmaScript 
library, for example with a Node.js public host such as Heroku. We'll have other opportunities for more 
sophisticated tasks with this library in further posts. At this stage, we also skip all the security and 
scalability aspects, of which we will talk in an upcoming article.

To stay within the Node.js standards, we use [Express](http://expressjs.com/) as engine to serve the pages 
of our web app. This same web server accepts incoming connections from the YoctoHub-GSM, at the WebSocket 
standard. The interface of our web app simply offers to display the connected relays and to switch them.

## Project structure

* **/public**
    static files of the web interface
* **/views**
    the web console pages, interpreted by Express
* **/src**
    the EcmaScript source code of the application
* at the root of the project
  several configuration files

The source code of the application is in a single file. The base structure to create an Express server with 
WebSockets is the following:

```javascript
// Import http, websocket and Express libraries
var server = require('http').createServer();
var WebSocketServer = require('ws').Server;
var express = require('express');

// Setup Websocket handler
function WebSocketCallbackHandler(ws)
{ ... }
var wss = new WebSocketServer({ server: server });
wss.on('connection', WebSocketCallbackHandler);

// Setup Express app server
var app = express();
server.on('request', app);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function(request, response) {
    response.render('index');
});

// Start web server
server.listen(app.get('port'), function() {
    console.log('Server running on port', app.get('port'));
});
```

## Code specific to Yoctopuce

The code necessary to handle Yoctopuce modules is put in the <tt>WebSocketCallbackHandler()</tt> function which is called when the <product>YoctoHub-GSM-3G-EU</product> connects itself. It starts by initializing the Yoctopuce library and enumerates the relays. It then waits for the switch instructions sent by the web interface. Note the use of <tt>async</tt> and <tt>await</tt> keywords to manage asynchronous operations.
```javascript
async function WebSocketCallbackHandler(ws)
{
    let hwids = [];
    let errmsg = new YErrorMsg();
    let yctx = new YAPIContext();
    try {
        // Initialize library
        if(await yctx.RegisterHubWebSocketCallback(ws, errmsg)!=YAPI.SUCCESS){
            console.log('HTTP callback error: '+errmsg);
            yctx.FreeAPI();
            return;
        }
        // Enumerate relays
        let relay = YRelay.FirstRelayInContext(yctx);
        while(relay) {
            let hwid = await relay.get_hardwareId();
            hwids.push(hwid);
            Relays[hwid] = relay;
            relay = relay.nextRelay();
        }
        // Keep the calling hub connected for a 30 seconds
        await yctx.Sleep(30000);
    } catch(e) {
        console.log('Caught exception in WS code', e);
    }
    // Remove relays from list before disconnecting
    for(let i = 0; i < hwids.length; i++) {
        delete Relays[hwids[i]];
    }
    // Free ressources
    yctx.FreeAPI();
}
```

To keep it simple, relay switching from the web UI will be performed by passing arguments to the URL. 
We will have other opportunities to discover a more elegant method using JavaScript code directly in the UI. 
So here are the few lines to replace in the code skeleton above in order to driver the relays according to arguments on the URL:
```javascript
app.get('/', function(request, response) {
    if(request.query.relay && Relays[request.query.relay]) {
        Relays[request.query.relay].set_state(request.query.state);
    }
    app.locals.Relays = Relays;
    response.render('index');
});
```

## Installation prerequisites

We assume here that you have installed git, npm and Node.js on your machine.

To use the Yoctopuce EcmaScript library, we recommend that your install <tt>jspm</tt> as well, allowing you to use the new EcmaScript syntax with Node.js:
```bash
$ npm install jspm@beta -g
```
To test Heroku, you also need to create an account on Heroku.com. Free hosting is enough to run this example. Install the Heroku tools (<i>Heroku Toolbelt</i>) as decribed on <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up" target="_blank">this page</a>.

## Compiling the project

To start, you must download the project on your machine from GitHub:
```bash
$ git clone https://github.com/yoctopuce-examples/ecmascript-on-heroku.git
$ cd ecmascript-on-heroku
```
Install the project dependencies with the following commands:
```bash
$ npm install
$ jspm install
```
To use the project on Heroku, you must compile the project to translate the async/await syntax into code that Node.js can understand:
```bash
$ jspm build src/demo.js --node
```
At this stage, you already can run the project locally with the command:
```bash
$ heroku local
```

## Deploying on Heroku

When you have compiled the project, you can upload it to Heroku:
```bash
$ heroku login
Enter your Heroku credentials.
Email: ...
$ heroku create
$ git push heroku master
```
You can now go to you application web page. You can do so with the following command, which opens your browser directly on the correct page:
```bash
$ heroku open
```

## Configuring the YoctoHub

You only need to configure the <product>YoctoHub-GSM-3G-EU</product> so that it connects itself to our Heroku server. Use the following settings, but simply replace the URL by that of your application, as it shows in your browser when you are viewing the interface:

![WebSocket callback configuration](https://www.yoctopuce.com/pubarchive/2016-04/configuration_callback_2.png)

