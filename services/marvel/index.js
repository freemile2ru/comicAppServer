const axios = require('axios');
const md5 = require('md5')

const baseUrl = 'https://gateway.marvel.com:443/v1/public'

module.exports = {
	getComics: async (offset=0) => {
    const ts= +new Date;
    const publicKey = process.env.PUBLIC_API_KEY;
    const privateKey = process.env.PRIVATE_API_KEY;
    const hash = md5(`${ts}${privateKey}${publicKey}`);
    const comics = await axios.get(`${baseUrl}/comics`, {
      params: {
        startYear: '2017',
        orderBy: 'onsaleDate',
        apikey: publicKey,
        hash,
        ts,
        offset
      }
    })
    return comics.data.data.results;
  }
};