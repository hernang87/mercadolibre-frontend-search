import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.css';

class ProductList extends Component {
  componentWillMount() {
    const url = 'http://localhost:4500/api/items?q=' + this.props.search;

    this.setState({
      products: []
    });

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ products: response.items }));
  }

  render() {
    if(this.state.products.length === 0) {
      return <div></div>
    }

    const products = this.state.products.map(product => <ProductListItem product={product} key={product.id} />);

    return (
      <div className="product-list">
        <ul className="product-list__items">{products}</ul>
      </div>
    );
  }
}

const urlPropsQueryConfig = {
  search: { type: UrlQueryParamTypes.string }
}

export default addUrlProps({ urlPropsQueryConfig })(ProductList);
