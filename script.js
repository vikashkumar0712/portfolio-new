const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1XdWyLi-ss9TbPvdAAM6Rcr4gdGdO_O_l";

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
      case "freelance":
        subject = "Freelance DevOps consulting inquiry - from your portfolio";
        bodyIntro =
          "Hi Vikash,\n\nI saw your freelance DevOps consulting offers on your portfolio and would like to discuss a project (AWS cost audit, CI/CD setup, or Kubernetes/observability).";
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

/* ---- Theme toggle: light/dark with system preference default ---- */
(function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const html = document.documentElement;
  if (!toggle) return;

  function setIcon(theme) {
    // Moon in light mode (click to go dark), sun in dark mode (click to go light)
    if (icon) icon.innerHTML = theme === "dark" ? "&#9728;" : "&#127769;";
  }

  // Sync icon with current theme (set by head script)
  setIcon(html.getAttribute("data-theme") || "light");

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon(next);
  });

  // Follow system changes only when user hasn't picked manually
  try {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        const t = e.matches ? "dark" : "light";
        html.setAttribute("data-theme", t);
        setIcon(t);
      }
    });
  } catch (e) {}
})();
