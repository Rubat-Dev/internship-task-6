 // Read More Toggle
//  document.querySelectorAll(".read-more").forEach(btn=>{
//   btn.addEventListener("click", ()=>{
//     const extra = btn.previousElementSibling;
//     if(extra.style.display === "block"){
//       extra.style.display = "none";
//       btn.textContent = "Read More";
//     }else{
//       extra.style.display = "block";
//       btn.textContent = "Read Less";
//     }
//   });
//  });




document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const extra = btn.previousElementSibling;

    // toggle class on extra content
    extra.classList.toggle("open");

    // button text change
    if (extra.classList.contains("open")) {
      btn.textContent = "Read Less";
    } else {
      btn.textContent = "Read More";
    }
  });
});



  // Search Functionality
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup",() =>{
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".post").forEach(post=>{
      const title = post.querySelector(".title").textContent.toLowerCase();
      post.style.display = title.includes(filter)? "block" : "none";
    });
  });

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("toggleMode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
      toggleBtn.textContent = "☀️ Light Mode";
    } else{
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });



// navbar
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
