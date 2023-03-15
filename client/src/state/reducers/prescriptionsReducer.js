const reducer = (appointments = [], action) => {

    function findAppt(appt) {
        return appt.appointmentId !== action.payload;
    }

    if(action.type === 'delete') {
        return appointments.filter(findAppt);
    }
    else if(action.type === 'add') {
        return [...appointments, action.payload];
    }
    else {
        return appointments;
    }
}

export default reducer;