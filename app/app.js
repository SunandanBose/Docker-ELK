const fetch = require('node-fetch');

function postData(){
    const body = { "Sunandan" : "Sunandan Bose"};
 
    fetch('http://elasticsearch:9200/api_diff/_doc/', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

}

postData();