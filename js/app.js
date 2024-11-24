
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
