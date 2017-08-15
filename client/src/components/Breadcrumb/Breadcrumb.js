import React, { Component } from 'react';
import './Breadcrumb.css';
import '../../styles/fonts.css';

class Breadcrumb extends Component {

  render() {
    const path = this.props.path.map((p, i) => {
      if(p) {
        return (
          <span className="breadcrumb__item" key={i}>
            <a className="breadcrumb__item__link" href="/">{p}</a>
            <i className="breadcrumb__item__icon icon-arrow-next"></i>
          </span>
        );
      }
    });
    return (
      <div className="breadcrumb">
        {path}
      </div>
    );
  }
}

export default Breadcrumb;
