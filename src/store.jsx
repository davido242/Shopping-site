import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer/cartReducer";
import { productReducer } from "./reducer/cartReducer";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'counter',
    storage,
};

// const reducers = combineReducers({ counter: counterSlice });
const reducers = combineReducers({productReducer, cartReducer })
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



// const store = createStore(rootReducer)

export {store, configureStore}