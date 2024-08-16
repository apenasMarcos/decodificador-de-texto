document.addEventListener('DOMContentLoaded', () => {
    const btnToggleTheme = document.getElementById('btnToggleTheme');
    const body = document.body;

    // Verifica se o tema escuro está ativado no armazenamento local
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    btnToggleTheme.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
