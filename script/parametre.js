document.addEventListener('DOMContentLoaded', function() {
    // Navigation entre les sections
    const categories = document.querySelectorAll('.settings-category');
    const sections = document.querySelectorAll('.settings-section');
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Mettre à jour la catégorie active
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Afficher la section correspondante
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Interaction avec les toggle switches
    const toggles = document.querySelectorAll('.toggle-switch input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            // Ajouter une animation de feedback
            const slider = this.nextElementSibling;
            if (this.checked) {
                slider.style.boxShadow = '0 0 10px rgba(29, 209, 161, 0.5)';
            } else {
                slider.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
            }
            
            setTimeout(() => {
                slider.style.boxShadow = 'none';
            }, 300);
        });
    });
    
    // Interaction avec les sélecteurs de couleur
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Animation de feedback
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 200);
        });
    });
    
    // Bouton retour
    const backBtn = document.querySelector('.settings-back-btn');
    backBtn.addEventListener('click', function() {
        // Animation de retour
        this.style.transform = 'translateY(-50%) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-50%) scale(1)';
            alert('Retour à l\'écran précédent');
        }, 200);
    });
});