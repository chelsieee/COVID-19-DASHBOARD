$.get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort", (data) => {
  data.forEach(appendCardtoContainer);
});

const appendCardtoContainer = (element, i) => {
  let card = createCard(element, i);
  const cardType = $(`<div class="col-md-4 col-sm-6 mb-4"></div>`);
  cardType.append(card);
  $("#container").append(cardType);
};

function createCard(element, i) {
  const name = element.continent;
  const continentActiveCase = `<li>ActiveCases: ${element.active}</li>`;
  const continentNewCase = `<li>NewCases: ${element.todayCases}</li>`;
  const continentNewDeath = `<li>NewDeath: ${element.todayDeaths}</li>`;
  const continentNewRecovered = `<li>NewRecovered: ${element.todayRecovered}</li>`;
  const continentTested = `<li>Tested: ${element.testsPerOneMillion}</li>`;
  const continentDeathRatio = `<li>DeathPerMillion: ${element.deathsPerOneMillion}</li>`;
  const continentRecovered = `<li>RecoveredPerMillion: ${element.recoveredPerOneMillion}</li>`;

  const continentDiv = $(`<div class="card"></div`);
  const continentheader = $(`<div class="card-header">${name}</div>`);
  const continentBody = $(`<div class="card-body"></div>`);
  const continentInfo = $(`<div class="card-info"></div>`);
  const continentButton = $(
    `<button type="button" class="detailButton">Show More</button>`
  );
  continentButton.click((event) => {
    let countryList = element.countries;
    console.log(countryList);
    countryList.forEach((country) => {
      const countryName = `<option value = ${country}>${country}</option>`;
      $("#countries").append(countryName);
    });
  });

  continentBody.append(
    continentActiveCase,
    continentNewCase,
    continentNewDeath,
    continentNewRecovered,
    continentTested,
    continentDeathRatio,
    continentRecovered
  );
  continentInfo.append(continentButton);
  continentDiv.append(continentheader, continentBody, continentInfo);
  return continentDiv;
}

$("#country").on("submit", (event) => {
  event.preventDefault();
  console.log("print");
  let countryData = $("#countries option:selected").val();
  $.get(
    `https://corona.lmao.ninja/v2/countries/${countryData}?yesterday=true&strict=true`,
    (details) => {
      let countryCard = createCardforCountry(details);
      $("#container2").append(countryCard);
    }
  );
});

function createCardforCountry(element) {
  const name = element.country;
  const newCase = `<li>NewCases: ${element.todayCases}</li>`;
  const totalCase = `<li>TotalCases: ${element.Cases}</li>`;
  const newDeath = `<li>NewDeath: ${element.todayDeaths}</li>`;
  const totalDeath = `<li>TotalDeath: ${element.Deaths}</li>`;
  const newRecovered = `<li>NewRecovered: ${element.todayRecovered}</li>`;
  const Recovered = `<li>TotalRecovered: ${element.recovered}</li>`;

  const countryDiv = $(`<div class="card"></div`);
  const countryHeader = $(`<div class="card-header">${name}</div>`);
  const countryBody = $(`<div class="card-body"></div>`);
  const countryInfo = $(`<div class="card-info"></div>`);

  countryBody.append(
    newCase,
    totalCase,
    newDeath,
    totalDeath,
    newRecovered,
    Recovered
  );
  countryDiv.append(countryHeader, countryBody, countryInfo);
  return countryDiv;
}
