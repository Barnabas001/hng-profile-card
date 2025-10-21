document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
const form = document.getElementById("contactForm");
      const success = document.getElementById("success");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        success.textContent = "";

        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const subject = form.querySelector("#subject");
        const message = form.querySelector("#message");

        const errors = {
          name: name.nextElementSibling,
          email: email.nextElementSibling,
          subject: subject.nextElementSibling,
          message: message.nextElementSibling,
        };

        Object.values(errors).forEach((err) => (err.textContent = ""));

        if (!name.value.trim()) {
          errors.name.textContent = "Full name is required.";
          valid = false;
        }
        if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
          errors.email.textContent = "Please enter a valid email.";
          valid = false;
        }
        if (!subject.value.trim()) {
          errors.subject.textContent = "Subject is required.";
          valid = false;
        }
        if (message.value.trim().length < 10) {
          errors.message.textContent = "Message must be at least 10 characters.";
          valid = false;
        }

        if (valid) {
          success.textContent = "Thank you! Your message was sent successfully.";
          form.reset();
        }
      });

const current = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });



