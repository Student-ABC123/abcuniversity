
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
      const program = document.getElementById('program').value;
      const residency = document.getElementById('residency').value;
      const creditHours = parseInt(document.getElementById('credit-hours').value);

      let tuitionFees = 0;
      if (program === 'undergrad' && residency === 'in-state') {
        tuitionFees = creditHours * 200;
      } else if (program === 'undergrad' && residency === 'out-of-state') {
        tuitionFees = creditHours * 400;
      } else if (program === 'grad' && residency === 'in-state') {
        tuitionFees = creditHours * 300;
      } else if (program === 'grad' && residency === 'out-of-state') {
        tuitionFees = creditHours * 500;
      }

      resultDiv.innerText = `Estimated tuition fees: £${tuitionFees}`;
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

