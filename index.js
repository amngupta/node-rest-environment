import rp from 'request-promise';

var url = 'http://requestb.in/11wpcyx1'


//Crawl
// rp('http://www.google.com')
//     .then(function (htmlString) {
//         console.log(htmlString);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


var options = {
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

rp(options)
    .then(function (repos) {
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // API call failed... 
    });