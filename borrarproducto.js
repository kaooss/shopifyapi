const request = require('request');
const express = require('express');

const app = express();

let apikey = 'd16aff146022d4953781142be217a7d1';
let token = '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';
let endpoint = 'products';
let productid = '8055397843168';

let deleteproducto = {
    'method': 'DELETE',
    'url': `https://${apikey}:${token}@tiendapruebas1959.myshopify.com/admin/api/2022-10/${endpoint}/${productid}.json`,
    'headers': {
      'Content-type': 'application/json'
    }
  };

  app.get("/eliminar", (req, resp)=>{
    request(deleteproducto, function(error, response){
    if(error) throw new Error(error);
    resp.send(response.body);
    console.log(response.body);
  });
  });
  
  app.listen(3400);