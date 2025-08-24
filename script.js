// Read More Toggle
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const extra = btn.previousElementSibling;

    // toggle class on extra content
    extra.classList.toggle("open");

    // button text change + accessibility
    if (extra.classList.contains("open")) {
      btn.textContent = "Read Less";
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.textContent = "Read More";
      btn.setAttribute("aria-expanded", "false");
    }
  });
});


// Search Functionality
const searchInput = document.getElementById("search");
const posts = document.querySelectorAll(".post");
const container = document.querySelector(".main-content");

// "No Results" message
const noResultsMsg = document.createElement("p");
noResultsMsg.textContent = "No posts found!";
noResultsMsg.style.textAlign = "center";
noResultsMsg.style.marginTop = "1rem";
noResultsMsg.style.color = "red";
noResultsMsg.style.display = "none";
container.appendChild(noResultsMsg);

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  let visible = 0;

  posts.forEach(post => {
    const title = post.querySelector(".title").textContent.toLowerCase();
    if (title.includes(filter)) {
      post.style.display = "block";
      visible++;
    } else {
      post.style.display = "none";
    }
  });

  // Show message if nothing matches
  noResultsMsg.style.display = visible === 0 ? "block" : "none";
});


// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


// Navbar Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");

  // icon change ☰ ↔ ×
  if (menu.classList.contains("open")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
