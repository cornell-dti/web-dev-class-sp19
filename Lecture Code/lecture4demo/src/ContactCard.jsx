import React, { Component } from 'react';
import styles from './App.module.css';

class ContactCard extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div className={styles.ContactCard}>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    );
  }
}

export default ContactCard;
