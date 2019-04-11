# Assignment 6: Databases Part 1

## How to start

Start with your A5 assignment. If you did not do your A5 assignment well, we will release a solution Monday the 15th.

## Requirement

Submit, to CMS, a zip file that contains these things:

- `frontend/`: the frontend folder from a5, unchanged.
- `backend/`: the backend folder that contains all of your backend code that integrates with your database. This includes the json file from Firestore.

### Backend

You should only use the `express`, `body-parser`, and `firebase-admin` packages to complete the backend code.

Your backend should have two endpoints:

#### `GET /api/contact-cards`

This endpoint should return an array of contact card in this format. The data should come from
the `data` collection on Firestore (as opposed to the database array from A5).

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

If there is a record with the same email in the `data` collection on Firebase, you should return plaintext 'NOT_OK'
(no quotation mark).
If there is no record with the same email, you should add this to the `data` collection on Firestore and
plaintext 'OK' (no quotation mark).

### Frontend

No change. Your front-end should function exactly the same as in A5, since from the front-end's perspective nothing changed; it's still receiving data in the same format. The only thing that's changing is where and how the back-end stores data.

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
