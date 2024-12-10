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
  
      setTimeout(() => {
        successMessage.style.display = 'none';
        formSections.style.display = 'block';
        form.classList.remove('was-validated'); // Reset validation styles
        form.reset(); // Reset form inputs
      }, 2000); // Show the success message for 4 seconds
    }
  
    form.classList.add('was-validated');
  });

  document.querySelector('.icon-scroll').addEventListener('click', function() {
  var targetSection = document.getElementById('trialSection');

  if (targetSection) {
    var targetPosition = targetSection.offsetTop;
    console.log("Scrolling to position: " + targetPosition);
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' 
    });
  } else {
    console.error("Target section with ID 'services' not found.");
  }
});



