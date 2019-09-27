import contactReducer from './contactReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    message: contactReducer
})

export default rootReducer