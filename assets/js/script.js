document.addEventListener("DOMContentLoaded", () => {
  const portfolioData = [
    {
      id: 1,
      title: "YourFin",
      tags: ["React", "Bootstrap 5", "Express", "PostgreSQL"],
      description: "A smart financial management web app that helps users easily track their income, expenses, and spending habits through a clean and interactive dashboard.",
      thumbnails: [
        {
          src: "/assets/images/yourfin/yourfin-main.png",
          title: "Dashboard Overview",
          description: "A concise introduction to YourFin, showcasing how users can manage their personal finances with insightful visual dashboards."
        },
        {
          src: "/assets/images/yourfin/yourfin-login.png",
          title: "Login Page",
          description: "Secure login interface allowing users to access their personalized financial dashboard using JWT authentication."
        },
        {
          src: "/assets/images/yourfin/yourfin-register.png",
          title: "Register Page",
          description: "User-friendly registration form that enables new users to create an account and start managing their income and expenses."
        },
        {
          src: "/assets/images/yourfin/yourfin-dashboard.png",
          title: "Dashboard Analytics",
          description: "Interactive dashboard displaying income vs expense charts and spending summaries categorized for better financial insights."
        },
        {
          src: "/assets/images/yourfin/yourfin-transaction.png",
          title: "Transaction Management",
          description: "Comprehensive transaction page allowing users to add, edit, filter, and delete income or expense records easily."
        },
        {
          src: "/assets/images/yourfin/yourfin-category.png",
          title: "Category Management",
          description: "Simple interface for managing custom categories, enabling users to group and analyze their financial activities effectively."
        },
      ],
      features: [
        "Secure Authentication with JWT",
        "Expense & Income Tracking",
        "Custom Category Management",
        "Interactive Financial Dashboard"
      ],
      techStack: ["React.js", "Bootstrap 5", "Node.js", "Express.js", "Recharts", "PostgreSQL", "JWT", "Sequelize ORM"],
      links: { github: "https://github.com/yazzdev/yourfin" }
    },
    {
      id: 2,
      title: "Lunar Study Station",
      tags: ["React", "Fastify", "PostgreSQL", "Prisma", "AI"],
      description:
        "A calm, futuristic English learning tracker that helps users monitor their study habits, practice skills, and receive instant AI-powered grammar feedback, all within a serene lunar-themed interface.",
      thumbnails: [
        {
          src: "/assets/images/lunar-study/lunar-station-main.png",
          title: "Dashboard Overview",
          description:
            "The main dashboard showcasing user progress, study statistics, and personalized learning summaries in a minimal lunar-inspired UI.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-landing.png",
          title: "Landing Page",
          description:
            "A calm, responsive landing page introducing Lunar Study Station’s features, designed with a soft monochrome palette and gentle animations.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-login.png",
          title: "Login Page",
          description:
            "Secure and minimal login interface where users can access their personalized study environment.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-register.png",
          title: "Register Page",
          description:
            "Simple and intuitive registration form for new users to create an account and start their learning journey.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-dashboard.png",
          title: "Dashboard",
          description:
            "An overview of user activity and skill-based progress visualization, powered by Recharts and real-time updates from the API.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-logs.png",
          title: "Study Logs Page",
          description:
            "Interactive page for adding and reviewing daily study sessions — includes duration tracking, focus level input, and skill categorization.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-grammar.png",
          title: "Grammar Checker",
          description:
            "AI-powered grammar correction feature implemented using transformers.js, offering instant feedback for English writing practice.",
        },
        {
          src: "/assets/images/lunar-study/lunar-station-setting.png",
          title: "Settings Page",
          description:
            "A simple settings interface where users can view their personal information and securely log out from the application.",
        }
      ],
      features: [
        "AI-Powered Grammar Correction",
        "Daily Study Log Tracking",
        "Progress Dashboard with Charts and Summaries",
        "Secure Authentication using JWT",
      ],
      techStack: [
        "React (Vite)",
        "Fastify",
        "PostgreSQL",
        "Prisma ORM",
        "Zustand",
        "TanStack Query",
        "TailwindCSS",
        "Recharts",
        "transformers.js",
      ],
      links: {
        github: "https://github.com/yazzdev/lunar-study-station",
      },
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
      strings: ["Full-Stack Developer", "Back-End Developer", "API Engineer", "System Architect"],
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
    updateModalImage(project.thumbnails[1]);

    const thumbnailContainer = portfolioModalElement.querySelector('#thumbnail-container');
    thumbnailContainer.innerHTML = project.thumbnails.slice(1).map((thumb, index) =>
      `<img src="${thumb.src}" alt="${thumb.title}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index + 1}">`
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