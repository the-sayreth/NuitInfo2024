function themeClair() {
    document.documentElement.style.setProperty('--background-black', '#fcf2f2');
    document.documentElement.style.setProperty('--blanc', '#000000');
    document.documentElement.style.setProperty('--theme-secondair', '#8a6b1c');
    document.documentElement.style.setProperty('--text-blanc', '#3b3b3b');
    document.documentElement.style.setProperty('--gris-clair', '#3b3b3b');
    document.documentElement.style.setProperty('--gris-sombre', '#adadad');
    document.documentElement.style.setProperty('--encadrer', '#ffe3e3');
    document.documentElement.style.setProperty('--arriere-plan-1', '#ffdee3');
    document.documentElement.style.setProperty('--arriere-plan-2', '#ffb0ba');
    document.documentElement.style.setProperty('--bouton-activer', '#290006');
};

function themeSombre() {
    document.documentElement.style.setProperty('--background-black', '#0d0b02');
    document.documentElement.style.setProperty('--blanc', '#fff');
    document.documentElement.style.setProperty('--theme-secondair', '#e2c376');
    document.documentElement.style.setProperty('--text-blanc', '#c5c5c5');
    document.documentElement.style.setProperty('--gris-clair', '#c4c4c4');
    document.documentElement.style.setProperty('--gris-sombre', '#525252');
    document.documentElement.style.setProperty('--encadrer', '#1b0000');
    document.documentElement.style.setProperty('--arriere-plan-1', '#200005');
    document.documentElement.style.setProperty('--arriere-plan-2', '#4e010b');
    document.documentElement.style.setProperty('--bouton-activer', '#290006');
};
// Variables pour détecter les clics
let clickCount = 0;
let isBlinking = false; // État de clignotement
const blinkInterval = 100; // Durée entre les clignotements (en ms)
let blinkTimer;
const colors = ['#00f7ff', '#ff0000', '#48ff00', '#ffb300', '#2200ff', '#fff200'];
let currentColorIndex = 0;
let jour=1;

// Fonction pour clignoter
function startBlinking() {
    if (isBlinking) return; // Éviter de démarrer plusieurs fois
    isBlinking = true;
    

    blinkTimer = setInterval(() => {
        // Alterner entre deux couleurs
        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--theme-secondair', randomColor1);
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--background-black', randomColor2);
        const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--blanc', randomColor3);
        const randomColor4 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--text-blanc', randomColor4);
        const randomColor5 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--gris-clair', randomColor5);
        const randomColor6 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--gris-sombre', randomColor6);
        const randomColor7 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--encadrer', randomColor7);
        const randomColor8 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--arriere-plan-1', randomColor8);
        const randomColor9 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--arriere-plan-2', randomColor9);
        const randomColor10 = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--bouton-activer', randomColor10);
        
    }, blinkInterval);

    // Arrêter le clignotement après 10 secondes
    setTimeout(() => {
        clearInterval(blinkTimer);

        // Retour à la couleur par défaut
        html.classList.toggle("nuit");
        if (jour==0) {
            themeClair();
            jour=1;
        } else {
            themeSombre();
            jour=0;
        }
        isBlinking = false;
    }, 5000);
}


// Référence à l'image

const img = document.getElementById('clickable-img');
const html = document.getElementsByTagName("html")[0];
// Fonction d'animation et de changement de couleur
img.addEventListener('click', () => {
    clickCount++;

    // Réinitialiser le compteur après 1 seconde
    setTimeout(() => {
        clickCount = 0;
    }, 3000);
    // Animation : descendre de 30px puis remonter
    img.style.transform = 'translateY(30px)';
    setTimeout(() => {
        img.style.transform = 'translateY(0)';
    }, 300);

    // Changer la couleur de l'arrière-plan

    // Si plus de 6 clics en une seconde, démarrer le clignotement
    if (clickCount > 6) {
        startBlinking();
    } else {
        html.classList.toggle("nuit");
        if (jour==0) {
            themeClair();
            jour=1;

        } else {
            themeSombre();
            jour=0;
        }
    }
    // Liste de couleurs possibles

});
