// Doctors Info And Details
const carouselSlide = document.querySelector('.carousel-slide');
const closeBtns = document.querySelector('article.appointment-modal > .close-btn');

const doctors = [
    {
        name: 'Dr. Mariem Omar',
        info: 'Consultant pediatrician and nutritionist<br>10 years of experience in children\'s <br> health care',
        image: '../Images/doctor1.png', 
    },
    {
        name: 'Dr. Amr Mohamed',
        info: 'Consultant pediatrician and nutritionist<br>10 years of experience in children\'s <br> health care',
        image: '../Images/doctor2.png', 
    },
    {
        name: 'Dr. Ahmed Mahmoud',
        info: 'Consultant pediatrician and nutritionist<br>10 years of experience in children\'s <br> health care',
        image: '../Images/doctor3.png', 
    }
];

// Create and append doctor cards to carousel
function renderDoctorCards(count = 9) {
    for (let i = 0; i < count; i++) {
        const doctorIndex = i % doctors.length;
        const doctor = doctors[doctorIndex];
        
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h2>${doctor.name}</h2>
            <p>${doctor.info}</p>
            <button class="consult-btn">Consult Now</button>
        `;
        
        carouselSlide.appendChild(doctorCard);
    }
}

renderDoctorCards(3);

// Appointment Modal
const appointmentModal = document.querySelector('.appointment-modal');
const appointmentModalBtns = document.querySelectorAll('.consult-btn');
// Using existing overlay to prevent duplicate declaration
const modalOverlay = document.querySelector('.overlay');
const submitModalBtn = document.querySelector('input[type="submit"]');

const toggleModal = (show) => {
    appointmentModal.style.display = show ? 'block' : 'none';
    modalOverlay.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
};

appointmentModalBtns.forEach(btn => {
    btn.addEventListener('click', () => toggleModal(true));
});

modalOverlay.addEventListener('click', () => toggleModal(false));

// Close modal when ESC key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appointmentModal.style.display === 'block') {
        toggleModal(false);
    }
});
closeBtns.addEventListener('click', () => toggleModal(false));


// Here to send the appointment model to the browser
submitModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(false);
});
