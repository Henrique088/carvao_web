
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('productionChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Produção (kg)',
          data: [850, 1000, 950, 1200, 1100, 1300, 1250],
          borderColor: 'rgb(75, 192, 192)'
        }]
      }
    });
  });