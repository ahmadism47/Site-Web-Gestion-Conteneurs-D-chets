const inputs = document.querySelectorAll(".input");
// Fonction pour ajouter la classe "focus" lorsqu'un champ est en focus
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
// Fonction pour supprimer la classe "focus" lorsqu'un champ perd le focus
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        // Vérifie si les champs requis sont remplis
        if (validateForm()) {
            alert("Votre message a été envoyé avec succès !");
            form.reset();
        } else { 
            alert("Veuillez remplir tous les champs du formulaire.");
        }
    });

    // Fonction pour valider les champs du formulaire
    function validateForm() {
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');      
        if (email.value.trim() === '' || message.value.trim() === '') {
            return false; 
        }
        return true; 
    }
});