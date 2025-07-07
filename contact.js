
emailjs.init('qdrD1Gvbo_Tx1DEps'); // Replace with your EmailJS user ID

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_xkjcvfq', 'template_vyhzlps', this)
    .then(function() {
      alert('Message sent!');
      location.reload();
    }, function(error) {
      alert('Failed to send: ' + error.text);
    });
});
