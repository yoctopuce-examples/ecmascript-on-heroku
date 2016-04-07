import { YAPI, YAPIContext, YModule, YSensor, YErrorMsg } from 'yoctolib-es';

var server = YAPI._nodeRequire('http').createServer();
var url = YAPI._nodeRequire('url');
var WebSocketServer = YAPI._nodeRequire('ws').Server;
var express = YAPI._nodeRequire('express');

async function WebSocketCallbackHandler(ws)
{
    var location = url.parse(ws.upgradeReq.url, true);
    console.log('Websocket request on', location.pathname);

    let errmsg = new YErrorMsg();
    let yctx = new YAPIContext();
    try {
        if(await yctx.RegisterHubWebSocketCallback(ws, errmsg) != YAPI.SUCCESS) {
            console.log('HTTP callback error: '+errmsg);
            yctx.FreeAPI();
            return;
        }
        await yctx.UpdateDeviceList(errmsg);

        let module = YModule.FirstModuleInContext(yctx);
        while(module) {
            console.log('Device connected: '+(await module.get_friendlyName()));
            module = module.nextModule();
        }

        console.log('Websocket request completed');
    } catch(e) {
        console.log('Caught exception in WS code', e);
    }
    yctx.FreeAPI();
    console.log('Bye');
}

YAPI.LogUnhandledPromiseRejections();

// Setup Websocket handler
var wss = new WebSocketServer({ server: server });
wss.on('connection', WebSocketCallbackHandler);

// Setup Express app server
var app = express();
server.on('request', app);
app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    response.send('Hello world');
});

// Start web server
server.listen(app.get('port'), function() {
    console.log('Server running on port', app.get('port'));
});
