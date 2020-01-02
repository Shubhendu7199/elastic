const client = require('./connection.js');

client.cluster.health({}, (err, resp, status) => {  
  console.log("-- Client Health --", resp);
});
