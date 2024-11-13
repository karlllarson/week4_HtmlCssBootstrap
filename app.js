/*
mkdir my-app
cd my-app
npm init
npm i body-parser
npm i express
# edit package.json and add ', "start": "node app.js"' to scripts section
npm start
http://localhost:3000/
*/

const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
let header = '<html><head><title>Generic GET/POST Server</title><style>' +
'table { border-collapse: collapse; font-family: Tahoma, Geneva, sans-serif; }' +
'table th { text-align: left; padding: 15px; }' +
'table td { padding: 15px; }' +
'table thead td { background-color: #54585d; color: #ffffff; font-weight: bold; font-size: 13px; border: 1px solid #54585d; }' +
'table tbody td { color: #636363; border: 1px solid #dddfe1; }' +
'table tbody tr { background-color: #f9fafb; }' +
'table tbody tr:nth-child(odd) { background-color: #ffffff; } ' +  
'</style></head><body><table><tr><th>Key</th><th>Value</th></tr>';
let footer = '</body></html>';

app.get('/processform', (req, res) => {
  console.log('Got GET:', req.query);
  let obj = req.query;
  let responseText = header;
  for (let key in obj) {
    let value = obj[key];
    responseText += `<tr><td>${key}</td><td>${value}</td></tr>`  
  }
  responseText += `</table><h4><a href="${req.headers.referer}">Go Back</a></h4>`;
  responseText += footer;   
  console.log(responseText);
  console.log(req.headers.referer);
  res.send(responseText);

  /* res.sendStatus(200); */
});    

app.post('/processform', urlencodedParser, (req, res) => {
  console.log('Got POST:', req.body);
  let obj = req.body;
  let responseText = header;
  for (let key in obj) {
    let value = obj[key];
    responseText += `<tr><td>${key}</td><td>${value}</td></tr>`  
  }
  responseText += `</table><h4><a href="${req.headers.referer}">Go Back</a></h4>`;
  responseText += footer;  
  console.log(responseText);
  console.log(req.headers.referer);
  res.send(responseText);

  /*res.sendStatus(200);*/
});
  
app.listen(3000);
