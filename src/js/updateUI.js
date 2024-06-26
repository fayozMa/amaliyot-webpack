const cardsEl = document.querySelector(".cards")
export const createCountryies = (countries) => {
  countries.forEach((country) => {
    const commonName = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No Capital";
    const flag = country.flags.svg;

    //li
    const li = document.createElement("li");
    li.classList.add("cart__item");
    li.innerHTML = `
        <a href="./about.html">
        <img
          src=${flag}
          alt="country-flag"
          width="267"
          height="160"
        />
        <div class="cards__item-inner">
          <h3 class="cards__title">${commonName}</h3>
          <p class="population">Population: <span>${population}</span></p>
          <p class="region">Region: <span>${region}</span></p>
          <p class="capital">Capital: <span>${capital}</span></p>
        </div>
      </a>
    `;
    cardsEl.appendChild(li)
  });
};
