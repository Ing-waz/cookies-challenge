const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8080;



app.use(cookieParser());


app.get('/login', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name);
        res.send('Cookie has been set');
    } else {
        res.send('Please provide a name query parameter');
    }
});

app.get('/hello', (req, res) => {
    if (req.cookies.name) {
        res.send(`Welcome ${req.cookies.name}!`);
    } else {
        res.send('No name cookie found');
    }
});




app.listen(port, () => console.log(`Cookie Server listening at http://localhost:${port}`))