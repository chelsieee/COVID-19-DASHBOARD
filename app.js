console.log('app is running')

const continentData = $.get(
    "https://corona.lmao.ninja/v2/continents?yesterday=true&sort",
     (data) => {
        console.log(data);
        for (let i=0; i<data.length; i++){
    
            const continentName = `<span>${data[i].continent}</span>`
            const continentNewCase = `<li>ContinentNewCase: ${data[i].todayCases}</li>`
            const continentNewDeath = `<li>ContinentNewDeath: ${data[i].todayDeaths}</li>`
            const continentNewRecovered = `<li>ContinentNewRecovered: ${data[i].todayRecovered}</li>`
            const continentDeathRatio = `<li>ContinentDeathRatio: ${data[i].deathsPerOneMillion}</li>`
            const continentTested = `<li>ContinentTested: ${data[i].testsPerOneMillion}</li>`
            const continentRecovered = `<li>ContinentRecovered: ${data[i].recoveredPerOneMillion}</li>`
            
            const continentDiv = $(`<div class="card" styple ="width: 18rem;"></div`)
    
        


            const continentUl =$(`<ul class ="continentDetails"/>`)
            continentUl.append(continentNewCase, continentNewDeath, continentNewRecovered, continentTested, continentDeathRatio, continentRecovered)
            continentDiv.append(continentName, continentUl)

            $('#container').append(continentDiv)
        }
    }
)
