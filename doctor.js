// Simulate appointments data
const appointments = ['Appointment 1', 'Appointment 2', 'Appointment 3'];

const appointmentsList = document.getElementById('appointments-list');
appointments.forEach(appointment => {
    const listItem = document.createElement('li');
    listItem.textContent = appointment;
    appointmentsList.appendChild(listItem);
});
