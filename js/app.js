
const open_menu = ()=>{

    const menu = document.querySelector('.header_menu');
    menu.classList.add('active');

    // const close= document.querySelector('.header_menu_mobile_exite');
    const close = document.getElementById('close_btn');
    
    close.style.display = 'block';
}

const close_menu = ()=>{

    
    const menu = document.querySelector('.header_menu');
    menu.classList.remove('active');


    // const close= document.querySelector('.header_menu_mobile_exite');
    const close = document.getElementById('close_btn');
    close.style.display = 'none';
}

// Sélectionnez tous les liens du menu
const menuLinks = document.querySelectorAll('.header_menu a');

// Parcourez chaque lien et ajoutez un écouteur d'événements
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut (saut instantané)

        // Récupère la cible de l'attribut href
        const targetId = this.getAttribute('href').substring(1); // Supprime le "#" de href
        const targetSection = document.getElementById(targetId);

        // Fait défiler vers la section cible
        if (targetSection) {

            const menu = document.querySelector('.header_menu');
            menu.classList.remove('active');

            const close = document.getElementById('close_btn');
            close.style.display = 'none';

            targetSection.scrollIntoView({
                behavior: 'smooth', // Défilement fluide
                block: 'start' // Aligne la section en haut de la page
            });
        }
    });
});


const LanguagesSkills = document.querySelectorAll(`.languages`);
LanguagesSkills.forEach(skill => {
    skill.classList.add('show');
});


const languagebtn = document.getElementById('languagebtn');
 // Ajouter la classe active au bouton cliqué
languagebtn.classList.add('active');



// Récupérer tous les boutons et les compétences
const buttons = document.querySelectorAll('.filter-btn');
const skills = document.querySelectorAll('.skill');

// Ajouter un événement de clic à chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Masquer toutes les compétences
        skills.forEach(skill => {
            skill.classList.remove('show');
        });

        // Afficher uniquement les compétences correspondant à la catégorie
        const categorySkills = document.querySelectorAll(`.${category}`);
        categorySkills.forEach(skill => {
            skill.classList.add('show');
        });
    });
});


// Sélectionner tous les boutons avec la classe .filter-btn
const btns = document.querySelectorAll('.filter-btn');

// Ajouter un gestionnaire d'événements à chaque bouton
btns.forEach(button => {
  button.addEventListener('click', () => {
    // Réinitialiser les styles des autres boutons
    btns.forEach(btn => btn.classList.remove('active'));

    // Ajouter la classe active au bouton cliqué
    button.classList.add('active');
  });
});

