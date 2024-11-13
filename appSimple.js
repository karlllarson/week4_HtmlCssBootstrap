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

app.get('/processform', (req, res) => {
  console.log('Got GET:', req.query);
  const fullname = req.query.fullname;
  // following const email, etc are additions
  const email = req.query.email;
  const age = req.query.age;
  const gender_identity = req.query.gender_identity;
  
  const responseText = "fullname is " + fullname + "\n" + 
                        "email is " + email + "\n" +
                        "age is " + age + "\n" +
                        "gender identity is " + gender_identity;
  console.log(responseText);
  res.send(responseText);

  /* res.sendStatus(200); */
});    

app.post('/processform', urlencodedParser, (req, res) => {
  console.log('Got POST:', req.body);
  const fullname = req.body.fullname;
  const email = req.body.email;
  const age =req.body.age;
  const gender_identity = req.body.gender_identity;

  const responseTextPost = "fullname is " + fullname + "\n" + 
  "email is " + email + "\n" +
  "age is " + age + "\n" +
  "gender identity is " + gender_identity;

res.send(responseTextPost);
  /*res.send("fullname is " + fullname + '\n' + "email is " + email + "age is " + age + 
  "gender identity is " + gender_identity); */

  /*res.sendStatus(200);*/
});
  
app.listen(3000);
