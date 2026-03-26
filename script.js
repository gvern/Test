const roles = [
  "Data Scientist",
  "AI/ML Engineer",
  "GenAI Builder",
  "NL2SQL Specialist"
];

const typedRole = document.getElementById("typed-role");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typedRole) {
    return;
  }

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typedRole.textContent = currentRole.slice(0, charIndex + 1);
    charIndex += 1;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1200);
      return;
    }
  } else {
    typedRole.textContent = currentRole.slice(0, charIndex - 1);
    charIndex -= 1;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 45 : 90);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${index * 110}ms`;
  observer.observe(element);
});

function animateSkillBars() {
  const bars = document.querySelectorAll(".bar span");
  bars.forEach((bar) => {
    const level = bar.getAttribute("data-level") || "0";
    bar.style.width = `${level}%`;
  });
}

window.addEventListener("load", () => {
  typeRole();
  setTimeout(animateSkillBars, 300);
});
