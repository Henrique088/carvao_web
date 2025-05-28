// document.addEventListener('DOMContentLoaded', function() {
//     // Controle de data
//     const dataInput = document.getElementById('data-turno');
//     dataInput.addEventListener('change', function() {
//         console.log('Filtrar turnos por data:', this.value);
//         // Implementar filtro AJAX aqui
//     });

//     // Botão de novo turno
//     document.getElementById('novoTurno').addEventListener('click', function() {
//         // Implementar modal/formulário para novo turno
//         console.log('Abrir formulário para novo turno');
//     });

//     // Botão de filtro de operadores
//     document.getElementById('filtroOperadores').addEventListener('click', function() {
//         // Implementar filtros avançados
//         console.log('Abrir painel de filtros');
//     });

//     // Botão de exportar relatório
//     document.getElementById('relatorioAtividades').addEventListener('click', function() {
//         // Implementar exportação
//         console.log('Gerar relatório de atividades');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const btnNovoTurno = document.getElementById('novoTurno');
    const modal = document.getElementById('modalCadastroFuncionario');
    const closeBtn = document.getElementById('closeCadastroFuncionario');
    const form = document.getElementById('formFuncionario');
    const listaFuncionarios = document.getElementById('listaFuncionarios');
    const filtros = document.getElementById('filtroOperadoresContainer');
    const filtroBtn = document.getElementById('filtroOperadores');
    const menu = document.getElementById('menuFiltroTurno'); // dropdown
    const items = menu.querySelectorAll('.dropdown-item');

    const funcionarios = [];

    btnNovoTurno.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
        if (!menu.contains(e.target) && !filtroBtn.contains(e.target)) {
            menu.style.display = 'none';
        }
    });

    filtroBtn.addEventListener('click', () => {
        menu.style.display =  menu.style.display === 'block'? 'none' : 'block';
    });

    // Evento de filtro por turno
    items.forEach(item => {
        item.addEventListener('click', () => {
            const turnoSelecionado = item.getAttribute('data-turno');
            filtrar(turnoSelecionado);
            menu.style.display = 'none';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = form.nome.value.trim();
        const turno = form.turno.value;
        const fornos = form.fornos.value.trim();

        const novoFuncionario = { nome, turno, fornos };
        funcionarios.push(novoFuncionario);

        renderFuncionarios();
        form.reset();
        modal.style.display = 'none';
    });

    function renderFuncionarios() {
        listaFuncionarios.innerHTML = '';

        if (funcionarios.length === 0) {
            listaFuncionarios.innerHTML = '<p style="color: #999;">Nenhum funcionário cadastrado ainda.</p>';
            return;
        }

        funcionarios.forEach((f) => {
            const div = document.createElement('div');
            div.className = 'funcionario-item';
            div.innerHTML = `
                <div class="info">
                    <strong>${f.nome}</strong>
                    <small>Turno: ${formatarTurno(f.turno)} | Fornos: ${f.fornos}</small>
                </div>
            `;
            listaFuncionarios.appendChild(div);
        });
    }

    function filtrar(turno) {
        filtros.innerHTML = '';
        const filtrados = turno === 'todos'
            ? funcionarios
            : funcionarios.filter(f => f.turno === turno);

        if (filtrados.length === 0) {
            filtros.innerHTML = '<p style="color: #999;">Nenhum funcionário encontrado para este turno.</p>';
            return;
        }

        filtrados.forEach(f => {
            const div = document.createElement('div');
            div.className = 'operator-card';
            div.innerHTML = `
                <div class="operator-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="operator-info">
                    <span class="operator-name">${f.nome}</span>
                    <span class="operator-skills">${f.fornos}</span>
                </div>
                <div class="operator-status available"></div>
            `;
            filtros.appendChild(div);
        });
    }

    function formatarTurno(turno) {
        switch (turno) {
            case 'manha': return 'Manhã (06:00 - 14:00)';
            case 'tarde': return 'Tarde (14:00 - 22:00)';
            case 'noite': return 'Noite (22:00 - 06:00)';
            default: return '-';
        }
    }
});
