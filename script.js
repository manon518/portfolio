const toggleBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
    
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('visible');
        });

        document.addEventListener('DOMContentLoaded', function() {
        const epreuvesLink = document.getElementById('epreuves-link');
        const parentLi = epreuvesLink.parentElement;

        epreuvesLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche de recharger la page
            parentLi.classList.toggle('open'); // Ajoute ou enlève la classe "open"
            });
        });

        const tabs = document.querySelectorAll('.tab');
        const images = document.querySelectorAll('.gallery img');


    // Fonction de filtrage selon la catégorie sélectionnée
    function filterCertificates(filter) {
      images.forEach(img => {
        // On récupère l'attribut data-category et on le transforme en tableau
        const categories = img.dataset.category.split(" ");
        // Si le filtre est "tous" ou si l'image possède la catégorie correspondante, on l'affiche ; sinon, on la cache.
        if (filter === 'tous' || categories.includes(filter)) {
          img.classList.remove('hidden');
        } else {
          img.classList.add('hidden');
        }
      });
    }

    // Ajout d'un écouteur d'événement sur chaque onglet
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Enlever la classe active de tous les onglets et l'ajouter à celui cliqué
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Filtrer les images
        const filter = tab.dataset.filter;
        filterCertificates(filter);
      });
    });

    const track = document.getElementById('track');
    const dots = document.querySelectorAll('.dot');

    function moveSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }