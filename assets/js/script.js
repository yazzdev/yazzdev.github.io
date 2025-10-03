document.addEventListener("DOMContentLoaded", () => {
  const portfolioData = [
    {
      id: 1,
      title: "Payroll Management System",
      tags: ["React", "Express", "PostgreSQL"],
      description: "A comprehensive payroll information system designed to streamline salary management and reporting for HR departments. This system automates manual processes, improving efficiency and accuracy.",
      thumbnails: [
        {
          src: "./assets/images/payroll-main.png",
          title: "Dashboard Overview",
          description: "Central hub displaying key payroll statistics, recent activities, and quick access to major modules."
        },
        {
          src: "./assets/images/payroll-1.png",
          title: "Employee Data Management",
          description: "A detailed view for managing employee information, salary details, and employment history."
        },
        {
          src: "./assets/images/payroll-2.png",
          title: "Automated Salary Calculation",
          description: "Interface showing the automated process of calculating salaries based on attendance, deductions, and allowances."
        },
        {
          src: "./assets/images/payroll-3.png",
          title: "Reporting and Analytics",
          description: "Generate and export various financial reports, providing insights into payroll expenses over time."
        }
      ],
      features: [
        "Automated Payroll Calculation",
        "Employee Data Management",
        "Attendance & Leave Tracking",
        "Secure Role-Based Access"
      ],
      techStack: ["React.js", "Bootstrap", "Node.js", "Express.js", "PostgreSQL", "JWT"],
      links: { github: "https://github.com/yazzdev/SI-Penggajian-Jasmine" }
    },
    {
      id: 2,
      title: "E-Flight Ticket Platform (Back-End)",
      tags: ["Node.js", "API", "PostgreSQL"],
      description: "Led the back-end development of a flight search and booking platform. Focused on building a scalable and reliable RESTful API architecture to handle flight data, user authentication, and transaction processing seamlessly.",
      thumbnails: [
        {
          src: "./assets/images/flight-main.png",
          title: "API Documentation (Swagger)",
          description: "Clear and interactive API documentation created with Swagger for easy integration and testing by front-end teams."
        },
        {
          src: "./assets/images/flight-1.png",
          title: "Database Schema Design",
          description: "ERD diagram illustrating the relational database structure designed for scalability and data integrity."
        },
        {
          src: "./assets/images/flight-2.png",
          title: "Authentication Flow",
          description: "Sequence diagram of the secure JWT-based authentication and authorization process."
        },
        {
          src: "./assets/images/flight-3.png",
          title: "Real-time Notification Architecture",
          description: "System design for real-time notifications using WebSockets for booking confirmations and flight updates."
        }
      ],
      features: [
        "Real-time Flight Search API",
        "Secure Booking & Payment Gateway",
        "User Authentication & Profile Management",
        "WebSocket-based Notification System"
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "Swagger", "Socket.io", "JWT"],
      links: { github: "https://github.com/Fitrah007/project_akhir" }
    },
    {
      id: 3,
      title: "Project Example 3",
      tags: ["Vue.js", "Firebase"],
      description: "Description for the third project, showcasing different skills and technologies.",
      thumbnails: [
        {
          src: "https://placehold.co/1200x800/10101a/4f46e5?text=Main+View",
          title: "Main Dashboard",
          description: "This is the main view of the application."
        },
        {
          src: "https://placehold.co/1200x1800/10101a/4f46e5?text=Long+Screenshot",
          title: "Feature Page (Scrollable)",
          description: "A demonstration of a long screenshot that can be scrolled within the viewport."
        }
      ],
      features: ["Feature A", "Feature B", "Feature C"],
      techStack: ["Vue.js", "Firebase", "SCSS"],
      links: { github: "#" }
    }
  ];

  // --- Inisialisasi Library ---
  AOS.init({ duration: 800, once: true });
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: ["Full-Stack Developer","Back-End Developer", "API Engineer", "System Architect"],
      typeSpeed: 70, backSpeed: 35, loop: true
    });
  }

  // --- NEW: Efek Cursor Glow ---
  const cursorGlow = document.querySelector('.cursor-glow');
  document.addEventListener('mousemove', e => {
    // Gunakan translate3d untuk performa yang lebih baik
    cursorGlow.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });


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
    navbar.classList.toggle('scrolled', window.scrollY > 50);

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

  // --- Fungsionalitas Portofolio (Diperbarui) ---
  const portfolioGrid = document.getElementById('portfolio-grid');
  const portfolioModalElement = document.getElementById('portfolioModal');
  const portfolioModal = new bootstrap.Modal(portfolioModalElement);

  // Render kartu portofolio
  portfolioData.forEach(project => {
    const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const cardHTML = `
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
                <div class="card-custom portfolio-card" data-project-id="${project.id}">
                    <img src="${project.thumbnails[0].src}" alt="${project.title}">
                    <div class="portfolio-card-body">
                        <h5 class="portfolio-title">${project.title}</h5>
                        <div class="portfolio-tags">${tagsHTML}</div>
                    </div>
                </div>
            </div>`;
    portfolioGrid.innerHTML += cardHTML;
  });

  // Event listener untuk membuka modal
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      const project = portfolioData.find(p => p.id === projectId);
      populatePortfolioModal(project);
      portfolioModal.show();
    });
  });

  // Fungsi untuk mengisi data modal (Diperbarui)
  function populatePortfolioModal(project) {
    portfolioModalElement.querySelector('#portfolioModalLabel').textContent = project.title;

    // Setel gambar, judul, dan deskripsi default (dari thumbnail pertama)
    updateModalImage(project.thumbnails[0]);

    const thumbnailContainer = portfolioModalElement.querySelector('#thumbnail-container');
    thumbnailContainer.innerHTML = project.thumbnails.map((thumb, index) =>
      `<img src="${thumb.src}" alt="${thumb.title}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">`
    ).join('');

    // Simpan data proyek saat ini di elemen modal untuk referensi
    portfolioModalElement.dataset.currentProject = JSON.stringify(project);

    // Isi detail proyek (overview, features, tech stack)
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

  // Fungsi helper untuk update gambar, judul, dan deskripsi di modal
  function updateModalImage(thumbnailData) {
    portfolioModalElement.querySelector('#main-image').src = thumbnailData.src;
    portfolioModalElement.querySelector('#image-title').textContent = thumbnailData.title;
    portfolioModalElement.querySelector('#image-description').textContent = thumbnailData.description;

    // Reset scroll pada viewport gambar
    const viewport = portfolioModalElement.querySelector('.main-image-viewport');
    viewport.scrollTop = 0;
  }

  // Event listener untuk klik thumbnail di dalam modal (Diperbarui)
  portfolioModalElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumbnail')) {
      const project = JSON.parse(portfolioModalElement.dataset.currentProject);
      const thumbIndex = parseInt(e.target.dataset.index);
      const selectedThumbnailData = project.thumbnails[thumbIndex];

      updateModalImage(selectedThumbnailData);

      portfolioModalElement.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
});