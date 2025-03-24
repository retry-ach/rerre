"use strict";

const sneakersData = [
  {
    id: 1,
    image: "assets/images/cards/nike.jpg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/575/605/small_2x/puma-black-sneakers-isolated-png.png",
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999",
  },
  {
    id: 3,
    image: "assets/images/cards/nike.jpg",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499",
  },
];

const cards = document.querySelector(".sneakers__cards");

const createSneakers = () => {
  cards.innerHTML = "";

  sneakersData.forEach((item) => {
    console.log(1);

    cards.innerHTML += `
    <div class="card">
        <img src=${item.image} alt="" />
        <p class="card__title">${item.title}</p>
        <div class="card__bottom">
            <div class="card__price">
                  <span>Цена:</span>
                  <p>${item.price} руб.</p>
            </div>
                <div class="card__add"></div>
             </div>
    </div>
  `;
  });
};

createSneakers();
