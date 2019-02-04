const axios = require('axios')

module.exports = async (phrase) => {
    axios.
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })
    var output={
        data:results.data,
        status:results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }
    
    return JSON.stringify(output, null, 4);
}

