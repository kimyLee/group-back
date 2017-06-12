/**
 * Created by kimmy on 2017/6/10.
 */
const ws = require('ws')
const Cookies = require('cookies')
const WebSocketServer = ws.Server
// websocket 模块
module.exports = function (server) {
  let wss = new WebSocketServer({
    server: server
  })
  // let count = 1;
  wss.broadcast = function (data, user) {
    wss.clients.forEach(function (client) {
      //if (client.user.id !== user.id) {
       // console.log(client.user.id, user.id, '客户不一样，消息派发')
        client.send(data);
      //}
    });
  };
  wss.on('connection', function (ws, request) {
    console.log('链接成功')
    // ws.upgradeReq是一个request对象:
    let user = parseUser(request.headers.cookie);
    if (!user) {
      // Cookie不存在或无效，直接关闭WebSocket:
      ws.close(4001, 'Invalid user');
    }
    // 识别成功，把user绑定到该WebSocket对象:
     ws.user = user;

    ws.send(`用户连接成功`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
    // count = count - 0 + 1;
    ws.on('message', function (message) {
      // 广播
      if (message && message.trim()) {
        let msg = createMessage('chat', this.user, message.trim());
        this.wss.broadcast(msg, this.user)
      }

    })
    // 绑定WebSocketServer对象:
    // ws.wss = wss;
    ws.wss = wss;
  });

  function createMessage(type, user, data) {
    // messageIndex++;
    return JSON.stringify({
      // id: messageIndex,
      type: type,
      user: user,
      data: data
    });
  }
  // 用户识别解析函数
  function parseUser(str) {
    let Cookies = {};
   str && str.split(';').forEach(function( Cookie ) {
      var parts = Cookie.split('=');
      Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
   let s = Cookies['name'];
   // console.log(Cookies, s)
    if (s) {
      try {
        let user = JSON.parse(Buffer.from(s, 'base64').toString());
        // console.log(user, 'look what is the cookie');
        return user;
      } catch (e) {
        console.log('error333');
        // ignore
      }
    }
  }
}