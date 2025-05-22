
  const nextBtn = document.getElementById("nextBtn");  // selecting a button from the DOM
  const banner = document.getElementById("introBanner"); // selecting a div

  //Animation
  nextBtn.addEventListener("click", ()=> { //DOM: listening for interaction
    {}
    banner.style.transform = "translateY(-100%)" ; // slide up, changes the style
    banner.style.position = "absolute"; // this prevents the button from staying fixed
    //banner.style.height = "100px"; // shrink effect
  });