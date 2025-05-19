document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de histórico de uso
    const ctx = document.getElementById('usageChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Horas de Uso',
                data: [120, 135, 140, 130, 145, 150],
                backgroundColor: 'rgba(231, 76, 60, 0.7)'
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
});