// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

// Open lightbox when image is clicked
document.querySelectorAll(".portfolio-image").forEach(image => {
    image.addEventListener("click", (e) => {
        lightbox.style.display = "flex";
        lightboxImg.src = e.target.src;
    });
});

// Close lightbox when close button is clicked
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Smooth Scrolling to Portfolio Section
document.querySelector('a[href="#portfolio"]').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('a[href="#products"]').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {  // You can adjust the scroll position threshold
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});



//Responsive Navbar
function navFunction() {
    var x = document.getElementById("responsive");
    console.log(x)
    if (x.className === "responsive-menu") {
      x.className += " display-block";
    } else {
      x.className = "responsive-menu";
    }
}

