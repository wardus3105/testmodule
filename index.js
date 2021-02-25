const fetch = require('node-fetch');  
class FetchTest {
    testFetch = fetch('https://api.github.com/users/github')
        .then(res => res.json())
        .then(json => console.log(json));
    }
export default FetchTest;
