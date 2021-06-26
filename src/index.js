const express = require('express');
const chawk = require('chalk');
const { default: chalk } = require('chalk');
const Note = require('./router/note')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/note',Note);



app.listen(port,() => {
    console.log(chalk.yellow.inverse.bold(`Application running in dev env on port ${port}`))
})