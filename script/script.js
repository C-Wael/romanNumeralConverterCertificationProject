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
