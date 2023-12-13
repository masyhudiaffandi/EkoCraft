if (outerWidth > 768) {
    alert('This Web Is Not Available On Desktop');
}

const navEl = document.querySelector(".nav");

      window.addEventListener("scroll", () => {
        if (window.scrollY >= 56) {
          navEl.classList.add("nav-scrolled");
        } else if (window.scrollY < 56) {
          navEl.classList.remove("nav-scrolled");
        }
      });

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}