// Array to hold student details
let students = [];

// Function to display the form
function openForm() {
    document.getElementById("dsply_form").style.display = "block";
    document.getElementById("overlay").style.display = "block";  // Show the overlay

}

// Function to close the form
function closeForm() {
    document.getElementById("dsply_form").style.display = "none";
    document.getElementById("overlay").style.display = "none";  // Hide the overlay

}

// Function to add a student to the array and update the student cards
function addStudent(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get values from the form
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const contact = document.getElementById("contact").value;

    // Create a new student object
    const student = {
        name,
        gender,
        dob,
        address,
        contact
    };

    // Add the new student to the array
    students.push(student);

    // Clear the form
    document.getElementById("name").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("address").value = '';
    document.getElementById("contact").value = '';

    // Update the display of student cards
    displayStudents();
}

// Function to display all students in the cards
function displayStudents() {
    const studentCards = document.getElementById("studentCards");
    studentCards.innerHTML = ''; // Clear existing student cards

    students.forEach((student, index) => {
        studentCards.innerHTML += `
            <div class="col" id="details">
                <div class="card h-100">
                    <img src="./Assets/${student.gender === 'male' ? 'male.png' : 'female.png'}" class="card-img-top" alt="Student Image">
                    <div class="card-body pt-5 ps-4">
                        <table class="card-body table table-borderless">
                            <tr>
                                <td>Student Name</td>
                                <td>-&nbsp;&nbsp;&nbsp; ${student.name}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>-&nbsp;&nbsp;&nbsp; ${student.gender}</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>-&nbsp;&nbsp;&nbsp; ${student.dob}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>-&nbsp;&nbsp;&nbsp; ${student.address}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>-&nbsp;&nbsp;&nbsp; ${student.contact}</td>
                            </tr>
                        </table>
                        <div class="d-flex justify-content-center mt-4 mb-4">
                            <button class="btn btn-danger" type="button" onclick="deleteStudent(${index})">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1); // Remove the student from the array
    displayStudents(); // Update the display after deletion
}

// Attach event listener to form submit button
document.querySelector('.stdform').addEventListener('submit', addStudent);

