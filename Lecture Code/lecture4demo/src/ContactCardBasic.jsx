import React, { Component } from 'react';
import './App.css';

class ContactCardBasic extends Component {
  render() {
    return (
      <div className="contactCardStyle">
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default ContactCardBasic;
