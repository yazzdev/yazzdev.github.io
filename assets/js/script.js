$(function () {
  // Navbar solid on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Smooth scroll to anchor (internal links)
  $('a.nav-link[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    if (target && $(target).length) {
      $('html,body').animate({
        scrollTop: $(target).offset().top - 70
      }, 700);
      // Close navbar on mobile after click
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Init AOS
  AOS.init({
    duration: 800,
    once: true
  });

  // Typed.js
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: ["Back-End Developer", "API Engineer", "Cosmic Coder"],
      typeSpeed: 70,
      backSpeed: 35,
      loop: true
    });
  }

  // **NEW: Portfolio Modal Handler**
  const portfolioModal = new bootstrap.Modal(document.getElementById('portfolioModal'));
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      const imageSrc = this.getAttribute('data-img-src');
      const title = this.getAttribute('data-title');

      document.getElementById('portfolioModalImage').src = imageSrc;
      document.getElementById('portfolioModalLabel').textContent = title;

      portfolioModal.show();
    });
  });

  // Contact Form
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !emailPattern.test(email)) {
      const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
      errorModal.show();
      return;
    }
    const subject = encodeURIComponent(`[New message] from ${name}`);
    const body = encodeURIComponent(
      `Knock knock yazDev,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:dyaz.amrullah@gmail.com?subject=${subject}&body=${body}`;
    const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
    contactModal.show();
  });
});