document.addEventListener("DOMContentLoaded", () => {
  // --- DATA PORTFOLIO ---
  const portfolioData = [
    {
      id: 1,
      title: "Payroll Management System",
      tags: ["React", "Express", "PostgreSQL"],
      mainImage: "./assets/images/payroll-main.png",
      thumbnails: ["./assets/images/payroll-1.png", "./assets/images/payroll-2.png", "./assets/images/payroll-3.png"],
      description: "A comprehensive payroll information system designed to streamline salary management and reporting for HR departments. This system automates manual processes, improving efficiency and accuracy.",
      features: [
        "Automated Payroll Calculation",
        "Employee Data Management",
        "Attendance & Leave Tracking",
        "Secure Role-Based Access"
      ],
      techStack: ["React.js", "Bootstrap", "Node.js", "Express.js", "PostgreSQL", "JWT"],
      links: {
        github: "https://github.com/yazzdev/SI-Penggajian-Jasmine"
      }
    },
    {
      id: 2,
      title: "E-Flight Ticket Platform",
      tags: ["Node.js", "API", "PostgreSQL"],
      mainImage: "./assets/images/flight-main.png",
      thumbnails: ["./assets/images/flight-1.png", "./assets/images/flight-2.png", "./assets/images/flight-3.png"],
      description: "Led the back-end development of a flight search and booking platform. Focused on building a scalable and reliable RESTful API architecture to handle flight data, user authentication, and transaction processing seamlessly.",
      features: [
        "Real-time Flight Search API",
        "Secure Booking & Payment Gateway",
        "User Authentication & Profile Management",
        "Notification System"
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Swagger", "Socket.io"],
      links: {
        github: "https://github.com/Fitrah007/project_akhir"
      }
    },
    {
      id: 3 ,
      title: "E-Flight Ticket Platform",
      tags: ["Node.js", "API", "PostgreSQL"],
      mainImage: "./assets/images/flight-main.png",
      thumbnails: ["./assets/images/flight-1.png", "./assets/images/flight-2.png", "./assets/images/flight-3.png"],
      description: "Led the back-end development of a flight search and booking platform. Focused on building a scalable and reliable RESTful API architecture to handle flight data, user authentication, and transaction processing seamlessly.",
      features: [
        "Real-time Flight Search API",
        "Secure Booking & Payment Gateway",
        "User Authentication & Profile Management",
        "Notification System"
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Swagger", "Socket.io"],
      links: {
        github: "https://github.com/Fitrah007/project_akhir"
      }
    }
  ];

  // --- Inisialisasi Library ---
  AOS.init({ duration: 800, once: true });
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: ["Back-End Developer", "API Engineer", "System Architect"],
      typeSpeed: 70, backSpeed: 35, loop: true
    });
  }

  // --- Efek Hover pada Kartu ---
  document.querySelectorAll('.card-custom').forEach(card => {
    card.onmousemove = e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }
  });

  // --- Navbar Scroll & ScrollSpy ---
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Efek scroll navbar
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // ScrollSpy
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });

  // --- Fungsionalitas Portofolio ---
  const portfolioGrid = document.getElementById('portfolio-grid');
  const portfolioModalElement = document.getElementById('portfolioModal');
  const portfolioModal = new bootstrap.Modal(portfolioModalElement);

  // 1. Render kartu portofolio dari data
  portfolioData.forEach(project => {
    const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const cardHTML = `
            <div class="col-md-6" data-aos="fade-up">
                <div class="card-custom portfolio-card" data-project-id="${project.id}">
                    <img src="${project.mainImage}" alt="${project.title}">
                    <div class="portfolio-card-body">
                        <h5 class="portfolio-title">${project.title}</h5>
                        <div class="portfolio-tags">${tagsHTML}</div>
                    </div>
                </div>
            </div>`;
    portfolioGrid.innerHTML += cardHTML;
  });

  // 2. Event listener untuk membuka modal
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      const project = portfolioData.find(p => p.id === projectId);
      populatePortfolioModal(project);
      portfolioModal.show();
    });
  });

  // 3. Fungsi untuk mengisi data modal
  function populatePortfolioModal(project) {
    // Set Judul
    portfolioModalElement.querySelector('#portfolioModalLabel').textContent = project.title;

    // Set Gambar Utama & Thumbnails
    portfolioModalElement.querySelector('#main-image').src = project.mainImage;
    const thumbnailContainer = portfolioModalElement.querySelector('#thumbnail-container');
    thumbnailContainer.innerHTML = project.thumbnails.map((thumb, index) =>
      `<img src="${thumb}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" data-full-image="${thumb}">`
    ).join('');

    // Set Detail Proyek
    const techStackHTML = project.techStack.map(tech => `<span>${tech}</span>`).join('');
    const featuresHTML = project.features.map(feature =>
      `<li class="list-group-item"><i class="fas fa-check-circle"></i>${feature}</li>`
    ).join('');
    const linksHTML = project.links.github ? `<a href="${project.links.github}" class="btn btn-outline-light btn-sm" target="_blank"><i class="fab fa-github me-2"></i>View on GitHub</a>` : '';

    const detailsHTML = `
            <h3>Project Overview</h3>
            <p>${project.description}</p>
            <h5 class="mt-4">Key Features</h5>
            <ul class="list-group list-group-flush mb-4">${featuresHTML}</ul>
            <h5 class="mt-4">Technology Stack</h5>
            <div class="tech-stack mb-4">${techStackHTML}</div>
            ${linksHTML}
        `;
    portfolioModalElement.querySelector('#portfolio-details').innerHTML = detailsHTML;
  }

  // 4. Event listener untuk klik thumbnail di dalam modal
  portfolioModalElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumbnail')) {
      const mainImage = portfolioModalElement.querySelector('#main-image');
      mainImage.src = e.target.dataset.fullImage;

      // Update status 'active' pada thumbnail
      portfolioModalElement.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});