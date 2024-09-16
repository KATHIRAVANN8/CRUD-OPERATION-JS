let userCount = 0;
let editingRow = null;

// Handle form submission
document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const mobile = document.getElementById('mobile').value;

    const emailError = document.getElementById('emailError');
    emailError.textContent = ''; // Clear previous error messages

    if (editingRow) {
        updateRow(editingRow, name, email, dob, mobile);
    } else {
        if (isDuplicateEntry(email)) {
            emailError.textContent = 'User with this email already exists.';
        } else {
            addUserToTable(name, email, dob, mobile);
        }
    }

    // Reset the form if no error
    if (!emailError.textContent) {
        this.reset();
        let modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
        modal.hide();
    }
});

// Function to check for duplicate email entries
function isDuplicateEntry(email) {
    const rows = document.querySelectorAll('#userTable tbody tr');
    for (const row of rows) {
        if (row.children[2].textContent === email) {
            return true;
        }
    }
    return false;
}

// Function to add a user to the table
function addUserToTable(name, email, dob, mobile) {
    userCount++;

    const tableBody = document.querySelector('#userTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${userCount}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${dob}</td>
        <td>${mobile}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="editRow(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
}

// Function to edit a row
function editRow(button) {
    editingRow = button.closest('tr');

    const name = editingRow.children[1].textContent; // Index 1 for Name
    const email = editingRow.children[2].textContent; // Index 2 for Email
    const dob = editingRow.children[3].textContent; // Index 3 for DOB
    const mobile = editingRow.children[4].textContent; // Index 4 for Mobile

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('dob').value = dob;
    document.getElementById('mobile').value = mobile;

    let modal = new bootstrap.Modal(document.getElementById('addUserModal'));
    modal.show();
}

// Function to update an existing row
function updateRow(row, name, email, dob, mobile) {
    row.children[1].textContent = name; // Index 1 for Name
    row.children[2].textContent = email; // Index 2 for Email
    row.children[3].textContent = dob; // Index 3 for DOB
    row.children[4].textContent = mobile; // Index 4 for Mobile
    editingRow = null;
}

// Function to delete a row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    updateSerialNumbers();
}

// Function to update serial numbers
function updateSerialNumbers() {
    const rows = document.querySelectorAll('#userTable tbody tr');
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
    });
}

// Handle search input
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#userTable tbody tr');

    rows.forEach(row => {
        const name = row.children[1].textContent.toLowerCase();
        const email = row.children[2].textContent.toLowerCase();
        const dob = row.children[3].textContent.toLowerCase();
        const mobile = row.children[4].textContent.toLowerCase();

        if (name.includes(searchTerm) || email.includes(searchTerm) || dob.includes(searchTerm) || mobile.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Handle delete button click
document.getElementById('deleteButton').addEventListener('click', function() {
    // Show confirmation modal
    let confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.show();
});

// Handle confirm delete button click
document.getElementById('confirmDeleteButton').addEventListener('click', function() {
    const rows = document.querySelectorAll('#userTable tbody tr');
    rows.forEach(row => {
        if (row.style.display === '') {
            row.remove();
        }
    });

    // Hide the modal after deletion
    let confirmDeleteModal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
    confirmDeleteModal.hide();
    
    // Update serial numbers after deletion
    updateSerialNumbers();
});
