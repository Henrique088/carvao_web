document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation(); // evita conflito com o clique do <a>

        const parent = button.closest('li');
        const icon = button.querySelector('.submenu-icon');

        parent.classList.toggle('open');

        if (parent.classList.contains('open')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});
