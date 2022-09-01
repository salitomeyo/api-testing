(() => {
    const axios = require('axios').default;

    const getAuth = async() => {
        try {
            return await axios.post('https://restful-booker.herokuapp.com/auth', {
                username: 'admin',
                password: 'password123'
            });   
        } catch (error) {
            console.warn(error);
        }
    }

    const header = {
        'content-type': 'application/json',
        'Accept': 'application/json'
    };

    const creatBooking = async() => {
        try {
            return await axios.post('https://restful-booker.herokuapp.com/booking',  
                { headers: header }, 
                {
                firstname : "Jim",
                lastname : "Brown",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            }); 
        } catch (error) {
            console.warn(error);
        }
    }

// getAuth()
//     .then(function (response) {
//     console.log(response.data);
// })
//     .catch(function (error) {
//         console.warn(error)
// });

creatBooking()
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
        console.warn(error)
});

})()