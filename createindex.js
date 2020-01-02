const client = require('./connection.js'); 

module.exports = function createIndex(indexName) {
    return new Promise( (resolve, reject) => {
        client.indices.create({  
            index: indexName
          }, (err, resp, status) => {
            if(err) {
              reject(err);
            }
            else {
              resolve(resp);
            }
          });
    })
}
