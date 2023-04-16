

//Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function tvItem(tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

//Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function tvPrice(price){
    return `€${price},-`;
}

//Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function createScreenSizesString(sizesArray) {
    let output = '';

    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = sizesArray[i] * 2.54;

        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }

    return output;
}

//Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

const tvContainer = document.getElementById('tv-container');

tvContainer.innerHTML = `
  <h2>${tvItem(inventory[3])}</h2>
  <h3>${tvPrice(inventory[3].price)}</h3>
  <p>${createScreenSizesString(inventory[3].availableSizes)}</p>
`

//Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tv) => {
        return `
      <li>
        <h3>${tvItem(tv)}</h3>
        <h4>${tvPrice(tv.price)}</h4>
        <p>${createScreenSizesString(tv.availableSizes)}</p>
      </li>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);