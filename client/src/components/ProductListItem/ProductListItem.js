import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconShipping from '../../images/icon-shipping.png'
import './ProductListItem.css';

class ProductListItem extends Component {
  url() {
    return `/items/${this.props.product.id}`;
  }

  render() {
    const product = this.props.product;

    return (
      <div className={"product-list-item " + (product.free_shipping ? 'product-list-item--free_shipping' : '') }>
        <Link to={this.url()} className="product-list-item__image">
          <img alt={product.title} src={product.picture} />
        </Link>

        <div className="product-list-item__data">
          <div className="product-list-item__price">
            $ {product.price.amount}
            <div className="product-list-item__shipping-icon">
              <img alt="Free Shipping" src={IconShipping} />
            </div>
          </div>

          <Link className="product-list-item__title" to={this.url()}>{product.title}</Link>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
