const axios = require('axios');

export const JokeAPI = (function JokeAPI() {
  const API_URL = 'https://api.icndb.com';

  function fetchRandomJoke() {
    return axios.get(`${API_URL}/jokes/random`)
      .then(({ data }) => {
        return (data && data.type === 'success')
          ? Promise.resolve(data.value.joke)
          : Promise.reject();
      })
      .catch(() => {
        throw new Error('Could not fetch a random joke!');
      });
  }

  return {
    fetchRandomJoke
  };
})();