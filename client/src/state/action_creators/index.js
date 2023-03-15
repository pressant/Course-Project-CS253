export const deleteAppointment = (appointmentId) => {
    return ((dispatch) => {
        dispatch({
            type: 'delete',
            payload: appointmentId
        });
    });
}

export const addAppointment = (appointment) => {
    return ((dispatch) => {
        dispatch({
            type: 'add',
            payload: appointment
        });
    });
}