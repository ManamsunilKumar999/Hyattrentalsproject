
window.addEventListener("scroll", function() {
    const header = document.querySelector(".home-header");

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
    const videos = document.querySelectorAll(".hero-video");
    let currentVideo = 0;

    // Play first video
    videos[currentVideo].play();

    setInterval(() => {
        videos[currentVideo].classList.remove("active");
        videos[currentVideo].pause();
        videos[currentVideo].currentTime = 0;

        currentVideo = (currentVideo + 1) % videos.length;

        videos[currentVideo].classList.add("active");
        videos[currentVideo].play();

    }, 6000); // change every 6 seconds
    function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
    }

const sparkleBtn = document.getElementById("sparkleBtn");

sparkleBtn.addEventListener("click", function(e) {
    e.preventDefault();

    this.classList.add("spark-active");

    setTimeout(() => {
        this.classList.remove("spark-active");
    }, 600);
});


