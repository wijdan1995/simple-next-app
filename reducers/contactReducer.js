const initState = {
    messages: []
}

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            console.log('Message sent', action.message);
    }
    return state;
}

export default contactReducer
