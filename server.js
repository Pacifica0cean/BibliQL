const express = require('express');
const expressGraphQL = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Change this port if you want! It will simply replicate to the listen port on express.
const exp_port = 51115;

// Setup of Mongoose, aka MongoDB. Change to your own Mongo URL!
const MDBURL = '';
if (!MDBURL) {
    throw new Error("Please input a Mongo DB URL with a valid account to proceed with Mongo DB initialization.");
}

// Setup framework for Mongoose connection.

mongoose.Promise = global.Promise;
mongoose.connect(MDBURL);
mongoose.connection
    .once('open', () => console.log('Connected.'))
    .on('error', error => console.log('Error found:', error));

// Setup Express to use /graphql endpoint, running off the 'graphqlHTTP' glue for express graphql.
const app = express();

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    grapiqhl: true
}));

// Utilising template strings to push variable to log. Looks cool, that's about it. This can just be statically mapped.
app.listen(`${exp_port}`, () => { console.log(`Express frontend now live at: http://localhost:${exp_port}`); });