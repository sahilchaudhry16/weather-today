const express  = require('express');
const app      = express();
const httpProxy = require('http-proxy-middleware');
const serverOne = 'https://www.metaweather.com/api/';
const port = process.env.PORT || '8000';
const cors = require('cors');
const path = require('path');
const axios = require('axios');
app.use(cors());

function processRequest(req, res) {
  console.log(req);
  return axios.get(serverOne + req.originalUrl).then((resp) => {
    if(resp.status == 200){
      res.status(200);
      res.json(resp.data);
    }
  }).catch(er => {
    res.status(er.response.status);
    res.json(er.response.data);
  });
};

app.get('/api/location/*', processRequest);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));


// app.use('/api/*', httpProxy(serverOne, {
//   proxyReqPathResolver: function(req) {
//     return req.originalUrl;
//   }
// }));

// const options = {
//     target: serverOne,
//     changeOrigin: true,
//     onProxyReq(proxyReq, req, res) {
//      // add custom header to request
//      proxyReq.setHeader('Origin', 'http://localhost:3000');
     
//      // or log the req
//    },
//    onProxyRes(proxyRes, req, res) {
//     proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//     proxyRes.headers['Origin'] = 'http://localhost:3000';
//   }
// };

// app.use('/api/*', httpProxy(options));
 
app.listen(port);
console.log('Listening on port', port);
