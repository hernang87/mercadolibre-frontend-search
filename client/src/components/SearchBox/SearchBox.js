import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import './SearchBox.css';
import LogoML from '../../images/logo-ml.png';
import SearchIcon from '../../images/icon-search.png';


class SearchBox extends Component {
  componentWillMount() {
    let term = this.props.search || '';
    this.setState({ term })
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  doSubmit(e) {
    if(e) e.preventDefault();
        
    this.context.router.history.push({
      pathname: '/items',
      search: `?search=${this.state.term}`               
    });    
  }

  _handleKeyPress(e) {
    if(e.key === 'Enter') this.doSubmit();
  }

  render() {
    return (
      <div className="search-box">
        <img className="search-box__logo" src={LogoML} alt="MercadoLibre.com" />
        <form className="search-box__form form" onSubmit={e => this.doSubmit(e) }>
          <input 
            className="search-box__form__input form__input form__input--inline" 
            placeholder="Nunca dejes de buscar" 
            type="text" 
            value={this.state.term} 
            onKeyPress={ e => this._handleKeyPress(e)} 
            onChange={e => this.updateTerm(e)} />
          <button className="search-box__form__inline-button form__button form__button--inline" type="submit"><img src={SearchIcon} alt="Search" /></button>
        </form>
      </div>
    );
  }
};

SearchBox.contextTypes = {
  router: PropTypes.object.isRequired
}

const urlPropsQueryConfig = {
  search: { type: UrlQueryParamTypes.string }
}

export default addUrlProps({ urlPropsQueryConfig })(withRouter(SearchBox));
