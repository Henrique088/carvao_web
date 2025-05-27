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


  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalCiclo");
    const btnAbrir = document.getElementById("novoCiclo");
    const btnFechar = document.getElementById("fecharModalCiclo");
    const form = document.getElementById("formCiclo");
    const cycleList = document.querySelector(".cycle-list");

    btnAbrir.addEventListener("click", () => {
      modal.style.display = "block";
    });

    btnFechar.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const ciclo = document.getElementById("ciclo").value.trim();
      const descricao = document.getElementById("descricao").value.trim();
      const tempo = document.getElementById("tempo").value.trim();

      if (!ciclo) return;

      // Criação do novo item
      const novoItem = document.createElement("div");
      novoItem.classList.add("cycle-item");

      novoItem.innerHTML = `
        <div class="cycle-info">
            <span class="cycle-id">${ciclo}</span>
            <span class="cycle-status">Em andamento</span>
        </div>
        <div class="cycle-time">
            <i class="fas fa-clock"></i>
            <span>${tempo}</span>
        </div>
      `;

      // Adiciona ao topo da lista
      cycleList.append(novoItem);

      // Fecha modal e reseta
      modal.style.display = "none";
      form.reset();
    });
  });

