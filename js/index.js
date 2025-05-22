<script>

  const nextBtn = document.getElementById("nextBtn");
  const banner = document.getElementById("introBanner");

  nextBtn.addEventListener("click", ()= {
    banner.style.transform = "translateY(-100%)"; // slide up
    banner.style.position = "absolute"; // this prevents the button from staying fixed
    //banner.style.height = "100px"; // shrink effect
  });
</script>