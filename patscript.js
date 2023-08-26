const medicineList = document.getElementById("medicine-list");
const medicineForm = document.getElementById("medicine-form");

medicineForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const medicineName = document.getElementById("medicine-name").value;
    const listItem = document.createElement("li");
    listItem.textContent = medicineName;
    medicineList.appendChild(listItem);
    document.getElementById("medicine-name").value = "";
});

const fetchButton = document.getElementById("fetch-button");
const patientDataDiv = document.getElementById("patient-data");

const dummyPatients = [
    {
        id: "1",
        name: "John Doe",
        age: 30,
        history: "Lorem ipsum dolor sit amet...",
        medicines: ["Medicine A", "Medicine B"]
    },
    {
        id: "2",
        name: "Jane Smith",
        age: 25,
        history: "Pellentesque habitant morbi tristique senectus...",
        medicines: ["Medicine C", "Medicine D"]
    },
    {
        id: "3",
        name: "Michael Johnson",
        age: 45,
        history: "Vestibulum ac diam sit amet quam vehicula...",
        medicines: ["Medicine E", "Medicine F"]
    }
    // You can add more dummy patient data here
];

fetchButton.addEventListener("click", function () {
    const patientId = document.getElementById("patient-id").value;
    const patient = dummyPatients.find(patient => patient.id === patientId);

    if (patient) {
        const patientInfo = `
            <div id="patient-info">
                <h3>${patient.name}</h3>
                <p>Age: ${patient.age}</p>
                <h4>Medical History</h4>
                <p>${patient.history}</p>
                <h4>Medicine Details</h4>
                <ul>
                    ${patient.medicines.map(medicine => `<li>${medicine}</li>`).join("")}
                </ul>
            </div>
        `;
        patientDataDiv.innerHTML = patientInfo;
    } else {
        patientDataDiv.innerHTML = "<p>Patient not found.</p>";
    }
});
