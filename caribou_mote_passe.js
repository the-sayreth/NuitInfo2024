
// Sélection de l'image
const image = document.getElementById('oeil2');

// Ajouter un gestionnaire d'événements pour suivre la souris
document.addEventListener('mousemove', (event) => {
    // Obtenir les coordonnées de la souris
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Obtenir les coordonnées du centre de l'image
    const rect = image.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    // Calculer l'angle entre la souris et l'image (en radians)
    const angle = Math.atan2(mouseY - imageCenterY, mouseX - imageCenterX);

    // Convertir l'angle en degrés pour CSS
    const angleDegrees = angle * (180 / Math.PI) - 90;

    // Appliquer la rotation à l'image
    image.style.transform = `rotate(${angleDegrees}deg)`;
});
// Sélection de l'image
const image1 = document.getElementById('oeil1');

// Ajouter un gestionnaire d'événements pour suivre la souris
document.addEventListener('mousemove', (event) => {
    // Obtenir les coordonnées de la souris
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Obtenir les coordonnées du centre de l'image
    const rect = image1.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    // Calculer l'angle entre la souris et l'image (en radians)
    const angle = Math.atan2(mouseY - imageCenterY, mouseX - imageCenterX);

    // Convertir l'angle en degrés pour CSS
    const angleDegrees = angle * (180 / Math.PI) - 90;

    // Appliquer la rotation à l'image
    image1.style.transform = `rotate(${angleDegrees}deg)`;
});



// Sélectionne le bouton et le conteneur circulaire

const circleContainer = document.getElementById('circle-container');



// Sélectionne le champ mot de passe et le conteneur
const passwordField = document.getElementById('password');


// Ajoute un écouteur pour détecter l'entrée dans le champ
passwordField.addEventListener('mouseenter', () => {
    circleContainer.classList.toggle('active'); // Ajoute ou enlève la classe active
});

// Ajoute un écouteur pour détecter la sortie du champ
passwordField.addEventListener('mouseleave', () => {
    circleContainer.classList.toggle('active'); // Ajoute ou enlève la classe active
});