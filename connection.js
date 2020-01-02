const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client( {  
  hosts: [
    //process.env.HOST
    'http://elastic:chamgeme@157.245.186.210:9200/'
  ]
});

module.exports = client;
