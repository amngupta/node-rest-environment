import rp from 'request-promise';

class ApiMethods {
    
    constructor(options){
        this.options = options;
    }

    Post() {
        return rp(this.options)
            .then(function (repos) {
                console.log('User has %d repos', repos.length);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    Crawl() {
        return rp('http://www.google.com')
            .then(function (htmlString) {
                console.log(htmlString);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    Test() {
        console.log("Here");
    }
}

export default ApiMethods;