console.log("Hello World 2024");
alert("Selamat Datang di website kami");
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      alert(`Selamar datang di ${this.textContent} !`);
    });
  });
});
