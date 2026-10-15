const form = document.querySelector('form');
const fields = form.querySelectorAll('input, textarea, select');

function getEnglishError(field) {
  if (field.validity.valueMissing) {
    return field.tagName === 'SELECT' ? 'Please select a country.' : 'Please fill out this field.';
  }
  if (field.validity.typeMismatch) return 'Please enter a valid email address.';
  if (field.validity.tooShort) return 'Please use at least ' + field.minLength + ' characters.';
  if (field.validity.tooLong) return 'Please use no more than ' + field.maxLength + ' characters.';
  if (field.validity.customError) return 'Passwords do not match.';
  return field.validity.valid ? '' : 'Please enter a valid value.';
}

function validateForm() {
  const password = document.getElementById('password');
  const confirmation = document.getElementById('confirmPassword');
  if (confirmation) {
    confirmation.setCustomValidity('');
    if (confirmation.value && confirmation.value !== password.value) {
      confirmation.setCustomValidity('Passwords do not match.');
    }
  }

  for (const field of fields) {
    if (field.type === 'checkbox') continue;
    const valid = field.validity.valid;
    field.classList.toggle('is-valid', valid);
    field.classList.toggle('is-invalid', !valid);
    field.setAttribute('aria-invalid', String(!valid));
    const error = document.getElementById(field.id + '-error');
    if (error) error.textContent = getEnglishError(field);
  }

  const genderError = document.getElementById('gender-error');
  if (genderError) {
    genderError.hidden = Boolean(form.querySelector('input[name="gender"]:checked'));
  }
  return form.checkValidity();
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!validateForm()) form.querySelector(':invalid').focus();
});

form.addEventListener('reset', function () {
  for (const field of fields) {
    field.classList.remove('is-valid', 'is-invalid');
    field.removeAttribute('aria-invalid');
    field.setCustomValidity('');
  }
  const genderError = document.getElementById('gender-error');
  if (genderError) genderError.hidden = true;
});
