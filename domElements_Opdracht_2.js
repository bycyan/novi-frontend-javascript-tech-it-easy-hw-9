//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let allSoldTvs = 0;

for (let i = 0; i < inventory.length; i++){
    allSoldTvs = allSoldTvs + inventory[i].sold;
}

console.log(allSoldTvs)

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const soldItemsContainer = document.getElementById('items-sold');

soldItemsContainer.innerHTML = `
  <h2>${allSoldTvs}</h2>
`;

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let allBoughtTvs = 0;

for (let i = 0; i < inventory.length; i++){
    allBoughtTvs = allBoughtTvs + inventory[i].originalStock;
}

console.log(allBoughtTvs)

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const boughtItemsContainer = document.getElementById('items-bought');

boughtItemsContainer.innerHTML = `
<h2>${allBoughtTvs}</h2>
`

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const itemsToSell = document.getElementById('items-to-Sell')

itemsToSell.innerHTML =`
<h2>${allBoughtTvs - allSoldTvs}</h2>
`