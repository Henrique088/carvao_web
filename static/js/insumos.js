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