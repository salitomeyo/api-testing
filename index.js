// import { axios } from 'axios';
const axios = require('axios').default;

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.warn(error)
    });