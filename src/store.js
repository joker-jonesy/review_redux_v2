import {configureStore} from "@reduxjs/toolkit";
import toyReducer from './reducers/toys'
import userReducer from './reducers/user'

const store = configureStore({
    reducer:{
        toys:toyReducer,
        users:userReducer
    }
})

export default store;