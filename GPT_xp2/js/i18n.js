'use strict'
// Настройка i18next
import ru from "../data/ru.js";
import en from "../data/en.js";
import { updateLanguage } from "./upDtLng.js";
import { handleFormSubmission } from "./form.js";

i18next.init({
    lng: 'ru',
    resources: {
        ru,
        en
    }
}, function (err, t) {
    updateLanguage();
});

// Переключение языка
const languageToggle = document.getElementById('language-toggle')
languageToggle.addEventListener('click', function () {
    const newLang = i18next.language === 'ru' ? 'en' : 'ru';
    i18next.changeLanguage(newLang, () => {
        updateLanguage();
    });
});

// ----------------------------
// Regular expressions / validation

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');

usernameInput.addEventListener('blur', () => {
    const usernameRegex = /^[а-яА-ЯЁё0-9\s-]{2,30}$/; // 2-30 символов, кириллица, пробел и дефис
    if (!usernameRegex.test(usernameInput.value)) {
        usernameError.textContent = '2-30 символов, кириллица, пробел и дефис';
        usernameInput.classList.add('input-error');
    } else {
        usernameError.textContent = '';
        usernameInput.classList.remove('input-error');
    }
});

passwordInput.addEventListener('blur', () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Пример: минимум 8 символов, хотя бы 1 буква и 1 цифра
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Пароль должен содержать минимум 8 символов, включая буквы и цифры';
        passwordInput.classList.add('input-error');
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('input-error');
    }
});

emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой проверочный шаблон для электронной почты
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Введите корректный адрес электронной почты';
        emailInput.classList.add('input-error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
    }
});