const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1XdWyLi-ss9TbPvdAAM6Rcr4gdGdO_O_l";

function updatePageContent() {
  const navLinks = document.querySelector(".nav-links");
  const aboutNavLink = navLinks?.querySelector('a[href="#about"]');

  if (navLinks && aboutNavLink && !navLinks.querySelector('a[href="#achievements"]')) {
    const achievementsLink = document.createElement("a");
    achievementsLink.href = "#achievements";
    achievementsLink.textContent = "Achievements";
    aboutNavLink.insertAdjacentElement("afterend", achievementsLink);
  }

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent =
      "I am a DevOps Engineer focused on building cloud infrastructure, delivery pipelines, container platforms, and observability systems that help teams release faster with more confidence. My work spans AWS, Kubernetes, Terraform, CI/CD automation, monitoring, and reliability practices designed to keep systems stable, scalable, and easier to operate as products grow.";
  }

  const aboutCard = document.querySelector("#about .card");
  if (aboutCard) {
    aboutCard.innerHTML = `
      <p class="card-body">
        I am Vikash Kumar, a DevOps Engineer focused on building <strong>predictable, observable, and cost-efficient</strong>
        platforms on AWS. Over the last few years I have worked closely with engineering teams to improve release workflows,
        modernize infrastructure, containerize workloads, strengthen observability, and bring more operational discipline to
        growing systems. I enjoy solving problems that sit between development and operations, especially where automation,
        infrastructure design, and production reliability all need to come together.
      </p>
      <ul class="card-list">
        <li>Design CI/CD pipelines that improve release speed while keeping deployments traceable and safe.</li>
        <li>Use Terraform and infrastructure as code so environments stay repeatable, reviewable, and easier to scale.</li>
        <li>Build around observability early with metrics, dashboards, and alerting that support faster troubleshooting.</li>
        <li>Work with developers to simplify delivery workflows instead of turning DevOps into a handoff process.</li>
        <li>Approach infrastructure with equal attention to reliability, operational simplicity, and cost efficiency.</li>
      </ul>
    `;
  }

  const skillsSection = document.querySelector("#skills");
  const skillsWrapper = skillsSection?.querySelector(".skills-wrapper");
  if (skillsWrapper) {
    skillsWrapper.classList.add("skills-wrapper-single");
    skillsWrapper.innerHTML = `
      <div class="card">
        <p class="skills-summary">
          I work across cloud infrastructure, containerization, CI/CD engineering, observability, automation, and platform reliability.
          My strongest hands-on focus is on AWS, Kubernetes, Terraform, Linux-based operations, and the delivery workflows that help
          teams move from manual releases to repeatable, production-ready systems.
        </p>
        <div class="pill-cloud">
          <span class="pill"><span class="pill-dot"></span>AWS (EC2, S3, IAM, VPC, CloudWatch)</span>
          <span class="pill"><span class="pill-dot"></span>Kubernetes and Amazon EKS</span>
          <span class="pill"><span class="pill-dot"></span>Docker and Docker Compose</span>
          <span class="pill"><span class="pill-dot"></span>Terraform and infrastructure as code</span>
          <span class="pill"><span class="pill-dot"></span>Jenkins, GitHub Actions, and CI/CD</span>
          <span class="pill"><span class="pill-dot"></span>Helm, ArgoCD, and GitOps workflows</span>
          <span class="pill"><span class="pill-dot"></span>Prometheus, Grafana, and monitoring strategy</span>
          <span class="pill"><span class="pill-dot"></span>Linux administration and networking basics</span>
          <span class="pill"><span class="pill-dot"></span>Python and Bash automation</span>
          <span class="pill"><span class="pill-dot"></span>Reliability, security awareness, and cost optimization</span>
        </div>
      </div>
    `;
  }

  const experienceCards = document.querySelectorAll("#experience .card");
  if (experienceCards[0]) {
    const body = experienceCards[0].querySelector(".card-body");
    const list = experienceCards[0].querySelector(".card-list");
    if (body) {
      body.textContent =
        "Leading core DevOps responsibilities across CI/CD, cloud infrastructure, Kubernetes adoption, and observability for multiple products, with strong emphasis on release reliability, delivery speed, and infrastructure efficiency.";
    }
    if (list) {
      list.innerHTML = `
        <li>Migrated legacy workloads from EC2 to Kubernetes using Helm, ArgoCD, and Terraform.</li>
        <li>Optimized Jenkins pipelines and integrated automated tests, reducing deployment time by around 70%.</li>
        <li>Reduced AWS staging costs by roughly 46% through instance scheduling, usage audits, and right-sizing.</li>
        <li>Implemented Prometheus and Grafana for centralized monitoring and faster incident response.</li>
        <li>Worked across infrastructure and application delivery concerns to improve operational consistency between environments.</li>
      `;
    }
  }

  if (experienceCards[1]) {
    const body = experienceCards[1].querySelector(".card-body");
    const list = experienceCards[1].querySelector(".card-list");
    if (body) {
      body.textContent =
        "Built and maintained automation pipelines and cloud environments for containerized applications, helping teams standardize deployments and reduce manual operational effort.";
    }
    if (list) {
      list.innerHTML = `
        <li>Created CI/CD workflows with GitHub Actions for build, test, and deployment stages.</li>
        <li>Developed Shell and Python automation scripts for backups, housekeeping, and log management.</li>
        <li>Deployed and managed containerized applications on AWS and Kubernetes.</li>
        <li>Supported development teams with infrastructure troubleshooting and smoother release workflows.</li>
      `;
    }
  }

  const achievementsId = "achievements";
  const aboutSection = document.getElementById("about");
  if (aboutSection && !document.getElementById(achievementsId)) {
    const achievementsSection = document.createElement("section");
    achievementsSection.id = achievementsId;
    achievementsSection.className = "reveal visible";
    achievementsSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Achievements</h2>
        <p class="section-subtitle">Outcomes that reflect how I approach platform and DevOps work.</p>
      </div>
      <div class="card-grid">
        <article class="card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Modernized Deployment Architecture</h3>
              <div class="card-meta">Platform migration and delivery maturity</div>
            </div>
            <span class="tag accent">Infrastructure</span>
          </div>
          <p class="card-body">
            Helped move legacy deployment patterns toward a more scalable Kubernetes-based model using Helm, Terraform, and ArgoCD,
            improving consistency across environments and creating a stronger foundation for repeatable releases.
          </p>
        </article>
        <article class="card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Improved Delivery Speed</h3>
              <div class="card-meta">CI/CD optimization and automation</div>
            </div>
            <span class="tag accent">70% faster</span>
          </div>
          <p class="card-body">
            Reduced deployment time by around 70% through pipeline optimization, better automation, and cleaner release flow design,
            helping engineering teams ship changes faster with fewer manual steps and better confidence in the process.
          </p>
        </article>
        <article class="card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Cloud Cost Optimization</h3>
              <div class="card-meta">FinOps mindset in day-to-day operations</div>
            </div>
            <span class="tag accent">46% savings</span>
          </div>
          <p class="card-body">
            Reduced AWS staging infrastructure cost by roughly 46% through usage review, smarter instance scheduling, and resource
            right-sizing, showing that reliability and cost awareness can be improved together instead of treated as separate priorities.
          </p>
        </article>
        <article class="card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Centralized Observability Rollout</h3>
              <div class="card-meta">Monitoring, visibility, and incident response</div>
            </div>
            <span class="tag accent">SRE mindset</span>
          </div>
          <p class="card-body">
            Rolled out Prometheus and Grafana based monitoring to provide centralized visibility into service health, performance,
            and operational signals, helping teams detect issues earlier and reduce time spent debugging production behavior.
          </p>
        </article>
      </div>
    `;
    aboutSection.insertAdjacentElement("afterend", achievementsSection);
  }

  const projectCards = document.querySelectorAll("#projects .card");
  if (projectCards[0]) {
    const body = projectCards[0].querySelector(".card-body");
    const list = projectCards[0].querySelector(".card-list");
    if (body) {
      body.textContent =
        "Led DevOps initiatives to improve scalability, reliability, deployment consistency, and operational efficiency for a major grants management product used in a production environment.";
    }
    if (list) {
      list.innerHTML = `
        <li>Moved from EC2-based deployments to Kubernetes with Helm and ArgoCD.</li>
        <li>Redesigned staging infrastructure, cutting costs while keeping performance intact.</li>
        <li>Built Python scripts to generate daily test reports and speed up debugging cycles.</li>
        <li>Strengthened delivery workflows by making infrastructure and deployment steps more repeatable.</li>
      `;
    }
  }

  if (projectCards[1]) {
    const body = projectCards[1].querySelector(".card-body");
    const list = projectCards[1].querySelector(".card-list");
    if (body) {
      body.textContent =
        "Introduced centralized monitoring and alerting patterns to reduce operational blind spots, improve mean time to resolution, and give teams a clearer picture of service behavior across environments.";
    }
    if (list) {
      list.innerHTML = `
        <li>Rolled out Prometheus and Grafana template dashboards for key services.</li>
        <li>Defined SLIs around latency, error rate, and resource saturation.</li>
        <li>Helped teams debug issues faster by correlating logs, metrics, and deployments.</li>
        <li>Improved the quality of operational visibility so alerts could better support action instead of noise.</li>
      `;
    }
  }

  const certCards = document.querySelectorAll("#certs .card");
  if (certCards[0]) {
    const body = certCards[0].querySelector(".card-body");
    if (body) {
      body.textContent =
        "Validated my ability to design and operate scalable, secure, resilient, and cost-optimized solutions on AWS, reinforcing the architectural side of my hands-on DevOps and platform work.";
    }
  }
  if (certCards[1]) {
    const body = certCards[1].querySelector(".card-body");
    if (body) {
      body.textContent =
        "Completed multiple learning programs across containers, CI/CD, and cloud fundamentals, strengthening the practical knowledge I apply in day-to-day infrastructure and delivery work.";
    }
  }
}

updatePageContent();

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });
}

document.querySelectorAll("[data-resume-download]").forEach((link) => {
  link.href = RESUME_DOWNLOAD_URL;
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
});

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

document.querySelectorAll(".service-card").forEach((card) => {
  const btn = card.querySelector(".service-readmore");
  const more = card.querySelector(".service-more");

  if (!btn || !more) {
    return;
  }

  btn.addEventListener("click", () => {
    const isVisible = more.classList.contains("visible");

    more.classList.toggle("visible");
    btn.textContent = isVisible ? "Read more ▼" : "Show less ▲";
  });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const reason = document.getElementById("reason").value;

    if (!name || !reason) {
      window.alert("Please fill in all fields before sending.");
      return;
    }

    let subject = "";
    let bodyIntro = "";

    switch (reason) {
      case "connect":
        subject = "Let's connect - from your DevOps portfolio";
        bodyIntro =
          "Hey Vikash,\n\nI found your portfolio and would love to connect, share ideas, and grow together around DevOps / Cloud.";
        break;
      case "fulltime":
        subject = "Full-time DevOps opportunity - from your portfolio";
        bodyIntro =
          "Dear Vikash,\n\nI'm reaching out regarding a potential full-time DevOps / Cloud role and would like to explore if you'd be a good fit for our team.";
        break;
      case "projects":
        subject = "DevOps / Cloud project collaboration inquiry";
        bodyIntro =
          "Hi Vikash,\n\nI'd like to discuss a DevOps / Cloud project where we could collaborate on automation, infrastructure, or reliability.";
        break;
      case "guidance":
        subject = "Request for guidance / help in DevOps";
        bodyIntro =
          "Hi Vikash,\n\nI'm looking for some guidance or help related to DevOps / Cloud and wanted to reach out to you after seeing your work.";
        break;
      default:
        subject = "Message from your portfolio";
        bodyIntro =
          "Hi Vikash,\n\nI wanted to get in touch with you via your portfolio website.";
    }

    const lines = [
      bodyIntro,
      "",
      `My name is ${name}.`,
      "",
      "Looking forward to hearing from you.",
      "",
      "Best,",
      name,
    ];

    const mailto = `mailto:vikashkumar07844@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
  });
}
