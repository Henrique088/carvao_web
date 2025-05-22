document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de produção
    const ctx = document.getElementById('productionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Produção Mensal (kg)',
                data: [5200, 4850, 5300, 5100, 5500, 5800],
                backgroundColor: 'rgba(243, 156, 18, 0.7)'
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

    // Controle de novo ciclo
    document.getElementById('novoCiclo').addEventListener('click', function() {
        // Lógica para iniciar novo ciclo
        console.log('Novo ciclo iniciado');
    });
});