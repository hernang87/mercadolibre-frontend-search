import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './Product.css';


class Product extends Component {
  componentWillMount() {
    let id = this.props.match.params.id;
    let url = `http://localhost:4500/api/items/${id}`;

    this.setState({
      product: null
    });

    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ product: response.item }));
  }

  render() {
    let product = this.state.product;
    if(!product) {
      return <div></div>;
    }

    return (
      <div className="product">
        <Breadcrumb path={product.category} />
        <div className="product__item">
          <img className="product__item__image" src={product.picture} />
          <div className="product__item__data">
            <p className="product__item__sale-info">Nuevo - {product.sold_quantity} vendidos</p>
            <p className="product__item__title">{product.title}</p>
            <p className="product__item__price">$ {product.price.amount}</p>
            <Link to={'/'} className="product__item__cta">Comprar</Link>
          </div>
          <div className="product__item__description">
            <p className="product__item__description__title">Descripción del producto</p>
            <p className="product__item__description__content">{product.description}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Product;
