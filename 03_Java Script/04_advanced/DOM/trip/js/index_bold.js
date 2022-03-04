const index = document.getElementById("index");
const seoul = document.getElementById("seoul");
const tokyo = document.getElementById("tokyo");
const paris = document.getElementById("paris");

index.addEventListener("click", () => {
    // index.setAttribute("style", "font-weight:bolder");
    index.style.setProperty("font-weight", "bolder");
    seoul.style.setProperty("font-weight", "normal");
    tokyo.style.setProperty("font-weight", "normal");
    paris.style.setProperty("font-weight", "normal");
    document.querySelector("img").src = "img/index.jpg";
});

seoul.addEventListener("click", () => {
    seoul.style.setProperty("font-weight", "bolder");
    index.style.setProperty("font-weight", "normal");
    tokyo.style.setProperty("font-weight", "normal");
    paris.style.setProperty("font-weight", "normal");
    document.querySelector("img").src = "img/seoul.jpg";
});

tokyo.addEventListener("click", () => {

});

paris.addEventListener("click", () => {

});

function clicked(city) {
    document.getElementsByClassName("curr_sel").classList.toggle("curr_sel");
    document.getElementsById(city).classList.toggle("curr_sel");
    
}
