/**
 * Compte le nombre de pokémons attrapés
 */

"use strict";
//Récupère le premier <h2> du document
//document.querySelector('h2');

//Déclaration et initialisation du compteur de captures
let compteur = 0;
//Récupère l'élément qui a l'ID "compteur-el"
const compteurEl = document.getElementById('compteur-el');
const sauvegardeEl = document.getElementById('sauvegarde-liste');

console.log(compteur, compteurEl);

//Fonction qui incrémente le compteur et met à jour le texte du <h2>
function capturer() {
    compteur+=1;
    compteurEl.textContent = compteur;
    //Change la couleur en fonction du nombre de pokémons
    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

//Fonction qui sauvegarde les captures et réinitialise le compteur
function sauvegarder() {
    //console.log('sauvegarder');
    sauvegardeEl.textContent += ` ${compteur} pokémons | `;
    //Sauvegarde l'historique des captures en local
    localStorage.setItem("captures", 'Mes captures : ' + sauvegardeEl.textContent);
    sauvegardeEl.innerHTML += <li></li>
    compteur = 0;
    compteurEl.textContent = compteur;
    compteurEl.style.color = 'black';
}

//Fonction qui vide le storage
function reset() {
    localStorage.clear();
    localStorage.setItem("captures", 'Mes captures : ');
    sauvegardeEl.textContent = localStorage.getItem("captures");
}

//Ecouter les événements
document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
document.getElementById('reset-btn').addEventListener('click', reset);

//Quand l'onglet a fini de charger
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures");
});