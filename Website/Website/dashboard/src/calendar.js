const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const calendarBody = document.getElementById("calendarBody");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let today = new Date(); // Current Date
let currentMonth = today.getMonth(); 
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthYear.textContent = `${monthNames[month]} ${year}`;

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                cell.textContent = "";
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                let cell = document.createElement("td");
                cell.textContent = "";
                row.appendChild(cell);
            } else {
                let cell = document.createElement("td");
                cell.textContent = date;
                appointmentAvailable = document.createElement("div");
                appointmentAvailable.setAttribute("class", "appointment");
                // Appointment availability in The Calendar
                appointmentAvailable.textContent = `${Math.floor(Math.random() * 10)} Appointment`;
                cell.appendChild(appointmentAvailable);  
                if (
                    date === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.classList.add("today");
                    appointmentAvailable.classList.add("today");
                }
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
        if (date > daysInMonth) break;
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
