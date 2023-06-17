import {configureStore} from "@reduxjs/toolkit";
import {contactSlice} from "./contact/contact.slice";
import {contactApi} from "./contact/contact.api";

export const store = configureStore({
    reducer: {
        [contactSlice.name]: contactSlice.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        contactApi.middleware,
    ])
})

export type RootState = ReturnType<typeof store.getState>;