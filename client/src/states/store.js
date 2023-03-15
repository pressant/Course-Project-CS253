import { configureStore } from '@reduxjs/toolkit';
import apptReducer from './features/Appointments/apptSlice';

export const store = configureStore({
    reducer: {
        appt: apptReducer,
    },
});