import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import ProductListItem from '../ProductListItem/ProductListItem';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductList.css';

class ProductList extends Component {
  componentWillMount() {
    let url = 'http://localhost:4500/api/items?search=' + this.props.search;

    this.setState({
      products: [],
      categories: []
    });

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ products: response.items, categories: response.categories }))
      .catch(err => console.log(err));
  }

  render() {
    if(!this.state.products || this.state.products.length === 0) {
      return <div></div>
    }

    const products = this.state.products.map(product => <ProductListItem product={product} key={product.id} />);

    return (
      <div className="product-list">
        <Breadcrumb path={this.state.categories} />
        <div className="product-list__items">{products}</div>
      </div>
    );
  }
}

const urlPropsQueryConfig = {
  search: { type: UrlQueryParamTypes.string }
}

export default addUrlProps({ urlPropsQueryConfig })(ProductList);
