const instance = require('axios').create({
    baseURL: 'http://vemdezapbe.be/api/v1.0/zap'
})

const getZapeado = async (msg) => {
    const response = await instance.post('/', {
        zap: msg,
        tweet: false,
        rate: 0.8,
    });

    return response.data.zap;
}

module.exports = {
    getZapeado,
}