const backdropOpenBtn = document.querySelector(".hero-button");
const backdrop = document.querySelector(".backdrop");
const backdropCloseBtn = document.querySelector(".btn-closing")

backdropOpenBtn.addEventListener("click", ()=>backdrop.classList.add("is-open"))
backdropCloseBtn.addEventListener("click", ()=>backdrop.classList.remove("is-open"))