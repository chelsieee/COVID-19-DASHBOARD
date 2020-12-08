console.log('app is running')

const continentData = $.get(
    "https://corona.lmao.ninja/v2/continents?yesterday=true&sort",
     (data) => {
        console.log(data);
        for (let i=0; i<data.length; i++){
            const name = data[i].continent
            const continentName = `<span>${data[i].continent}</span>`
            const continentNewCase = `<li>NewCase: ${data[i].todayCases}</li>`
            const continentNewDeath = `<li>NewDeath: ${data[i].todayDeaths}</li>`
            const continentNewRecovered = `<li>NewRecovered: ${data[i].todayRecovered}</li>`
            const continentTested = `<li>Tested: ${data[i].testsPerOneMillion}</li>`
            const continentDeathRatio = `<li>DeathPerMillion: ${data[i].deathsPerOneMillion}</li>`
            const continentRecovered = `<li>RecoveredPerMillion: ${data[i].recoveredPerOneMillion}</li>`
            
            const continentDiv = $(`<div class="card"></div`)
            const continentheader =$(`<div class="card-header">${name}</div>`)
            const continentBody =$(`<div class="card-body"></div>`)
            const continentInfo =$(`<div class="card-info"></div>`)
           
           
            const classType = $(`<div class="col-md-4 col-sm-6 mb-4"></div>`)
            continentBody.append(continentNewCase, continentNewDeath, continentNewRecovered, continentTested, continentDeathRatio, continentRecovered)
            continentDiv.append(continentheader, continentBody, continentInfo)
            classType.append(continentDiv)
            $('#container').append(classType)
        }
    }
)






