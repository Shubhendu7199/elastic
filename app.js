const countries = require('./countries.json');
const elastic = require('./elastic');


let countriesList = [];
const indexName = 'country';
const indexType = 'countriesList';
const body = {"name": "India"};


/*let id = 0;
countries.forEach(country => {
    id++;	
    countriesList.push({
        index: {
            _index: indexName,
            _type: indexType,
            //_id: id 
        }
    });
    countriesList.push(country);	
});
*/
//console.log(countriesList);
const searchPromise = elastic.search(indexName, indexType, body);
searchPromise.then(ret => {
	console.log(ret.hits.hits);	
}).catch(err => console.log(err));

//console.log(countriesList);
//const pushDataPromise = elastic.pushData(countriesList, indexName, indexType);
//pushDataPromise.then(res => console.log(JSON.stringify(res))).catch(err => console.log(err));
/*const createIndexPromise = elastic.createIndex(indexName);
createIndexPromise.then(ret => {
    console.log(ret);
    //const pushDataPromise = pushData(countriesList, indexName, indexType);
    //pushDataPromise.then(res => console.log(res)).catch(err => console.log(err));
}).catch(err => console.log(err));
*/
