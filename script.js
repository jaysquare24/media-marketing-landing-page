const planButton = document.querySelectorAll(".planButton");
const menuButton = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector(".navigation");



planButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        planButton.forEach(btn => btn.classList.remove(("active")))
        button.classList.add("active");
    })
})


planButton[0].classList.add("active");



menuButton.addEventListener("click", () => {
  const isMenu = menuIcon.classList.toggle("active");

  menuIcon.src = isMenu
    ? "/resource/icons8-close.svg"
    : "/resource/icons8-menu.svg";

    navigation.style.display = isMenu? "block" : "none";
    
});
