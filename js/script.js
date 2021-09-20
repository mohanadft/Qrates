function showMenu() {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".toggle i").classList.toggle("bx-x");
}

document.querySelectorAll(".item button").forEach(
  (e) =>
    (e.onclick = function () {
      this.parentElement
        .querySelector(".toggle-arrow")
        .classList.toggle("active");

      var growDiv = this.parentElement.querySelector(".description");
      if (growDiv.clientHeight) {
        growDiv.style.height = 0;
      } else {
        var wrapper = this.parentElement.querySelector(".description .wrapper");
        growDiv.style.height = wrapper.clientHeight + "px";
      }

      this.parentElement.classList.toggle("active");
    })
);

let btn = document.querySelector(".scroll-to-top-button");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 0) {
    btn.classList.add("active");
  } else btn.classList.remove("active");

  btn.onclick = function () {
    document.documentElement.scrollTop = 0;
  };
};
