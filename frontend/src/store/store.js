import { configureStore } from '@reduxjs/toolkit';
import account from './account/reducer'

export const store = configureStore({
    reducer: {
        account
    },
});