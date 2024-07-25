document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for your message, " + name + "!");

  // Reset the form
  this.reset();
});

document.querySelectorAll(".social-logo").forEach((logo) => {
  logo.addEventListener("mouseover", function () {
    const tooltipText = this.getAttribute("data-tooltip");
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = tooltipText;
    this.parentElement.appendChild(tooltip);

    setTimeout(() => {
      tooltip.style.opacity = 1;
    }, 100);
  });

  logo.addEventListener("mouseout", function () {
    const tooltip = this.parentElement.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.opacity = 0;
      setTimeout(() => {
        tooltip.remove();
      }, 300);
    }
  });
});
