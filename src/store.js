import {configureStore} from "@reduxjs/toolkit";
import Reducer from './todoSlice';
const store = configureStore({
    reducer : Reducer
})

export default store;