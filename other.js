const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-link');
const signinLink = document.querySelector('.signin-link'); 
const forgotBox = document.querySelector('.forgot-box');

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
    forgotBox.style.transform = 'translateX(380px)';
});

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    forgotBox.style.transform = 'translateX(380px)';
});

forgotLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
    forgotBox.style.transform = 'translateX(0)';
});


signinLink.addEventListener('click', () => {
    logregBox.classList.remove('active'); 
    forgotBox.style.transform = 'translateX(380px)';
});


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 120 }, (_, i) => currentYear - i);
const monthSelect = document.getElementById("birthdayMonth");
const daySelect = document.getElementById("birthdayDay");
const yearSelect = document.getElementById("birthdayYear");
const genderSelect = document.getElementById("gender");

// Populate month select
months.forEach(month => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
});

// Populate day select
days.forEach(day => {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
});

// Populate year select
years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
});



function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    if (username === 'admin' && password === 'admin') {
        isAuthenticated = true;
        window.location.href = 'main.html';
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}
