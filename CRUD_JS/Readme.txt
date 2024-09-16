 CRUD Operation in JavaScript

## Project Overview
This project demonstrates a basic CRUD (Create, Read, Update, Delete) operation using JavaScript and Bootstrap for styling. Users can add, edit, delete, and search for records dynamically in a table. 

## Features
- Add new user records to the table.
- Edit existing user records.
- Delete individual user records.
- Delete all displayed user records with confirmation.
- Search functionality to filter user records.

## Project Structure
- HTML: The structure of the page including modals for adding users and confirming deletion.
- JavaScript: Handles form submissions, table operations (add, edit, delete), and search functionality.
- Bootstrap: Used for styling and modals.
- Font Awesome: Used for icons.

## Dependencies
- Bootstrap 5.3.3
- Font Awesome 6.0.0-beta3

## Setup

1. Include the Required Libraries
   - Bootstrap CSS and JS:
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

   - Font Awesome:
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
     

2. HTML Structure
   - Add User Modal: A form to input new user data.
   - Confirmation Modal: For confirming the deletion of all records.
   - User Table: Displays user data and allows for editing and deletion of individual records.

3. JavaScript File (`script.js`)
   - Handles the form submission, adds new user records, edits existing records, deletes individual records, and manages search functionality.

## JavaScript Functionality

1. Form Submission (`addUserForm`)
   - Adds new users to the table or updates existing user records.
   - Checks for duplicate email entries.
   - Displays error messages if any.

2. Add User to Table (`addUserToTable`)
   - Adds a new user record to the table with sequential numbering.

3. Edit User Record (`editRow`)
   - Populates the form with existing user data for editing.

4. Update User Record (`updateRow`)
   - Updates user data in the table based on the edited form.

5. Delete User Record (`deleteRow`)
   - Removes a specific user record from the table and updates serial numbers.

6. Search Functionality
   - Filters the table based on search input to show matching records.

7. Delete All Records (`deleteButton` and `confirmDeleteButton`)
   - Shows a confirmation modal before deleting all displayed records.

## How to Use

1. Add New User
   - Click the "Add New User" button to open the modal.
   - Fill in the form and submit to add a new user.

2. Edit Existing User
   - Click the "Edit" button next to a user record.
   - Update the details and submit the form to save changes.

3. Delete User Record
   - Click the "Delete" button next to a user record to remove it.

4. Delete All Records
   - Click the "Delete" button in the top right corner.
   - Confirm the deletion in the modal.

5. Search Records
   - Type in the search box to filter records based on name, email, date of birth, or mobile number.

## Notes
- Ensure all libraries are correctly linked for proper functionality and styling.
- The project is styled with Bootstrap and uses Font Awesome for icons. Adjust paths if necessary for your local setup.
