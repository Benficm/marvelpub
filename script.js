document.addEventListener('DOMContentLoaded', function() {
    const heroContents = document.querySelectorAll('.hero-content');
    const heroTitles = document.querySelectorAll('.hero-title');
    
    // Mostrar Hulk como padrão
    function showDefaultHero() {
        document.getElementById('hulk-content').classList.add('active');
        document.querySelector('.hero-title[id="hulk"]').classList.add('active');
    }
    
    // Alternar entre heróis
    function switchHero(heroId) {
        // Remover todas as classes ativas
        heroContents.forEach(content => content.classList.remove('active'));
        heroTitles.forEach(title => title.classList.remove('active'));
        
        // Adicionar classe ativa apenas no selecionado
        document.getElementById(heroId).classList.add('active');
        document.getElementById(`${heroId}-content`).classList.add('active');
    }
    
    // Adicionar eventos de clique
    heroTitles.forEach(title => {
        title.addEventListener('click', function() {
            switchHero(this.id);
        });
    });
    
    // Inicializar
    showDefaultHero();
});