document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de consumo
    const ctx = document.getElementById('consumoChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Consumo de Lenha (m³)',
                data: [120, 150, 135, 160, 145, 170],
                borderColor: '#27ae60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Botão para adicionar lenha
    document.getElementById('adicionarLenha').addEventListener('click', function() {
        // Lógica para adicionar matéria-prima
        console.log('Adicionar lenha ao estoque');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modalInsumo = document.getElementById('modalCadastroInsumo');
    const closeInsumo = document.getElementById('closeCadastroInsumo');
    const formInsumo = document.getElementById('formInsumo');
    const btnAbrirModalInsumo = document.getElementById('btnAbrirModalInsumo');
    const listaInsumos = document.getElementById('listaInsumos');

    const insumos = [];

    btnAbrirModalInsumo.addEventListener('click', () => {
        modalInsumo.style.display = 'flex';
    });

    closeInsumo.addEventListener('click', () => {
        modalInsumo.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalInsumo) {
            modalInsumo.style.display = 'none';
        }
    });

    formInsumo.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = formInsumo.nomeInsumo.value.trim();
        const quantidade = formInsumo.quantidade.value;
        const unidade = formInsumo.unidade.value;

        const novoInsumo = { nome, quantidade, unidade };
        insumos.push(novoInsumo);

        renderizarInsumos();

        formInsumo.reset();
        modalInsumo.style.display = 'none';
    });

    function renderizarInsumos() {
        listaInsumos.innerHTML = '';

        if (insumos.length === 0) {
            listaInsumos.innerHTML = '<p style="color: #888;">Nenhum insumo cadastrado.</p>';
            return;
        }

        insumos.forEach((insumo) => {
            const card = document.createElement('div');
            card.className = 'insumo-card';

            card.innerHTML = `
                <div class="item-info">
                            
                            <span>${insumo.nome}</span>
                        </div>
                        <div class="item-status in-stock">
                            <span>${insumo.quantidade} ${insumo.unidade}</span>
                        </div>
            `;

            listaInsumos.appendChild(card);
        });
    }
});
