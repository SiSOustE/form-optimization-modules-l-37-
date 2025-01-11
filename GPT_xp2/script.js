'use strict'
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');

usernameInput.addEventListener('blur', () => {
    const usernameRegex = /^[а-яА-ЯёЁ\s\-]+$/;
    if (!usernameRegex.test(usernameInput.value)) {
        usernameError.textContent = 'может содержать символы кириллицы, пробелы, дефис';
        usernameInput.classList.add('input-error');
    } else {
        usernameError.textContent = '';
        usernameInput.classList.remove('input-error');
    }
});

passwordInput.addEventListener('blur', () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'минимум 8 символов, обязательно латинские буквы и цифры';
        passwordInput.classList.add('input-error');
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    }
});

emailInput.addEventListener('blur', () => {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; // Простой проверочный шаблон для электронной почты
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Введите корректный адрес электронной почты';
        emailInput.classList.add('input-error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    }
});