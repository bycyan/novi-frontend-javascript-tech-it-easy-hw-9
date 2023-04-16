//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const allTvTypes = inventory.map((tvs) => {
    return 'Tv Types: ' + tvs.type;
});

console.log(allTvTypes);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((tvs) => {
    return tvs.originalStock === tvs.sold;
});

console.log(soldOut)

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambiLight = inventory.find((tvs) => {
    return tvs.options.ambiLight === true;
});

console.log(ambiLight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

function sortTv(Tvs){
    Tvs.sort((a, b) => a.price - b.price);
}

// sortTv(inventory);
console.log(inventory);