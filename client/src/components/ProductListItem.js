import React, { Component } from 'react';

class ProductListItem extends Component {
  render() {
    const product = this.props.product;
    return (
      <li className="product-list-item-container">
        {product.title}
      </li>
    );
  }
}

export default ProductListItem;
