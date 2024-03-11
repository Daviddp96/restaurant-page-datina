import { createHeading, createParagraph, createListItem } from "./tags";

function createHome() {
  const home = document.createElement("section");
  home.classList.add("home__section");

  const restaurantImage = document.createElement("img");
  restaurantImage.src = "/images/home-img.jpg";
  restaurantImage.alt = "A tasty pizza made at Datina";
  restaurantImage.classList.add('home__img');

  home.appendChild(createParagraph("A Slice of Tradition Since 2020"));
  home.appendChild(restaurantImage);
  home.appendChild(
    createParagraph(
      `Welcome to Datina, your neighborhood haven for authentic, delicious pizzas! We've been serving up slices of joy since 2020, using only the freshest ingredients and time-honored recipes.`
    )
  );
  home.appendChild(createHeading(2, "Come hungry, leave happy!"));

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hours__container');

  home.appendChild(hoursDiv);
  hoursDiv.appendChild(createHeading(3, "Hours of Operation:"));

  const hoursList = document.createElement("ul");
  const hours = [
    createListItem("<strong>Sunday - Thursday:</strong> 10:00 AM - 6:00 PM"),
    createListItem("<strong>Friday & Saturday:</strong> 11:00 AM - 10:00 PM"),
  ];

  for (const hour of hours) {
    hoursList.appendChild(hour);
  }

  hoursDiv.appendChild(hoursList);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
