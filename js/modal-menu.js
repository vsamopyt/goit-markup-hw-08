const modalCloseBtn = document.querySelector(".toast-window");
const modalOpenBtn = document.querySelector(".header-memu-btn")
const modalMenu = document.querySelector(".toast-window")
modalOpenBtn.addEventListener('click', ()=>modalMenu.classList.add("is-open"));
modalCloseBtn .addEventListener('click', ()=>modalMenu.classList.remove("is-open"))