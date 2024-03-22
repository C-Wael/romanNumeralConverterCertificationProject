const inputNumber = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const outputResult = document.getElementById("output")

const convertNumber = (number) => {

    const romanNumerals = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }

    let result = "";

    // Parcourir les clés de l'objet romanNumerals en ordre décroissant
    Object.keys(romanNumerals).sort((a, b) => b - a).forEach(value => {
        // Tant que le nombre en entrée est supérieur ou égal à la valeur actuelle
        while (number >= value) {
            // Ajouter le chiffre romain correspondant à la sortie
            result += romanNumerals[value];
            // Soustraire la valeur actuelle du nombre en entrée
            number -= value;
        }
    });
    
    return result;

}

convertBtn.addEventListener("click", () => {
    outputResult.classList.remove("displayNone"); // Supprime la class displayNone de la div avec comme id output, fonction créée pour ne pas avoir de DRY.

    // Conditions :
    if (inputNumber.value === ""){
        outputResult.innerHTML = "Please enter a valid number";
    } else if (inputNumber.value <= 0) {
        outputResult.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (inputNumber.value >= 4000) {
        outputResult.innerHTML = "Please enter a number less than or equal to 3999"
    } else {
        const input = parseInt(inputNumber.value); // Convertir l'entrée en nombre entier
        const output = convertNumber(input); // Appeler la fonction de conversion
        outputResult.textContent = output; // Afficher le résultat dans l'élément de sortie
    }
});