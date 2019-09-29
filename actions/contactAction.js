import apiUrl from '../apiConfig'
const axios = require('axios')


export const sendMessage = (message) => {
    return (dispatch) => {

        axios.post(`${apiUrl}/contact`, message
        )
            .then(response => {
                dispatch({ type: 'SEND_MESSAGE', message })
                console.log(response);
            })
            .catch(error => {
                throw (error);
            });


        // dispatch({ type: 'SEND_MESSAGE', message })



    }
}