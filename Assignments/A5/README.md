# Assignment 5: Frontend + Backend

## How to start

1. Create a new folder. Let's say it's called `a5`.
2. Inside `a5/`, create a folder called `backend/`. Inside the `backend/` folder, run `npm init`,
   and then run `npm install express body-parser`.
3. Inside `a5/`, run `npx create-react-app frontend`. Inside the `frontend/` folder, add this line
   into your `package.json`: `"proxy": "http://localhost:8080",`. It allows you to run the frontend
   and backend server simutaneously without any cross-origin issues.

## Requirement

Submit, to CMS, a zip file that contains these things:

- `frontend/`: the frontend folder that contains all of your frontend code.
- `backend/`: the backend folder that contains all of your backend code.

### Backend

You should only use `express` and `body-parser` to complete the backend code.

Your backend should have two endpoints:

#### `GET /api/contact-cards`

This endpoint should return an array of contact card in this format. The data should come from
the `data` array.

```json
[
  { "name": "Sam", "email": "a@b.com" },
  { "name": "Sam 2", "email": "c@d.com" }
]
```

#### `POST /api/add-contact-card`

This endpoint should do the following thing:

It should accept any POST request of this format of body:

```json
{
  "name": "Sam",
  "email": "a@b.com"
}
```

If there is a record with the same email in the `data` array, you should return plaintext 'NOT_OK'
(no quotation mark).
If there is no record with the same email, you should append this to the end of `data` and return
plaintext 'OK' (no quotation mark).

### Frontend

You should write these components:

- a component that can display a list of all contact cards. Inside `componentDidMount`, you should
  fetch the data from the server. Note that there will be some time when the component is loaded
  but the data is not loaded. You need to display something like `Loading...` in that period of
  time.
- a component that allows you to add a new contact card. The data should be posted to the server
  when the submit button is clicked.

These component should load data and post data to the endpoints of your server.

### Debugging Hints

#### Ports

Please ensure that your frontend dev server and the backend server don't run on the same port.

The easiest way to achieve this is to make the backend server run on `8080`.

#### Slowering Responses

Network requests can take time. However, the time is not very noticable when you are running the
server locally. Therefore, we recommend you to intentionally slower your response when you are
debugging.

For example, if you want to simply return `OK`, you might write:

```javascript
app.get('/hello-world', (_, resp) => {
  resp.status(200).send('OK');
});
```

You can use `setTimeout` to delay it:

```javascript
app.get('/hello-world', (_, resp) => {
  // delay for 1000ms = 1s.
  setTimeout(() => resp.status(200).send('OK'), 1000);
});
```

#### Restarting Issues

Your frontend server has hot-reload, which means that it will automatically reload when it finds
that one of your code file is changed. However, your backend server will not hot-reload. Keep that
in mind when you believe you just fixed a bug in the backend but the bug is still there.
