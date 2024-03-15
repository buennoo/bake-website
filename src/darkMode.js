let ifDark = localStorage.getItem("ifDark");
const darkModeButton = document.querySelector("#dark-mode-button");

const darkMode = () => {
    let allElements = document.querySelectorAll('*');
    darkModeButton.innerHTML = "<i class='bi bi-brightness-high-fill'></i>";
    for (el of allElements) {
        el.style.backgroundColor = "#28282B";
        el.style.color = "white";
    }
    localStorage.setItem("ifDark", "true");
}

const lightMode = () => {
    let allElements = document.querySelectorAll('*');
    darkModeButton.innerHTML = "<i class='bi bi-moon-stars-fill'></i>";
    for (el of allElements) {
        el.style.backgroundColor = "";
        el.style.color = "";
    }
    localStorage.setItem("ifDark", null);
}

if (ifDark === "true") {
    darkMode();
}

darkModeButton.addEventListener("click", () => {
    ifDark = localStorage.getItem("ifDark");
    if (ifDark !== "true") {
        darkMode();
    }
    else {
        lightMode();
    }
})

/*
decided not to make an extra class for now and everything
is set dynamically because dark mode porbably won't look
the same on every page in the future
*/
