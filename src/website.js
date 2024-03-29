import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import datinaLogo from './images/logo.svg';
import { createHeading } from "./tags";

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("main-nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerLogo = document.createElement("img");
  headerLogo.src = datinaLogo;
  headerLogo.alt = "Datina Logo";

  const headerTitle = createHeading(1, "Authentic & Delicious Pizza");
  headerTitle.classList.add("header__title");

  header.appendChild(headerLogo);
  header.appendChild(headerTitle);
  header.appendChild(createNav());

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerMarkup = `<p>
    Made by <a href='https://github.com/Daviddp96'>David</a></p>
  </p>`;

  const div = document.createElement('div');
  div.innerHTML = footerMarkup;

  footer.appendChild(div);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector(".button"));
  loadHome();
}

export default initializeWebsite;
