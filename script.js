
// Dark Mode Toggle
document.getElementById("toggleDark").onclick = function () {
  document.body.classList.toggle("dark");
};

// Scroll to top button
let topBtn = document.getElementById("backToTop");
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Search Filter
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const posts = document.querySelectorAll("#blogList .card");

  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    post.style.display = text.includes(filter) ? "block" : "none";
  });
});
