emailjs.init('qdrD1Gvbo_Tx1DEps');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_8gc5ksk', 'template_vyhzlps', this)
    .then(() => {
      alert('Message sent!');
      this.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send: ' + (error.text || 'Please try again.'));
    });
});