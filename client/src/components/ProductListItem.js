import React, { Component } from 'react';
import './ProductListItem.css';

class ProductListItem extends Component {
  render() {
    const product = this.props.product;

    return (
      <li className={"product-list-item " + (product.free_shipping ? 'product-list-item--free_shipping' : '') }>
        <div className="product-list-item__image">
          <img src={product.picture} />
        </div>

        <div className="product-list-item__data">
          <p className="product-list-item__price">
            $ {product.price.amount}
            <span className="product-list-item__shipping-icon">F</span>
          </p>
          <p className="product-list-item__title">{product.title}</p>
        </div>
      </li>
    );
  }
}

export default ProductListItem;
