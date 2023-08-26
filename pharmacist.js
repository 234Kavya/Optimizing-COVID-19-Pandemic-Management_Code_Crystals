// pharmacist.js
const hospitalsByCity = {
    'New York': ['NYC Hospital', 'Downtown Medical', 'Central Care Clinic'],
    'Los Angeles': ['LA Medical Center', 'Sunset Hospital', 'Westside Clinic'],
    'Chicago': ['Windy City Hospital', 'Lakefront Clinic', 'Metro Health Center'],
    'Houston': ['City General Hospital', 'Sunrise Medical', 'Southwest Clinic'],
    'Miami': ['Bayfront Medical', 'Oceanview Hospital', 'Downtown Clinic'],
    'Atlanta': ['Peachtree Medical', 'Southern Health Center', 'Midtown Clinic'],
    'Dallas': ['Dallas Regional Hospital', 'Cityview Medical', 'Northside Clinic'],
    'Denver': ['Rocky Mountain Hospital', 'Summit Health Center', 'West End Clinic'],
    'Phoenix': ['Desert Medical Center', 'Valley Hospital', 'Skyline Clinic'],
    'Seattle': ['Emerald Medical', 'Soundview Hospital', 'Pioneer Clinic']
};


function populateHospitals(city) {
    const hospitalDropdown = document.getElementById('hospital');
    hospitalDropdown.innerHTML = '';

    hospitalsByCity[city].forEach(hospital => {
        const option = document.createElement('option');
        option.value = hospital;
        option.textContent = hospital;
        hospitalDropdown.appendChild(option);
    });
}

document.getElementById('city').addEventListener('change', function () {
    const selectedCity = this.value;
    populateHospitals(selectedCity);
});

// Dummy data for available medicines
const availableMedicines = [
    { name: 'Paracetamol', quantity: 100 },
    { name: 'Ibuprofen', quantity: 75 },
    { name: 'Aspirin', quantity: 50 },
    // Add more medicines and quantities as needed
];

document.getElementById('medicine-search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedCity = document.getElementById('city').value;
    const selectedHospital = document.getElementById('hospital').value;
    const searchQuery = document.getElementById('medicine').value;

    const medicineList = document.getElementById('medicine-list');
    medicineList.innerHTML = '';

    const matchingMedicines = availableMedicines.filter(medicine => {
        return medicine.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (matchingMedicines.length === 0) {
        medicineList.textContent = 'No medicines found.';
    } else {
        matchingMedicines.forEach(medicine => {
            const medicineItem = document.createElement('div');
            medicineItem.className = 'medicine-item';
            medicineItem.textContent = `${medicine.name} - Quantity: ${medicine.quantity}`;
            medicineList.appendChild(medicineItem);
        });
    }
});

populateHospitals('New York');

document.getElementById('medicine-search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // ... (rest of the code)

    // Simulated matching medicines
    const matchingMedicines = [
        { name: 'Paracetamol', quantity: 100 },
        { name: 'Ibuprofen', quantity: 75 }
        // Add more medicines
    ];

    // ... (rest of the code)

    displayMedicines(matchingMedicines);
});

document.getElementById('sort-by').addEventListener('change', function () {
    const sortBy = this.value;
    const sortedMedicines = matchingMedicines.slice().sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'quantity') {
            return a.quantity - b.quantity;
        }
    });

    displayMedicines(sortedMedicines);
});

function displayMedicines(medicines) {
    const medicineItemsContainer = document.querySelector('.medicine-items');
    medicineItemsContainer.innerHTML = '';

    medicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.className = 'medicine-item';
        medicineItem.innerHTML = `<span class="medicine-name">${medicine.name}</span>
                                  <span class="medicine-quantity">Quantity: ${medicine.quantity}</span>`;
        medicineItemsContainer.appendChild(medicineItem);
    });
}
