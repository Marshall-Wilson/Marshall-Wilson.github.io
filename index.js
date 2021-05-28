const buttonList = ["all", "backend", "fullstack", "classwork"];


const showOnly = tag => {
    let all = document.getElementsByClassName("all-proj");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }

    let show = document.getElementsByClassName(tag);
    for (i = 0; i < show.length; i++) {
        show[i].style.display = "";
    }
}


const resetButtons = () => {
    for (let i = 0; i < buttonList.length; i++) {
        let button = document.getElementById(buttonList[i]);
        button.style.color = "gray";
        button.style.border = "1px solid gray";
    }
}


for (let i = 0; i < buttonList.length; i++) {
    let button = document.getElementById(buttonList[i]);
    button.addEventListener("click", function() {
        showOnly(buttonList[i] + "-proj");
        resetButtons();
        button.style.color = "black";
        button.style.border = "1px solid black";
    })
}