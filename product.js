const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let apikey = 'd16aff146022d4953781142be217a7d1'
let token = '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'
let endpoint = 'products'

let options = {
  'method': 'GET',
  'url': `https://${apikey}:${token}@tiendapruebas1959.myshopify.com/admin/api/2022-10/${endpoint}.json`,
  'headers': {
    'Content-type': 'application/json'
  }
};

app.get("/getdata", (req, resp)=>{
  request(options, function(error, response){
  if(error) throw new Error(error);
  resp.send(response.body);
  console.log(response.body);
});
});

app.listen(3400);