// 1. On récupère le bouton
/*const btn = document.querySelector('#monBouton');
const zoneMessage = document.querySelector('#message');

// 2. On écoute le clic
btn.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de recharger la page
    zoneMessage.innerHTML = "Merci d'avoir cliqué ! Bienvenue sur mon projet.";
    zoneMessage.style.color = "green";
    zoneMessage.style.marginTop = "20px";
});
*/
/*const btnTheme = document.querySelector('#btnTheme');

btnTheme.addEventListener('click', function() {
    // On demande au "body" d'ajouter ou d'enlever la classe .dark-mode
    document.body.classList.toggle('dark-mode');
    event.preventDefault();
});
*/
// 1. On sélectionne le bouton et le body
const btn = document.getElementById('btnTheme');
const body = document.body;


// 2. On écoute le clic
btn.addEventListener('click', function() {
    // 3. On bascule la classe 'dark-mode'
    body.classList.toggle('dark-mode');
    
    // Optionnel : Changer le texte du bouton selon le mode
    if (body.classList.contains('dark-mode')) {
        btn.textContent = "Mode Clair";
    } else {
        btn.textContent = "Mode Sombre";
    }
});