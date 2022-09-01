const axios = require('axios').default;

export const getToken = async( username, password) => {
    return await axios.post('https://restful-booker.herokuapp.com/auth', {
        username,
        password
    });    
}

// export const checkApiHealth = async() => {
//     try {
//         return await axios.get('https://restful-booker.herokuapp.com/ping');   
//     } catch (error) {
//         console.warn(error);
//     }
// }