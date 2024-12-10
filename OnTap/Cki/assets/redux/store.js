import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./reduxShoe";


export default configureStore({
    reducer: {
        shoe: shoeReducer,
    
    },
});