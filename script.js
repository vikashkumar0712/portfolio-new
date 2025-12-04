const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

    // Minimal scroll-reveal animation
    const revealEls = document.querySelectorAll(".reveal");
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

    // Services "Read more" toggles
    document.querySelectorAll(".service-card").forEach((card) => {
      const btn = card.querySelector(".service-readmore");
      const more = card.querySelector(".service-more");
      btn.addEventListener("click", () => {
        const isVisible = more.classList.contains("visible");
        more.classList.toggle("visible");
        btn.textContent = isVisible ? "Read more ▾" : "Show less ▴";
      });
    });

    // Contact form -> mailto handler with tone per reason, no name/email lines
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const reason = document.getElementById("reason").value;

      if (!name || !reason) {
        alert("Please fill in all fields before sending.");
        return;
      }

      let subject = "";
      let bodyIntro = "";

      switch (reason) {
        case "connect":
          subject = "Let’s connect · from your DevOps portfolio";
          bodyIntro =
            `Hey Vikash,\n\nI found your portfolio and would love to connect, share ideas, and grow together around DevOps / Cloud.`;
          break;
        case "fulltime":
          subject = "Full-time DevOps opportunity · from your portfolio";
          bodyIntro =
            "Dear Vikash,\n\nI’m reaching out regarding a potential full-time DevOps / Cloud role and would like to explore if you’d be a good fit for our team.";
          break;
        case "projects":
          subject = "DevOps / Cloud project collaboration inquiry";
          bodyIntro =
            "Hi Vikash,\n\nI’d like to discuss a DevOps / Cloud project where we could collaborate on automation, infrastructure, or reliability.";
          break;
        case "guidance":
          subject = "Request for guidance / help in DevOps";
          bodyIntro =
            "Hi Vikash,\n\nI’m looking for some guidance or help related to DevOps / Cloud and wanted to reach out to you after seeing your work.";
          break;
        default:
          subject = "Message from your portfolio";
          bodyIntro = "Hi Vikash,\n\nI wanted to get in touch with you via your portfolio website.";
      }

      const lines = [
        bodyIntro,
        "",
        `My name is ${name}.`,
        "",
        "Looking forward to hearing from you.",
        "",
        "Best,",
        name
      ];

      const mailto = `mailto:vikashkumar07844@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(lines.join("\n"))}`;

      window.location.href = mailto;
    });