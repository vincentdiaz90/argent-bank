import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "./reducer/User/firstName";
import lastNameReducer from "./reducer/User/lastName";
import tokenReducer from "./reducer/Token/token";


export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        token: tokenReducer
    },
});