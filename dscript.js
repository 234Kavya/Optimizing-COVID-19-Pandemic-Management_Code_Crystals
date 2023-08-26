document.getElementById('patient-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from the form inputs
    const symptoms = document.getElementById('symptoms').value;
    const disease = document.getElementById('disease').value;
    const age = document.getElementById('age').value;
    const medicine = document.getElementById('medicine').value;
    const prescription = document.getElementById('prescription').value;

    // Create a new table row to display the patient information
    const patientInfoBody = document.getElementById('patient-info-body');
    const newRow = patientInfoBody.insertRow();
    newRow.innerHTML = `<td>${age}</td><td>${disease}</td><td>${symptoms}</td><td>${medicine}</td><td>${prescription}</td>`;

    // Reset form fields after submission
    document.getElementById('symptoms').value = '';
    document.getElementById('disease').value = '';
    document.getElementById('age').value = '';
    document.getElementById('medicine').value = '';
    document.getElementById('prescription').value = '';
});
