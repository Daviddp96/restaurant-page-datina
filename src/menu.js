function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu__section");

  menu.appendChild(
    createMenuItem(
      "Pepperoni",
      "Pepperoni, Mozzarella & Sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pesto",
      "Pesto Leaves, Mozzarella & Sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Prosciutto",
      "Pecorino Cheese, Prosciutto Ham, Mozzarella & Sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Veggie",
      "Olives, Peppers, Onion, Mozzarella & Sauce"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `/dist/images/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
