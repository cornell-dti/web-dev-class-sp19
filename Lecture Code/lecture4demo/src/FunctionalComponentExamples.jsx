import React, { Component } from 'react';

/*
 * We first write a class component to see how we can convert it into functional components.
 */

class ContactCardClassComponent extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    );
  }
}

/*
 * A functional component does not have state.
 * Usually, when you see some class component that only have render() method,
 * it's a sign that you can convert it into functional component.
 *
 * Conversion Step:
 * 1. Copy-paste the render function below, and change the function name.
 * 2. Replace all 'this.props' with 'props'.
 * 3. Add props to the function parameter, and add keyword 'function' before the method name.
 */

/*
 * After step 1:
 * Note: this code won't work.
 *
 * ContactCardFunctionalComponent() {
 *   const { name, email } = this.props;
 *   return (
 *     <div>
 *       <div>{name}</div>
 *       <div>{email}</div>
 *     </div>
 *   );
 * }
 */

/*
 * After step 2:
 * Note: this code won't work.
 *
 * ContactCardFunctionalComponent() {
 *   const { name, email } = props;
 *   return (
 *     <div>
 *       <div>{name}</div>
 *       <div>{email}</div>
 *     </div>
 *   );
 * }
 */

/*
 * After step 3:
 * Note: this code works.
 */

function ContactCardFunctionalComponent(props) {
  const { name, email } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

/*
 * A functional component is just a normal js function.
 * Therefore, you can also write it as an arrow function, or use destructing syntax.
 * These variants are shown below.
 */

function ContactCardFunctionalComponent2({ name, email }) {
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

const ContactCardFunctionalComponent3 = (props) => {
  const { name, email } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

const ContactCardFunctionalComponent4 = ({ name, email }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

const ContactCardFunctionalComponent5 = ({ name, email }) => (
  <div>
    <div>{name}</div>
    <div>{email}</div>
  </div>
);

/*
 * We can directly export default a functional component like this.
 */
export default () => (
  <div>
    <ContactCardClassComponent name="sam" email="a@b.com" />
    <ContactCardFunctionalComponent name="sam" email="a@b.com" />
    <ContactCardFunctionalComponent2 name="sam" email="a@b.com" />
    <ContactCardFunctionalComponent3 name="sam" email="a@b.com" />
    <ContactCardFunctionalComponent4 name="sam" email="a@b.com" />
    <ContactCardFunctionalComponent5 name="sam" email="a@b.com" />
    {/* in general, you should not name your components in this way. */}
  </div>
);
