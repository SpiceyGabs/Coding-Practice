 document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.getElementById('nextBtn');
    const introBanner = document.getElementById('introBanner');

    nextBtn.addEventListener('click', function () {
      introBanner.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  //const nextBtn = document.getElementById("nextBtn");  // selecting a button from the DOM
//const banner = document.getElementById("introBanner"); // selecting a div

  //Animation
  //nextBtn.addEventListener("click", ()=> { //DOM: listening for interaction
   // {}
    //banner.style.transform = "translateY(-100%)" ; // slide up, changes the style
    //banner.style.position = "absolute"; // this prevents the button from staying fixed
    //banner.style.height = "100px"; // shrink effect
 // });
// document.getElementById("mainHeader").scrollIntoView({ behavior: "smooth" });
// document.addEventListener("DOMContentLoaded", function () {
//   const nextBtn = document.getElementById("nextBtn");
//   const banner = document.getElementById("introBanner");

//   nextBtn.addEventListener("click", () => {
//     banner.classList.add("hide"); // triggers the CSS animation
//     document.body.style.overflow = "auto"; // re-enable scroll
//   });
// });