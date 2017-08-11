const express = require('express');
const rp = require('request-promise');
const utils = require('./utils.js');
const striptags = require('striptags');
const app = express();

const endpoints = {
  search: 'https://api.mercadolibre.com/sites/MLA/search?q=',
  items: 'https://api.mercadolibre.com/items/'
};

const author = {
  name: 'Hernan',
  lastname: 'Garchtrom'
};

app.get('/items', (req, res) => {
  let query = req.query || '';
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

      if(data.categories.indexOf(result.category_id) === -1) {
        data.categories.push(result.category_id);
      }


    }

    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json(err);
  });
});

app.get('/items/:id', (req, res) => {
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
    res.status(500).json(err);
  });
});

app.listen(4500, () => console.log('Listening on port 4500...'));
