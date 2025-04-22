const doctorBody = document.getElementById("doctorTableBody");

const doctorInfo = [
    { 
        name: "Dr.Mohamed Ahmed", 
        mobile: "+123456789", 
        email: "mohamedahmed@example.com", 
        doj: "2023-01-01" 
    },
    { 
        name: "Dr.Mahmoud Omar", 
        mobile: "+987654321", 
        email: "mahmoudomar@example.com", 
        doj: "2023-2-16" 
    },
    { 
        name: "Dr.Mariem Ahmed", 
        mobile: "+987654321", 
        email: "mariemahmed@example.com", 
        doj: "2023-12-03" 
    },
    { 
        name: "Dr.Mahnoud Awad", 
        mobile: "+987654321", 
        email: "mahnoudawad@example.com", 
        doj: "2023-05-01" 
    },
    { 
        name: "Dr.Mohammed Ahmed", 
        mobile: "+987654321", 
        email: "mohammedahmed@example.com", 
        doj: "2023-07-07" 
    },
    { 
        name: "Dr.Yasser Ahmed", 
        mobile: "+987654321", 
        email: "yasserahmed@example.com", 
        doj: "2023-09-08" 
    },
];

// const editIcon = "../Images/Icons/dashboard/edit-icon-1.svg";
// const deleteIcon = "../Images/Icons/dashboard/delete-icon.svg";

function renderDoctors (element, array) {
    array.forEach(doctor => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${doctor.name}</td>
            <td>${doctor.mobile}</td>
            <td>${doctor.email}</td>
            <td>${doctor.doj}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
            `;
            element.appendChild(row);
        });
    }

    renderDoctors(doctorBody, doctorInfo);