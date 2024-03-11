import { createHeading, createParagraph, createListItem } from "./tags";

function createHome() {
  const home = document.createElement("section");
  home.classList.add("home__section");

  const restaurantImage = document.createElement("img");
  restaurantImage.src = "/dist/images/home-img.jpg";
  restaurantImage.alt = "A tasty pizza made at Datina";
  restaurantImage.classList.add('home__img');

  const featuresList = document.createElement("ul");
  featuresList.classList.add("home__features-list");

  const features = [
    createListItem("Hand-tossed dough made daily"),
    createListItem("Unique and classic topping combinations"),
    createListItem("Warm, inviting atmosphere"),
    createListItem(
      "Perfect for a casual lunch, family dinner, or gathering with friends"
    ),
  ];

  for (const feature of features) {
    featuresList.appendChild(feature);
  }

  const hoursList = document.createElement("ul");
  const hours = [
    createListItem("Sunday - Thursday: 10:00 AM - 6:00 PM"),
    createListItem("Friday & Saturday: 11:00 AM - 10:00 PM"),
  ];

  for (const hour of hours) {
    hoursList.appendChild(hour);
  }

  home.appendChild(createParagraph("A Slice of Tradition Since 2020"));
  home.appendChild(restaurantImage);
  home.appendChild(
    createParagraph(
      `Welcome to Datina, your neighborhood haven for authentic, delicious pizzas! We've been serving up slices of joy since 2020, using only the freshest ingredients and time-honored recipes.`
    )
  );
  home.appendChild(
    createHeading(2, "Step inside and experience the Datina difference:")
  );
  home.appendChild(featuresList);
  home.appendChild(createHeading(2, "Come hungry, leave happy!"));
  home.appendChild(createHeading(3, "Hours of Operation:"));
  home.appendChild(hoursList);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
