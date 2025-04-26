
    const contactForm = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const program = document.getElementById('program-interest').value;
      const message = document.getElementById('message').value.trim();

      if (name && email && phone && program && message) {
        console.log({ name, email, phone, program, message });
        statusMsg.textContent = "Form submitted successfully!";
        statusMsg.style.color = "green";
        contactForm.reset();
      } else {
        statusMsg.textContent = "Please fill out all fields.";
        statusMsg.style.color = "red";
      }
    });

    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animateElements.forEach(el => observer.observe(el));
 