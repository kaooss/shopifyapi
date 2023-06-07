const request = require('request');
const express = require('express');
const app = express();

let apikey = 'd16aff146022d4953781142be217a7d1';
let token = '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';
let endpoint = 'products';

let createproduct = {
    'method': 'POST',
    'url': `https://${apikey}:${token}@tiendapruebas1959.myshopify.com/admin/api/2022-10/${endpoint}.json`,
    'headers': {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
        "product":{
            "title": "Segundo Producto creado desde API con los cabros",
            "body_html": "Descripción de segundo producto creado por API",
            "vendor": "Mejorando tu Web new",
            "product_type": "Tecnología",
            "variants":[
                {
                   "price":"28790",
                   "sku":"567679078",
                   "inventory_quantity":12,
                  
                }
             ]
        }
    })
  };

  app.get("/addproduct", (req, resp)=>{
    request(createproduct, function(error, response){
    if(error) throw new Error(error);
    resp.send(response.body);
    console.log(response.body);
  });
  });
  
  app.listen(3400);