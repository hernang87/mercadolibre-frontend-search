import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import ProductListItem from '../ProductListItem/ProductListItem';

import './ProductList.css';

const urlPropsQueryConfig = {
  search: { type: UrlQueryParamTypes.string }
}

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            products: [] 
        }
    }    

    componentWillMount() {
        const url = 'http://localhost:4500/api/items?q=' + this.props.search;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ products: response.items }));
    }
    
    render() {                
        if(this.state.products.length === 0) {
            return (
                <div className="loading">Cargando productos...</div>
            );
        }

        const products = this.state.products.map(product => <ProductListItem product={product} key={product.id} />);

        return (      
            <div className="product-list">
                <ul className="product-list__items">{products}</ul>
            </div>
        );
    }
}

export default addUrlProps({ urlPropsQueryConfig })(ProductList);