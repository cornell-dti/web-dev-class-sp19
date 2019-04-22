const express = require('express');

const isProduction = process.env.NODE_ENV === 'production'
require('dotenv').config({ path: isProduction ? '.env.production' : '.env.dev' });

const app = express();

// WARINING: usually you should never send these kind of information to the user
// We do here to let you see that you are indeed using different config.
// Again, the .env files are not gitignore here simply because we want you to see the difference.
app.get('/', (_, resp) => resp.send(`DB_SECRET is ${process.env.DB_SECRET}\n`));

app.listen(8080, () => console.log('Server started.'));
