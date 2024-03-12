var allElements = document.querySelectorAll('*');
var ifDark = false;

function darkMode() {
    if(!ifDark) {
        for (el of allElements) {
            el.style.backgroundColor = "#28282B";
            el.style.color = "white";
        }
        ifDark = true;
    }
    else {
        for (el of allElements) {
            el.style.backgroundColor = "";
            el.style.color = "";
        }
        ifDark = false;
    }
}


