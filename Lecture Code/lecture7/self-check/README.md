# Firestore Setup Self-Check

## Setup

1. Create an account on [Firebase](https://firebase.google.com). You only need the free version.
2. Go to the database tab in Firebase console. Choose to create **Firestore** starting in locked
   mode.
3. Download the service account in Project Settings > Service accounts.
4. Clone this repo and `cd` into this folder.
5. `npm install` to install all dependencies.
6. Rename the downloaded service account json to `service-account.json` and put it in this folder.
7. Run `node index.js` in this folder.

## Expected Result

### `GET /`

In the browser, you should see `Hello World!`.

### `GET /self-check`

In the browser, you should see `OK`.

In the terminal, you should see something similar to this:

```text
Example app listening on port 8080!
Sending doc to DB.
Doc recorded in DB
Trying to obtain doc in DB.
We obtained a doc with id random-id. It's content is logged below:
{ name: 'Hello World',
  time: Timestamp { _seconds: 1554738493, _nanoseconds: 994000000 } }
Now we will try to remove it.
The document is deleted.
After all these operations, the db should be empty. We check that.
We passed the check. The page in browser should say OK.
```
