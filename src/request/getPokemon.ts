(() => {const axios = require('axios').default;

// export const getLitto = async() => {
//     const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.warn(error)
//     });

//     return resp
// }

// getLitto();

// axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.warn(error)
//     });

// const getPokemon = async() => {
//     const respon = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             console.warn(error)
//         });
//     return  await respon;
// }


const getPokemon = async() => {
    try {
        return await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');   
    } catch (error) {
        console.warn(error);
    }
}

// getPokemon()
//     .then(function (response) {
//     console.log(response.data);
// })
//     .catch(function (error) {
//         console.warn(error)
// });
})()