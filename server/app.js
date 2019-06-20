const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
//connect to database
mongoose.connect('mongodb://rajath:test123@ds235417.mlab.com:35417/gql-playlist')
mongoose.connection.once('open',()=> {
    console.log('connected to db');
})

// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('listening to port 4000');
})

