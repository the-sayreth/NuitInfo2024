// Liste de textes pour les placeholders
const textList = [
    ["Bob", "Morane", "contre@tout.chacal"],
    ["Katy", "PenneFlamme", "TunEstPas@DeNotre.Galaxie"],
    ["Agathe", "feeling", "andthisnight@gonnebe.agoodnight"],
    ["Sophie", "Fonfek", "CheveuxSur@laLangue.fr"],
    ["Rémi", "Fasol", "La@si.Do"],
    ["Justin", "Ptipeu", "Pas@bocou.plus"],
    ["Jean", "Bonboeur", "Meilleur@sandwich.com"],
    ["Vincent", "Times", "des@piece.jaune"],
];

// Fonction pour générer un texte aléatoire
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textList.length);
    return textList[randomIndex];
}

// Appliquer le même texte aléatoire aux placeholders
document.addEventListener('DOMContentLoaded', () => {
    const randomText = getRandomText(); // Générer un texte aléatoire unique
    document.getElementById('Prenom').placeholder = randomText[0];
    document.getElementById('Nom').placeholder = randomText[1];
    document.getElementById('Email').placeholder = randomText[2];
});
