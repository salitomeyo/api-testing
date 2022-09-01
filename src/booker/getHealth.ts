const axios = require('axios').default;

// export const checkApiHealth = () => {
//     return axios.get('https://restful-booker.herokuapp.com/ping');   
// };

const checkApiHealth = async() => {
    return await axios.get('https://restful-booker.herokuapp.com/ping');   
};

exports.module = {
    checkApiHealth
}

// export const checkApiHealth = async() => {
//     try {
//         return await axios.get('https://restful-booker.herokuapp.com/ping');  
//     } catch (error) {
//         console.warn(error);
//     }
// }
