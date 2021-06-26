const express = require('express');
const chawk = require('chalk');
const { default: chalk } = require('chalk');
const Task = require('./router/note')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/note',Task);



app.listen(port,() => {
    console.log(chalk.yellow.inverse.bold(`Application running in dev env on port ${port}`))
})