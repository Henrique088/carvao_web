document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const parent = link.parentElement;
        const icon = link.querySelector('.submenu-icon');

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
