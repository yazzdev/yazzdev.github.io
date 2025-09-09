// Navbar solid on scroll
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) $(".navbar").addClass("scrolled");
  else $(".navbar").removeClass("scrolled");
});

// Smooth scroll to anchor (internal links)
$('a.nav-link[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const target = this.getAttribute("href");
  if (target && $(target).length) {
    $('html,body').animate({ scrollTop: $(target).offset().top - 70 }, 700);
  }
});

// Init AOS
AOS.init({ duration: 800, once: true });

// Typed.js
if (document.getElementById("typed")) {
  new Typed("#typed", {
    strings: ["Back-End Developer", "API Engineer", "Web Enthusiast"],
    typeSpeed: 70, backSpeed: 35, loop: true
  });
}


// Contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Regex sederhana untuk validasi email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validasi input
  if (!name || !email || !message || !emailPattern.test(email)) {
    const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
    errorModal.show();
    return;
  }

  // Template mailto lebih rapi
  const subject = encodeURIComponent(`[New message] from ${name}`);
  const body = encodeURIComponent(
    `Knock knock yazDev,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
  );

  // Buka mail client
  window.location.href = `mailto:dyaz.amrullah@gmail.com?subject=${subject}&body=${body}`;

  // Tampilkan modal success
  const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
  contactModal.show();
});
