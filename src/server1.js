import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send("Hello1"))

app.post('/hello', (req, res) => res.send("Hello1"))

//app.post('/hello', (res,res) => res.send('Hello Hello'));

app.listen(8002, () => console.log('Listening on port 8002'));
