const express = require("express");

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'}
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, ()=> console.log(`server online port: ${port}`));