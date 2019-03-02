const axios = require('axios');

export const JokeAPI = (function JokeAPI() {
  const API_URL = 'https://api.icndb.com';
  const API_HERO = 'Chuck Norris';

  function fetchRandomJoke() {
    return axios.get(`${API_URL}/jokes/random?escape=javascript`)
      .then(({ data }) => {
        return (data && data.type === 'success')
          ? Promise.resolve(decodeURIComponent(data.value.joke))
          : Promise.reject();
      })
      .catch(() => {
        throw new Error('Could not fetch a random joke!');
      });
  }

  return {
    hero: API_HERO,
    fetchRandomJoke
  };
})();