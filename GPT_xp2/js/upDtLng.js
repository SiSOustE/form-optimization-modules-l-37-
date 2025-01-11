// Функция обновления языка
export function updateLanguage() {
    const titleElement = document.getElementById('form-title');
    if (titleElement) {
        titleElement.textContent = i18next.t('title');
    }

    const usernameLabel = document.querySelector('label[for="username"]');
    if (usernameLabel) {
        usernameLabel.textContent = i18next.t('usernameLabel');
    }

    const passwordLabel = document.querySelector('label[for="password"]');
    if (passwordLabel) {
        passwordLabel.textContent = i18next.t('passwordLabel');
    }

    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) {
        emailLabel.textContent = i18next.t('emailLabel');
    }

    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.textContent = i18next.t('submitButton');
    }

    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
        toggleButton.textContent = i18next.t('toggleButton');
    }
}