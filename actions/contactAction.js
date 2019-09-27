export const sendMessage = (message) => {
    return (dispatch, getState) => {
        // async call
        dispatch({ type: 'SEND_MESSAGE', message })
    }
}