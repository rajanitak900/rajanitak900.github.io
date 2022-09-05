const TopBar = document.getElementById("topbar");
const Menu = document.getElementById("menu");
const MenuShowIcon = document.getElementById("menu-show-icon");
let topbar_show = true;
if (screen.width <= 700) {
    TopBar.classList.add("hide");
    topbar_show = false;
}

function OpenCloseMenu() {
    topbar_show = !topbar_show;
    if (topbar_show) {
        TopBar.classList.remove("hide");
        MenuShowIcon.innerHTML = `<i class="fa fa-times"></i>`;
    } else {
        TopBar.classList.add("hide");
        MenuShowIcon.innerHTML = `<i class="fa fa-bars"></i>`;
    }
}