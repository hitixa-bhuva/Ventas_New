// Home page form validation
const form = document.getElementById('bookingForm');
const formSections = document.querySelector('.form-sections');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (form.checkValidity()) {
    // Hide form and show success message
    formSections.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.classList.add('animate__animated', 'animate__fadeIn');

    // After 3-4 seconds, hide the success message and show the form again
    setTimeout(() => {
      successMessage.style.display = 'none';
      formSections.style.display = 'block';
      form.classList.remove('was-validated'); // Reset validation styles
      form.reset(); // Reset form inputs
    }, 2000); // Show the success message for 4 seconds
  }

  form.classList.add('was-validated');
});
