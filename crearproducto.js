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
            "title": "Producto creado desde API",
            "body_html": "Descripción de producto creado por API",
            "vendor": "Mejorando",
            "product_type": "Decoración",
            "variants":[
                {
                   "price":"25000",
                   "sku":"567678900",
                   "inventory_quantity":8,
                  
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