function registerPatient() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDOB').textContent = dob;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputContact').textContent = contact;

    document.getElementById('outputContainer').style.display = 'block';
    document.getElementById('outputData').style.display = 'block';
  }