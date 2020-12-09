let continents = []

$.get(
    "https://corona.lmao.ninja/v2/continents?yesterday=true&sort",
    (data) => {
        continents = data;
        console.log(data)
        data.forEach(appendCardtoContainer);  
    }
)

const appendCardtoContainer = (element) => {
    let card = createCard(element);
    const cardType = $(`<div class="col-md-4 col-sm-6 mb-4"></div>`)
    cardType.append(card)
    $('#container').append(cardType)
}

function createCard(element) {
    const name = element.continent
    const continentActiveCase =`<li>ActiveCases: ${element.active}</li>`
    const continentNewCase = `<li>NewCases: ${element.todayCases}</li>`
    const continentNewDeath = `<li>NewDeath: ${element.todayDeaths}</li>`
    const continentNewRecovered = `<li>NewRecovered: ${element.todayRecovered}</li>`
    const continentTested = `<li>Tested: ${element.testsPerOneMillion}</li>`
    const continentDeathRatio = `<li>DeathPerMillion: ${element.deathsPerOneMillion}</li>`
    const continentRecovered = `<li>RecoveredPerMillion: ${element.recoveredPerOneMillion}</li>`

    const continentDiv = $(`<div class="card"></div`)
    const continentheader =$(`<div class="card-header">${name}</div>`)
    const continentBody =$(`<div class="card-body"></div>`)
    const continentInfo =$(`<div class="card-info"></div>`)

    continentBody.append(continentActiveCase, continentNewCase, continentNewDeath, continentNewRecovered, continentTested, continentDeathRatio, continentRecovered)
    continentDiv.append(continentheader, continentBody, continentInfo)
    return continentDiv
}





