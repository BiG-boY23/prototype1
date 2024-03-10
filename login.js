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

let isAuthenticated = false;
let users = [];

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            if (document.getElementById('loginForm').style.display === 'block') {
                login();
            } else if (document.getElementById('registerForm').style.display === 'block') {
                register();
            } else if (document.getElementById('forgotPasswordForm').style.display === 'block') {
                recoverPassword();
            }
        }
    });

    // Initialize users array from localStorage if available
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
});

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        isAuthenticated = true;
        window.location.href = 'main.html';
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
        console.log('Login failed with username:',username);
        console.log('Users:', users);
    }
}

function recoverPassword() {
    const recoveryEmail = document.getElementById('recoveryEmail').value;
    alert(`Password recovery email sent to: ${recoveryEmail}`);
}

function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const birthdayMonth = document.getElementById('birthdayMonth').value;
    const birthdayDay = document.getElementById('birthdayDay').value;
    const birthdayYear = document.getElementById('birthdayYear').value;
    const gender = document.querySelector('input[name="gender"]:checked');

   
    if (firstName.trim() === '' || lastName.trim() === '' || username.trim() === '' || password.trim() === '' || birthdayMonth === 'month' || birthdayDay === 'day' || birthdayYear === 'year' || gender === null) {
        alert('Please fill in all required fields.');
        return;
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username, 
        password: password,
        birthday: `${birthdayMonth}/${birthdayDay}/${birthdayYear}`,
        gender: gender.value
    };


    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    
    alert('Registration successful! You can now login.');

    showLoginForm();
}