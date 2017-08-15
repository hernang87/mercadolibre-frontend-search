const express = require('express');
const rp = require('request-promise');
const utils = require('./utils.js');
const striptags = require('striptags');
const cors = require('cors');
const app = express();

app.use(cors());

const endpoints = {
  search: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=',
  items: 'https://api.mercadolibre.com/items/',
  categories: 'https://api.mercadolibre.com/categories/'
};

const author = {
  name: 'Hernan',
  lastname: 'Garchtrom'
};

app.get('/api/items', (req, res) => {
  let query = req.query.search || '';
  let data = {
    author,
    categories: [],
    items: []
  };

  rp({
    uri: endpoints.search + query,
    json: true
  }).then(response => {

    for(let i = 0; i < response.results.length; i++) {
      let result = response.results[i];
      let item = utils.getProductFromMLResponse(result);

      data.items.push(item);
    }

    let categories = response.available_filters.filter(f => f.id === 'category')[0];
       
    if(categories) {      
      let orderedCategories = categories.values.sort((a,b) => b.results - a.results);
      
      rp({
        uri: endpoints.categories + orderedCategories[0].id,
        json: true
      }).then(response => {
        response.path_from_root.map(v => data.categories.push(v.name));
        res.status(200).json(data);
      });
    } else {
      res.status(200).json(data);
    }  
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

app.get('/api/items/:id', (req, res) => {
  let id = req.params.id;

  let data = {
    author,
    item: {},
  };

  rp({
    uri: endpoints.items + id,
    json: true
  }).then(response => {
    data.item = utils.getCompleteProductFromMLResponse(response);
    
    return rp({
      uri: endpoints.items + id + '/description',
      json: true
    });
  }).then(response => {
    data.item.description = striptags(response.text);
    res.status(200).send(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

app.listen(4500, () => console.log('Listening on port 4500...'));
