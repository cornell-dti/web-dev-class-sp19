import React, { Component } from 'react';
import ContactCard from './ContactCard';
import data from './data';

export default class DataDrivenApp extends Component {
  render() {
    return (
      <div>
        {/* classic */}
        {data.map(contact => <ContactCard name={contact.name} email={contact.email} />)}
        {/* destructing */}
        {/* data.map(({ name, email }) => <ContactCard name={name} email={email} />) */}
        {/* props spread */}
        {/* data.map(contact => <ContactCard {...contact} />) */}
      </div>
    )
  }
}