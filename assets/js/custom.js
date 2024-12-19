	// Home page form validation
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');
    const formSections = document.querySelector('.form-sections');
    const successMessage = document.getElementById('successMessage');

    if (form) { // Check if the form element exists
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
          // Hide form and show success message
          formSections.style.display = 'none';
          successMessage.style.display = 'block';
          successMessage.classList.add('animate__animated', 'animate__fadeIn');

          setTimeout(() => {
            successMessage.style.display = 'none';
            formSections.style.display = 'block';
            form.classList.remove('was-validated'); // Reset validation styles
            form.reset(); // Reset form inputs
          }, 2000); // Show the success message for 2 seconds
        }

        form.classList.add('was-validated');
      });
    } else {
      console.error('Form element not found.');
    }
  });