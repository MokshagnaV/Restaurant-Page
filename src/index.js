import home from './home'
import menu from './menu'
import contact from './contact'

const container = document.querySelector("#content");
container.innerHTML = home().innerHTML;

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Home") container.innerHTML = home().innerHTML;
    if (target === "Menu") container.innerHTML = menu().innerHTML;
    if (target === "Contact") container.innerHTML = contact().innerHTML;
  });