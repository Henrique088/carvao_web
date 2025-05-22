document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de eficiência
    const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
    new Chart(efficiencyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Bateria A', 'Bateria B', 'Bateria C'],
            datasets: [{
                data: [78, 82, 75],
                backgroundColor: [
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            cutout: '70%'
        }
    });

    // Gráfico de consumo vs. produção
    const consumoCtx = document.getElementById('consumoProducaoChart').getContext('2d');
    new Chart(consumoCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Relação Lenha/Carvão',
                data: [
                    {x: 1, y: 310},
                    {x: 1.2, y: 325},
                    {x: 0.9, y: 295},
                    // Mais pontos...
                ],
                backgroundColor: 'rgba(155, 89, 182, 0.7)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'm³ de Lenha'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'kg de Carvão'
                    }
                }
            }
        }
    });
});