import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import Product from '../Product/Product';

class Items extends Component {
    render() {
      return(
        <Switch>
          <Route exact path="/items" component={ProductList} />
          <Route path="/items/:id" component={Product} />
        </Switch>
      );
    }
}

export default Items;
