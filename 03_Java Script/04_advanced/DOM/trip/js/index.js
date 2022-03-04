const aLinks = document.querySelectorAll(".city");
// console.log(aLinks);
// const [index, seoul, tokyo, paris] = aLinks;
// console.log(index);

for (let i = 0; i < aLinks.length; i++) {
    aLinks[i].addEventListener("click", () => {
        document.querySelector("img").src = `img/${aLinks[i].classList[1]}.jpg`;

        aLinks.forEach((elem) => {
            elem.classList.remove("now");
        });

        aLinks[i].classList.add("now");

    })
    // aLinks[i].style.setProperty("cursor", "pointer"); 
    // js로도 줄 수 있지만 추천하지 않음
}