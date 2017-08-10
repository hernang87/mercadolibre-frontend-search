import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductListItem from './ProductListItem';

class ProductList extends Component {
  render() {
    const products = this.props.list.map(product => <ProductListItem product={product} key={product.id} />);
    return (
      <div className="product-list-container">
        <ul>{products}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.results
  }
}

export default connect(mapStateToProps)(ProductList);
