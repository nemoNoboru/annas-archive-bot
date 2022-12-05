const http = require('https')

function fetch(host, path) {
    return new Promise((resolve, reject) => {
        const options = {
            host,
            path
        }
        callback = function (response) {
            if (response.statusCode !== 200) reject(`error connecting to annas ${response.statusCode}`)
            var str = '';
            //another chunk of data has been received, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', function () {
                resolve(str)
            });
        }

        http.request(options, callback).end();
    })
}

module.exports = fetch