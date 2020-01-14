const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client( {  
  hosts: [
    //process.env.HOST
  ]
});

module.exports = client;
