import cardTpl from "../src/templates/menu-card.hbs";
import menuList from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
// ================== REFS ========================
const refs = {
    menu: document.querySelector(".js-menu"),
    body: document.querySelector("body"),
    switcher: document.querySelector(".theme-switch__toggle")
} 

// ================== MARKUP ========================

const menuElementMarkup = createMenu(menuList);
refs.menu.insertAdjacentHTML("afterbegin", menuElementMarkup)
function createMenu(menuList) {
    return menuList.map(cardTpl).join('');
  }
  
// ================== CHANGING THEME ========================
refs.switcher.addEventListener("change", onThemeSwitcherChange)
savedTheme()

function changeTheme(currentTheme, oldTheme) {
    refs.body.classList.add(currentTheme);
    refs.body.classList.remove(oldTheme);
    localStorage.setItem("theme", currentTheme);
}

function onThemeSwitcherChange({target}) {
    // console.log(target.checked);
    if (target.checked) { 
        changeTheme(Theme.DARK, Theme.LIGHT)        
    } else {
     changeTheme(Theme.LIGHT, Theme.DARK)
    }
}    
      
function savedTheme() {
    const theme = localStorage.getItem("theme")

    if (theme) {
        refs.body.classList.add(theme);
        refs.switcher.checked = theme === Theme.DARK;
    }
}
