const request = require('request');
const express = require('express');
const app = express();

let apikey = 'd16aff146022d4953781142be217a7d1';
let token = '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';
let endpoint = 'products';
let productid = '8055397843168';

let updateproducto = {
    'method': 'PUT',
    'url': `https://${apikey}:${token}@tiendapruebas1959.myshopify.com/admin/api/2022-10/${endpoint}/${productid}.json`,
    'headers': {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
        "product":{
            "id": "8055397843168",
            "title": "Segundo Producto creado desde API y actualizado nuevamente",
            "tags": "etiqueta1, servidores, hosting, web",
        }
    })
  };

  app.get("/updateproduct", (req, resp)=>{
    request(updateproducto, function(error, response){
    if(error) throw new Error(error);
    resp.send(response.body);
    console.log(response.body);
  });
  });
  
  app.listen(3400);