const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formField = event.target;
  const formEmail = formField.elements.email.value;
  const formPassword = formField.elements.password.value;

  if (formEmail === '' || formPassword === '') {
    return window.alert('All form fields must be filled in');
  }

  const loginData = {
    email: formEmail.trim(),
    password: formPassword.trim(),
  };

  console.log(loginData);

  formField.reset();
}
