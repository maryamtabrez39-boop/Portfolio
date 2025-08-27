document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Cyber Security Student",
    "Ethical Hacker",
    "Network Defender",
    "Digital Forensics Learner"
  ];

  let index = 0;
  let charIndex = 0;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let isDeleting = false;

  const typingElement = document.getElementById("typing");

  function typeEffect() {
    const currentRole = roles[index];

    if (!isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  if (typingElement) {
    typeEffect();
  }

  const faders = document.querySelectorAll(".fade-in");
  window.addEventListener("scroll", () => {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop refresh

      alert("✅ Your message has been sent successfully!");
      form.reset();
    });
  } else {
    console.error(" contactForm not found in HTML");
  }
});
