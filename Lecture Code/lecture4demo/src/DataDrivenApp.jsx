import React, { Component } from 'react';
import ContactCard from './ContactCard';
import data from './data';

// the data.map function is equivalent to the following:
/**
 * @param {array} dataToMap an array of items of type A.
 * @param {Function} functionToCall the function that has type A => B.
 * @returns an array of mapped data of type B.
 */
function mapData(dataToMap, functionToCall) {
  const newData = [];
  for (const item of dataToMap) {
    newData.push(functionToCall(item));
  }
  return newData;
}

export default class DataDrivenApp extends Component {
  render() {
    return (
      <div>
        {/* classic */}



        { /*map requires a unique key identifier - the code will still compile and run, but
          it asks for a key in order to "give the elements a stable identity" (from the React docs on Lists and Keys) */}
        {data.map(contact => <ContactCard key={contact.email} name={contact.name} email={contact.email} />)}
        {/* equivalent without functional programming */}
        {/* mapData(data, contact => <ContactCard key={contact.email} name={contact.name} email={contact.email} />) */}
        {/* destructing syntax */}
        {/* data.map(({ name, email }) => <ContactCard key={email} name={name} email={email} />) */}
        {/* props spread syntax */}
        {/* data.map(contact => <ContactCard key={contact.email} {...contact} />) */}
      </div>
    )
  }
}
