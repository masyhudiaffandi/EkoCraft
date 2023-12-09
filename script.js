if (outerWidth > 768) {
    alert('This Web Is Not Available On Desktop');
}

const navEl = document.querySelector(".nav");

      window.addEventListener("scroll", () => {
        if (window.scrollY >= 56) {
          navEl.classList.add("nav-scrolled");
          console.log("scrolled");
        } else if (window.scrollY < 56) {
          navEl.classList.remove("nav-scrolled");
        }
      });