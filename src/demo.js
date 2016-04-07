import { YAPI, YAPIContext, YModule, YRelay, YErrorMsg } from 'yoctolib-es';

var server = YAPI._nodeRequire('http').createServer();
var url = YAPI._nodeRequire('url');
var WebSocketServer = YAPI._nodeRequire('ws').Server;
var express = YAPI._nodeRequire('express');

var Relays = {};

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

YAPI.LogUnhandledPromiseRejections();

// Setup Websocket handler
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
    if(request.query.relay && Relays[request.query.relay]) {
        Relays[request.query.relay].set_state(request.query.state);
    }
    app.locals.Relays = Relays;
    response.render('index');
});

// Start web server
server.listen(app.get('port'), function() {
    console.log('Server running on port', app.get('port'));
});
