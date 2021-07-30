//Express & GraphQl Setup.

const express = require('express');

const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql',graphqlHTTP({

}));

app.listen(7000, () => {
console.log('iam now listening for requests on port 7000');
});

//Handing the error while getting the main page.

// app.get('/', function (req, res) {
//     throw new Error('BROKEN') // Express catches this err by itself.
// })

// app.get('/', function (req, res, next) {
//     fs.readFile('/file-does-not-exist', function (err, data) {
//     if (err) {
//     next(err) // Passing errors to Express.
//     } else {
//         res.send(data)
//     }
//     })
// })