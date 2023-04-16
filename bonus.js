//Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

const sortPriceButton = document.getElementById('sort-price-button');
const filterAmbilightButton = document.getElementById('sort-ambilight-button');
const filterSoldOutButton = document.getElementById('sort-sold-out-button');

sortPriceButton.addEventListener('click', displaySortedTvs);
filterAmbilightButton.addEventListener('click', displayAmbilightTvs);
filterSoldOutButton.addEventListener('click', displaySoldOutTvs);

function displaySortedTvs() {
    sortTv(inventory);
    generateTvList(inventory);
}

// console.log(displaySortedTvs);

function displayAmbilightTvs() {
    const itemsWithAmbi = inventory.filter((tv) => {
        return tv.options.ambiLight === true;
    })
    generateTvList(itemsWithAmbi);
}

function displaySoldOutTvs() {
    const soldOutItems = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    })
    generateTvList(soldOutItems);
}