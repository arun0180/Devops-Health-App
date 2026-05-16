function bookAppointment() {

    const patientName =
        document.getElementById('patientName').value;

    const appointments =
        document.getElementById('appointments');

    const li = document.createElement('li');

    li.textContent =
        `Appointment booked for ${patientName}`;

    appointments.appendChild(li);

    document.getElementById('patientName').value = '';
}