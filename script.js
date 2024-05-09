var menuIcon = document.getElementById("icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}