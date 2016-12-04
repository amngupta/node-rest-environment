import ApiMethods from './index.js'
// import Q from 'q';

var url = 'http://requestb.in/11wpcyx1'

const options = {
    uri: url,
    method: 'POST',
    body: {
        some: 'payload'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
};

let test = new ApiMethods(options);
let promise = test.Post();
promise.then(function(){
    console.log("Here");
});

