import { YAPI, YAPIContext, YModule, YSensor, YErrorMsg } from 'yoctolib-es';

var server = YAPI._nodeRequire('http').createServer();
var url = YAPI._nodeRequire('url');
var WebSocketServer = YAPI._nodeRequire('ws').Server;
var express = YAPI._nodeRequire('express');

async function WebSocketCallbackHandler(ws)
{
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
        await yctx.UpdateDeviceList(errmsg);
        let relay = YRelay.FirstRelayInContext(yctx);
        while(relay) {
            console.log('Relay found: '+(await module.get_friendlyName()));
            relay = relay.nextRelay();
        }

        // Stay connected
        for(let i = 0; i < 100; i++) {
            await yctx.Sleep(300);
        }
    } catch(e) {
        console.log('Caught exception in WS code', e);
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
    response.render('index');
});

// Start web server
server.listen(app.get('port'), function() {
    console.log('Server running on port', app.get('port'));
});
