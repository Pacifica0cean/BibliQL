const express = require('express');
const expressGraphQL = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

// Change this port if you want! It will simply replicate to the listen port on express.
const exp_port = 51115;


// Setup Express to use /graphql endpoint, running off the 'graphqlHTTP' glue for express graphql.
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    grapiqhl: true
}));

// Utilising template strings to push variable to log. Looks cool, that's about it. This can just be statically mapped.
app.listen(`${exp_port}`, () => { console.log(`Express frontend now live at: http://localhost:${exp_port}`); });