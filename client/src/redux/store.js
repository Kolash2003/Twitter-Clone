import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

const store = configureStore({
    reducer:{
        //actions
        user:userSlice
    }
});

export default store;