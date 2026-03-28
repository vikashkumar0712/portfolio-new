const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1XdWyLi-ss9TbPvdAAM6Rcr4gdGdO_O_l";

function updatePageContent() {
  const navLinks = document.querySelector(".nav-links");
  const aboutNavLink = navLinks?.querySelector('a[href="#about"]');
  const skillsNavLink = navLinks?.querySelector('a[href="#skills"]');
  const servicesNavLink = navLinks?.querySelector('a[href="#services"]');
  const experienceNavLink = navLinks?.querySelector('a[href="#experience"]');

  if (navLinks && aboutNavLink && !navLinks.querySelector('a[href="#achievements"]')) {
    const achievementsLink = document.createElement("a");
    achievementsLink.href = "#achievements";
    achievementsLink.textContent = "Achievements";
    aboutNavLink.insertAdjacentElement("afterend", achievementsLink);
  }

  if (skillsNavLink) {
    skillsNavLink.textContent = "Tech Stack";
  }

  if (servicesNavLink) {
    servicesNavLink.textContent = "Case Studies";
  }

  if (experienceNavLink) {
    experienceNavLink.textContent = "Experience";
  }

  const eyebrow = document.querySelector(".eyebrow");
  if (eyebrow) {
    eyebrow.innerHTML = `
      <span class="pulse-dot"></span>
      <span>DevOps Engineer | 3+ years | Gurgaon, India | Open to remote roles</span>
    `;
  }

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent =
      "I help engineering teams build reliable delivery systems on AWS and Kubernetes with strong focus on CI/CD automation, infrastructure as code, observability, and cost-aware operations. My strongest value comes from turning manual, fragile deployment workflows into repeatable platforms that are easier to ship on, easier to monitor, and easier to scale.";
  }

  const heroSection = document.querySelector(".hero");
  if (heroSection && !document.getElementById("impact-highlights")) {
    const impactSection = document.createElement("section");
    impactSection.id = "impact-highlights";
    impactSection.className = "impact-strip reveal visible";
    impactSection.innerHTML = `
      <article class="impact-card">
        <div class="impact-value"><span data-count-to="70" data-suffix="%">0%</span></div>
        <div class="impact-label">faster deployments after CI/CD optimization and test integration</div>
      </article>
      <article class="impact-card">
        <div class="impact-value"><span data-count-to="46" data-suffix="%">0%</span></div>
        <div class="impact-label">lower AWS staging cost through scheduling, audits, and right-sizing</div>
      </article>
      <article class="impact-card">
        <div class="impact-value">EC2 to EKS</div>
        <div class="impact-label">migrated legacy deployment patterns toward Kubernetes with Helm and ArgoCD</div>
      </article>
    `;
    heroSection.insertAdjacentElement("afterend", impactSection);
  }

  const aboutCard = document.querySelector("#about .card");
  const aboutSubtitle = document.querySelector("#about .section-subtitle");
  if (aboutSubtitle) {
    aboutSubtitle.textContent = "A quick recruiter-friendly summary of what I do and where I add value.";
  }
  if (aboutCard) {
    aboutCard.innerHTML = `
      <p class="card-body">
        I am Vikash Kumar, a DevOps Engineer focused on building <strong>predictable, observable, and cost-efficient</strong>
        platforms on AWS. Over the last few years I have worked closely with engineering teams to improve release workflows,
        modernize infrastructure, containerize workloads, strengthen observability, and bring more operational discipline to
        growing systems. I work best in environments where delivery speed matters, but reliability, rollback safety, and
        operational clarity matter just as much.
      </p>
      <ul class="card-list">
        <li>Design CI/CD pipelines that improve release speed while keeping deployments traceable, testable, and safe.</li>
        <li>Use Terraform and infrastructure as code so environments stay repeatable, reviewable, and easier to scale.</li>
        <li>Build observability around metrics, dashboards, and alerting to reduce blind spots and speed up debugging.</li>
        <li>Partner with developers to simplify release workflows instead of turning DevOps into a ticket queue.</li>
        <li>Approach infrastructure with equal attention to reliability, operational simplicity, and cost efficiency.</li>
      </ul>
    `;
  }

  const skillsSection = document.querySelector("#skills");
  const skillsTitle = skillsSection?.querySelector(".section-title");
  const skillsSubtitle = skillsSection?.querySelector(".section-subtitle");
  const skillsWrapper = skillsSection?.querySelector(".skills-wrapper");
  if (skillsTitle) {
    skillsTitle.textContent = "Technical Stack";
  }
  if (skillsSubtitle) {
    skillsSubtitle.textContent = "Core tools grouped the way recruiters and engineers actually scan them.";
  }
  if (skillsWrapper) {
    skillsWrapper.classList.add("skills-wrapper-single");
    skillsWrapper.innerHTML = `
      <div class="card">
        <p class="skills-summary">
          I work across cloud infrastructure, containerization, CI/CD engineering, observability, automation, and platform reliability.
          My strongest hands-on focus is on AWS, Kubernetes, Terraform, Linux-based operations, and the delivery workflows that help
          teams move from manual releases to repeatable, production-ready systems.
        </p>
        <div class="stack-grid">
          <div class="stack-group">
            <h3 class="stack-title">Cloud</h3>
            <div class="pill-cloud">
              <span class="pill"><span class="pill-dot"></span>AWS EC2, S3, IAM, VPC, CloudWatch</span>
              <span class="pill"><span class="pill-dot"></span>Cost optimization and environment hygiene</span>
            </div>
          </div>
          <div class="stack-group">
            <h3 class="stack-title">Containers and Platform</h3>
            <div class="pill-cloud">
              <span class="pill"><span class="pill-dot"></span>Kubernetes and Amazon EKS</span>
              <span class="pill"><span class="pill-dot"></span>Docker, Docker Compose, Helm</span>
              <span class="pill"><span class="pill-dot"></span>ArgoCD and GitOps workflows</span>
            </div>
          </div>
          <div class="stack-group">
            <h3 class="stack-title">CI/CD and Automation</h3>
            <div class="pill-cloud">
              <span class="pill"><span class="pill-dot"></span>Jenkins and GitHub Actions</span>
              <span class="pill"><span class="pill-dot"></span>Terraform and infrastructure as code</span>
              <span class="pill"><span class="pill-dot"></span>Python and Bash automation</span>
            </div>
          </div>
          <div class="stack-group">
            <h3 class="stack-title">Reliability and Operations</h3>
            <div class="pill-cloud">
              <span class="pill"><span class="pill-dot"></span>Prometheus, Grafana, and monitoring strategy</span>
              <span class="pill"><span class="pill-dot"></span>Linux administration and networking basics</span>
              <span class="pill"><span class="pill-dot"></span>Release reliability and security awareness</span>
            </div>
          </div>
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
            <span class="tag accent"><span data-count-to="70" data-suffix="% faster">0% faster</span></span>
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
            <span class="tag accent"><span data-count-to="46" data-suffix="% savings">0% savings</span></span>
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

  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">Case Studies</h2>
        <p class="section-subtitle">Technical work presented as problem, stack, execution, and outcome.</p>
      </div>
      <div class="case-study-grid">
        <article class="card case-study-card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Legacy EC2 to Kubernetes Migration</h3>
              <div class="card-meta">Migration, deployment consistency, and platform modernization</div>
            </div>
            <span class="tag accent">Migration</span>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Problem</div>
            <p class="card-body">Legacy deployment patterns on EC2 made environments harder to standardize, slower to evolve, and more dependent on manual operational steps.</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Stack</div>
            <p class="card-body">AWS, Kubernetes, EKS, Helm, ArgoCD, Terraform</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">What I Changed</div>
            <ul class="card-list">
              <li>Helped move workloads toward Kubernetes-based deployment patterns.</li>
              <li>Used Helm for packaging, Terraform for repeatable infrastructure, and ArgoCD for GitOps-style delivery.</li>
              <li>Improved consistency between staging and production through more predictable deployment workflows.</li>
            </ul>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Result</div>
            <p class="card-body">The platform became easier to manage, easier to replicate across environments, and better aligned with scalable release practices.</p>
          </div>
        </article>
        <article class="card case-study-card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">CI/CD Acceleration and Release Reliability</h3>
              <div class="card-meta">Faster deployments with safer automation</div>
            </div>
            <span class="tag accent">CI/CD</span>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Problem</div>
            <p class="card-body">Slow pipeline execution and inconsistent release steps reduced engineering velocity and made deployments more operationally expensive.</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Stack</div>
            <p class="card-body">Jenkins, GitHub Actions, automated tests, container delivery workflows</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">What I Changed</div>
            <ul class="card-list">
              <li>Optimized CI/CD stages and improved automation around build, test, and deployment flow.</li>
              <li>Integrated better testing into pipelines to reduce manual validation pressure.</li>
              <li>Focused on repeatable release behavior instead of ad hoc operational fixes.</li>
            </ul>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Result</div>
            <p class="card-body">Deployment time dropped by around 70%, giving teams faster feedback cycles and more confidence in shipping changes.</p>
          </div>
        </article>
        <article class="card case-study-card">
          <div class="card-heading">
            <div>
              <h3 class="card-title">Observability and Cost Efficiency Improvements</h3>
              <div class="card-meta">Operational visibility with FinOps discipline</div>
            </div>
            <span class="tag accent">Operations</span>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Problem</div>
            <p class="card-body">Teams needed stronger visibility into service behavior while cloud environments also needed tighter control over unnecessary spend.</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Stack</div>
            <p class="card-body">Prometheus, Grafana, AWS CloudWatch, resource audits, scheduling and right-sizing</p>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">What I Changed</div>
            <ul class="card-list">
              <li>Implemented centralized monitoring with dashboards and better operational signals.</li>
              <li>Reviewed resource usage and removed waste through smarter scheduling and infra tuning.</li>
              <li>Improved the quality of operational awareness so issues could be found and understood faster.</li>
            </ul>
          </div>
          <div class="case-study-block">
            <div class="case-study-label">Result</div>
            <p class="card-body">Monitoring became more actionable and staging infrastructure cost was reduced by roughly 46% without compromising usefulness.</p>
          </div>
        </article>
      </div>
    `;
  }

  const projectCards = document.querySelectorAll("#projects .card");
  const projectsTitle = document.querySelector("#projects .section-title");
  const projectsSubtitle = document.querySelector("#projects .section-subtitle");
  if (projectsTitle) {
    projectsTitle.textContent = "Selected Work";
  }
  if (projectsSubtitle) {
    projectsSubtitle.textContent = "Additional examples of delivery, observability, and platform improvement work.";
  }
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

  const experienceTitle = document.querySelector("#experience .section-title");
  const experienceSubtitle = document.querySelector("#experience .section-subtitle");
  if (experienceTitle) {
    experienceTitle.textContent = "Experience Snapshot";
  }
  if (experienceSubtitle) {
    experienceSubtitle.textContent = "A recruiter-friendly view of roles, ownership, and impact.";
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

function animateCountUp(element) {
  const target = Number(element.dataset.countTo);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";

  if (!Number.isFinite(target)) {
    return;
  }

  const durationMs = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / durationMs, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);

    element.textContent = `${prefix}${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function initCountUps() {
  const countEls = document.querySelectorAll("[data-count-to]");

  if (!("IntersectionObserver" in window)) {
    countEls.forEach((el) => animateCountUp(el));
    return;
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCountUp(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  countEls.forEach((el) => counterObserver.observe(el));
}

initCountUps();

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
