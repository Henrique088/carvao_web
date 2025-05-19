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



let fornos = [];

function abrirModal(index = -1) {
  document.getElementById('modalFornos').style.display = 'block';
  document.getElementById('editIndex').value = -1;

  if (index >= 0) {
    // Editando
    const forno = fornos[index];
    document.getElementById('modalTitulo').textContent = 'Editar Forno';
    document.getElementById('editIndex').value = index;
    document.getElementById('nome').value = forno.nome;
    document.getElementById('temperatura').value = forno.temperatura;
    document.getElementById('status').value = forno.status;
  } else {
    // Novo
    document.getElementById('modalTitulo').innerHTML = '<i class="fas fa-fire"></i> Novo Forno';
    document.getElementById('formForno').reset();
    
  }
}

function fecharModal() {
  document.getElementById('modalFornos').style.display = 'none';
}

// Fecha clicando fora do modal
window.onclick = function (event) {
  const modal = document.getElementById('modalFornos');
  if (event.target === modal) fecharModal();
}

document.getElementById('formForno').addEventListener('submit', function (e) {
  e.preventDefault();

  const index = parseInt(document.getElementById('editIndex').value);
  const nome = document.getElementById('nome').value;
  const temperatura = document.getElementById('temperatura').value;
  const status = document.getElementById('status').value;

  const forno = { nome, temperatura, status };

  if (index >= 0) {
    // Editar
    fornos[index] = forno;
  } else {
    // Adicionar
    fornos.push(forno);
  }

  renderizarFornos();
  fecharModal();
});

function renderizarFornos() {
  const lista = document.getElementById('listaFornos');
  lista.innerHTML = '';

  fornos.forEach((forno, index) => {
    const item = document.createElement('div');
    item.className = 'furnace-item';

    item.innerHTML = `
      <span class="furnace-id">${forno.nome}</span>
      <div class="furnace-status">
        <span class="temp">${forno.temperatura}°C</span>
        <span class="status ${forno.status.toLowerCase()}">${forno.status}</span>
      </div>
      <div class="furnace-actions">
        <button onclick="abrirModal(${index})" title="Editar"><i class="fas fa-edit"></i></button>
      </div>
    `;

    lista.appendChild(item);
  });
}
