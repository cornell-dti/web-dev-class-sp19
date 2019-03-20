import React, { Component } from 'react';
import ContactCard from './ContactCard';
import data from './data';

export default class DataDrivenApp extends Component {
  render() {
    return (
      <div>
        {/* classic */}



        { /*map requires a unique key identifier - the code will still compile and run, but
          it asks for a key in order to "give the elements a stable identity" (from the React docs on Lists and Keys) */}
        {data.map(contact => <ContactCard key={contact.email} name={contact.name} email={contact.email} />)}
        {/* destructing */}
        {/* data.map(({ name, email }) => <ContactCard key={email} name={name} email={email} />) */}
        {/* props spread */}
        {/* data.map(contact => <ContactCard key={contact.email} {...contact} />) */}
      </div>
    )
  }
}
