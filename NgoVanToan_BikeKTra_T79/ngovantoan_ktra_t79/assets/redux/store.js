import { configureStore } from '@reduxjs/toolkit';
import bikeRedux from './bikeredux';

export const store = configureStore({
    reducer: {
        bikes: bikeRedux,
    },
}); 