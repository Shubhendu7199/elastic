const client = require('./connection.js'); 

module.exports = function(bulkData, indexName, type) {
    return new Promise((resolve, reject) => {
        client.bulk({
            maxRetries: 5,
            index: indexName,
            type: type,
            body: bulkData
          }).then(resp => resolve(resp))
          .catch(err => reject(err))
    })
    
}
