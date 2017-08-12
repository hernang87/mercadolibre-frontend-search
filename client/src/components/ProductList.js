import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductListItem from './ProductListItem';
import '../styles/ProductList.css';

class ProductList extends Component {
  render() {
    const products = this.props.items.map(product => <ProductListItem product={product} key={product.id} />);
    return (
      <div className="product-list">
        <ul className="product-list__items">{products}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ProductList);
