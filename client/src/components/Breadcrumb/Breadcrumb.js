import React, { Component } from 'react';
import './Breadcrumb.css';

class Breadcrumb extends Component {

  render() {
    const path = this.props.path.map((p, i) => <span key={i}>{p}</span>);
    return (
      <div className="breadcrumb">
        {path}
      </div>
    );
  }
}

export default Breadcrumb;
