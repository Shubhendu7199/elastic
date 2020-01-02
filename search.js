const client = require('./connection.js')

module.exports = function getData(indexName, indexType, queryBody) {
   return new Promise ((resolve, reject) => {
       client.search({
        index: indexName,
        type: indexType,
        body: {
          query: {
            match: queryBody
          }
        }
    })
    .then(res => resolve(res))
    .catch(err => reject(err))
    })
};

