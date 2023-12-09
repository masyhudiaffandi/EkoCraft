window.addEventListener("load", function(e) {
    var container = document.querySelector(".store-item-wrapper");
    var middle = container.children[Math.floor((container.children.length - 1) / 2)];
    container.scrollLeft = middle.offsetLeft +
      middle.offsetWidth / 2 - container.offsetWidth / 2;
  });