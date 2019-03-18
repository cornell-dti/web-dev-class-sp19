# A4 README

## Optional Material

Watch (optional, very high level overview of what React is):
[video link](https://www.youtube.com/watch?v=7K2rDNOlEes)

Read (highly recommended and very helpful resource on React, provided by Facebook. You could even
read this instead of going to lecture and still be able to do the assignment.):
[docs link](https://reactjs.org/docs/hello-world.html) (up to Section 12)

## Requirement

Submit, to CMS, React code which does the following:

### Coding Exercises

You should first create a website that has the following components. You can name them in whatever
way you want. Your should create the following components in separate files and use them in
`App.js`/`App.jsx`.

#### Emoji Search Component

This component allows users to search for emojis and embed them in your React application.

This searching should occur in real time, without needing to press a button.

You will use the `node-emoji` library to search for an emoji, and show it to the user if it is the
valid name of an emoji.

If there is not a valid emoji for the input query, tell the user that their query was invalid.

#### Doggo Translator

This component should have a text input and a submit button.

When the submit button is clicked, the text from this input is sent to the doggo-translator library.

The output of the doggo-translator is shown in the front-end, along with a dog emoji
(your pick on which dog emoji!)

#### Pet/Animal

A simple component that shows a picture of your pet/favorite animal.

Hint: [docs link](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files).

#### Functional Contact Cards

You need to create a component `ContactCardList` that renders a list of contact cards.

This component should use a component `ContactCard` that only renders a single contact card.

Your component must be able to handle these kinds of data:

```javascript
const oneContactCard = {
  name: 'Sam',
  email: 'random-email@gmail.com',
}
const contactCardList = [oneContactCard, oneContactCard, oneContactCard];

// this should be rendered correctly!
const App = () => (
  <div>
    <ContactCardList data={contactCardList} />
    <ContactCard name={oneContactCard.name} email={oneContactCard.email} />
  </div>
);
```

In your `App.js`/`App.jsx` file, you should use the `ContactCardList` in this way.

```javascript
// Hardcode some data here. We will change them during testing
const data = [{ name: 'Foo', email: 'Bar' }];

/// ... somewhere inside the render method in class App
<ContactCardList data={data}>
```

### Debugging Exercises

Fix the problems in [BrokenComponent.jsx](./BrokenComponent.jsx). There are two problems in total.

After you fixed the problems, include the fixed components in your website following the three
components.

## Limitations

- Do not use methods that act on the document (like `document.getElementById`). These will not work
with React well, and should not be used.
- Do not use Express.
- Do not use Bootstrap or jQuery.
- Do not include `node_modules` in your ZIP file submission.

## Karma

- Use [hooks](https://reactjs.org/docs/hooks-intro.html) instead of stateful/class components.
- Write the assignment in [TypeScript](https://typescriptlang.org). You can create a TypeScript
React app by `npx create-react-app [your-app-name] --typescript`.
