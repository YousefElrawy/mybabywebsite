const sickChildTableBody = document.getElementById('sickChildTableBody');

// Sick children info
const sickChildInfo = [
    {
        name: "Ahmed",
        age: "2 Months",
        guardianName: "Ali Mohammed",
        guardianEmail: "ali.mohammed@example.com",
        phoneNumber: "+123456789"
    },
    {
        name: "Mariem",
        age: "5 Months",
        guardianName: "Khaled Ibrahim",
        guardianEmail: "khaled.ibrahim@example.com",
        phoneNumber: "+987654321"
    },
    {
        name: "Youssef",
        age: "4 Months",
        guardianName: "Mohammed Ahmed",
        guardianEmail: "Mohammed.ahmed@example.com",
        phoneNumber: "+987654321"
    },
    {
        name: "Fatma",
        age: "1 Months",
        guardianName: "Ibrahim Ali",
        guardianEmail: "ibrahim.ali@example.com",
        phoneNumber: "+987654321"
    },
    {
        name: "Seif",
        age: "8 Months",
        guardianName: "Yassen Abdlurhman",
        guardianEmail: "yassen.abdlurhman@example.com",
        phoneNumber: "+987654321"
    },
    {
        name: "Layla",
        age: "9 Months",
        guardianName: "Karem Hassan",
        guardianEmail: "karem.hassan@example.com",
        phoneNumber: "+987654321"
    },
]

// function renderDoctors () {}

const renderDoctors = (element, array) => {
    array.forEach(child => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${child.name}</td>
            <td>${child.age}</td>
            <td>${child.guardianName}</td>
            <td>${child.guardianEmail}</td>
            <td>${child.phoneNumber}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        element.appendChild(row);
    });
}

renderDoctors(sickChildTableBody, sickChildInfo);