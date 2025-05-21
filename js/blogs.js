// Load blog content dynamically when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
  const blogLinks = document.querySelectorAll("[data-blog]");
  const blogDisplay = document.getElementById("blogDisplay");

  blogLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const blogFile = this.getAttribute("data-blog");

      // Fetch blog content from ../Blogs/ folder
      fetch(`../Blogs/${blogFile}`)
        .then(response => response.text())
        .then(html => {
          blogDisplay.innerHTML = html;
        })
        .catch(err => {
          blogDisplay.innerHTML = "<p>Oops! Couldn't load the blog post 😢</p>";
          console.error("Error loading blog:", err);
        });
    });
  });
});
