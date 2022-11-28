const express = require('express');
const expressGraphQL = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Declare a horrible amount above.