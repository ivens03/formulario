const mode = document.getElementById('moon');
const themeStylesheet = document.getElementById('colorCss');

mode.addEventListener('click', () => {
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        // Alterar meu CSS
        themeStylesheet.href = '../css/dark.css';
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');

        // Alterar meu CSS
        themeStylesheet.href = '../css/global.css';
    }
});
