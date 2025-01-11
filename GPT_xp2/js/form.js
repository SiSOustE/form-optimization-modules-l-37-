export function handleFormSubmission(event) {
  event.preventDefault(); // Предотвращаем отправку формы
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  const messageDiv = document.getElementById('message');

  if (!agreeTerms) {
    messageDiv.textContent = i18next.t('errorMessage');
    messageDiv.style.color = 'red';
    return;
  }

  messageDiv.textContent = i18next.t('successMessage');
  messageDiv.style.color = 'green';
}