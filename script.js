
// 1. Hiệu ứng xuất hiện khi cuộn trang
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

// Áp dụng hiệu ứng cho các phần
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// 2. Hiệu ứng menu khi bấm vào
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      item.style.color = "#c4c4d4";
    });

    link.style.color = "#e9a8ff";
  });
});

// 3. Hiệu ứng con trỏ chuột
document.addEventListener("mousemove", (event) => {
  document.body.style.setProperty(
    "--mouse-x",
    event.clientX + "px"
  );

  document.body.style.setProperty(
    "--mouse-y",
    event.clientY + "px"
  );
});

// 4. Hiệu ứng năm tự động
const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML = footer.innerHTML.replace(
    "2026",
    new Date().getFullYear()
  );
}

console.log("Welcome to my personal website!");
