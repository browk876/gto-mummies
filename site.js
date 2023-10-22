const gtoMummies = {
continent: 'North America',
hemisphere: 'western',
region: 'Central America',
country: 'Mexico',
city: 'Guanajuato City' ,
state: 'GTO' ,
mummyRelevance: 'Mexican pop culture',
culturalRelevance: 'fascination with the macabre is a big part of Mexican culture',
mummyLocation: 'musuem',
guanajuatoMex: {
worldLocation: 'central Mexico',
capital: 'Guanajuato City',
geographicalTrait: 'located in a narrow valley',
cityTrait: 'narrow and winding streets',
isWorldHeritageSite: true ,
isMyGrandmasHometown: true,
knownFor: [
"Spanish colonial architecture",
"silver mining",
"relevance in Mexican independance"
],
nativePeoples: [
"Otomi" ,
"Chichimeca" ,
"Purépecha" ,
],
},
theMummification: {
isNatural: true ,
naturalCause: 'semiarid climate',
otherPlacesWithMummies: [
"Encarnación de Díaz" ,
"Jalisco" ,
"El Carmen complex, Mexico City" ,
],
choleraOutbreak: {
duration: '1829-1851',
consequence: 'more cemetaries had to be opened to accomodate the incoming dead',
newCemetariesLocations: [
"Cayetano",
" Cañada de Marfil",
],
burialCondition: 'bodies had to be buried immediately to avoid the spread of the disease',
burialConsequence: 'due to the bodies being buried immediately, several people were buried alive',
buriedAlive: 'the bodies who were buried alive were found to have horrifying facial expressions upon being dug up',
isContributionToGraveTaxLaw: true,
},
graveTax: {
duration: '1870-1958',
taxExplanation: 'Grave Tax law required families to pay monthly fee in order to keep loved ones buried',
isBodiesDisinterred: true ,
isEthical: false ,
unpaidTax: 'bodies were dug up and temporarily kept in buildings near burial plots until family could pay the tax',
temporaryStorage: 'workers began charging a few pesos to enter the temporary storage space and see the mummies',
leftoverBodies: 'leftover bodies prompted the creation of El Museo de las Momias, where they were put on display'
},
mummyMuseum: {
spanishName: 'El Museo de las Momias',
englishName: 'The Museum of the Mummies',
address: {
street: " Explanada del Panteón Municipal s/n",
postalCode: '36000',
city: 'Guanajuato City',
state: 'GTO',
country: 'Mexico',
},
yearOpened: '1969',
isTouristAttraction: true,
initialMummyNum: '111',
currentMummyNum: '59',
isMostMummiesFromCholera: true,
isHometoSmallestMummy: true,
smallestMummy: "the museum holds the world's smallest mummy, a fetus found inside the mummy of a pregnant cholera victim",
}
}
}
function getRandomItemFromArray(knownFor) {
    if (knownFor.length === 0) {
        return "The array is empty.";
    }

    const randomIndex = Math.floor(Math.random() * knownFor.length);
    return knownFor[randomIndex];
}
function getRandomItemFromArray(nativePeoples) {
    if (nativePeoples.length === 0) {
        return "The array is empty.";
    }

    const randomIndex = Math.floor(Math.random() * nativePeoples.length);
    return nativePeoples[randomIndex];
}
function getRandomItemFromArray(otherPlacesWithMummies) {
    if (otherPlacesWithMummies.length === 0) {
        return "The array is empty.";
    }

    const randomIndex = Math.floor(Math.random() * otherPlacesWithMummies.length);
    return otherPlacesWithMummies[randomIndex];
}
function getRandomItemFromArray(newCemetariesLocations) {
    if (newCemetariesLocations.length === 0) {
        return "The array is empty.";
    }

    const randomIndex = Math.floor(Math.random() * newCemetariesLocations.length);
    return newCemetariesLocations[randomIndex];
}
