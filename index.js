//setting up the server

import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

//initializing express application
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send('Hello~'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));