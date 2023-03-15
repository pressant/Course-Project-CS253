import { createSlice } from '@reduxjs/toolkit'

// GET data from db
const initialState = {
    // name: 'a',
    // id: 1,
    // prescriptionId: 0,
    // description: "",
    // medicines: [],
    // o2: 0,
    // temp: 0,
    // bp: 0,
    pending: [],
    completed: []
}

const apptSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        deleteAppointment: (appointmentId) => {
            return ((dispatch) => {
                dispatch({
                    type: 'delete',
                    payload: appointmentId
                });
            });
        },
        addAppointment: (appointment) => {
            return ((dispatch) => {
                dispatch({
                    type: 'add',
                    payload: appointment
                });
            });
        }
    }
});

export const { deleteAppointment, addAppointment } = apptSlice.actions;
export default apptSlice.reducer;