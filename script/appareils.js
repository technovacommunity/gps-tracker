
document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes au chargement
    const cards = document.querySelectorAll('.device-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Interaction avec les boutons de connexion
    const connectionBtns = document.querySelectorAll('.connection-btn');
    connectionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const method = this.querySelector('.connection-name').textContent;
            alert(`Méthode de connexion sélectionnée : ${method}`);
        });
    });
    
    // Gestion des boutons d'action
    const actionButtons = document.querySelectorAll('.btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});