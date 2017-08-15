import React, { Component } from 'react';
import IconShipping from '../../images/icon-shipping.png'
import './ProductListItem.css';

class ProductListItem extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className={"product-list-item " + (product.free_shipping ? 'product-list-item--free_shipping' : '') }>
        <div className="product-list-item__image">
          <img alt={product.title} src={product.picture} />
        </div>

        <div className="product-list-item__data">
          <div className="product-list-item__price">
            $ {product.price.amount}
            <div className="product-list-item__shipping-icon">
              <img alt="Free Shipping" src={IconShipping} />
            </div>
          </div>
          <p className="product-list-item__title">{product.title}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
