document.addEventListener('DOMContentLoaded', function() {
    // Controle de data
    const dataInput = document.getElementById('data-turno');
    dataInput.addEventListener('change', function() {
        console.log('Filtrar turnos por data:', this.value);
        // Implementar filtro AJAX aqui
    });

    // Botão de novo turno
    document.getElementById('novoTurno').addEventListener('click', function() {
        // Implementar modal/formulário para novo turno
        console.log('Abrir formulário para novo turno');
    });

    // Botão de filtro de operadores
    document.getElementById('filtroOperadores').addEventListener('click', function() {
        // Implementar filtros avançados
        console.log('Abrir painel de filtros');
    });

    // Botão de exportar relatório
    document.getElementById('relatorioAtividades').addEventListener('click', function() {
        // Implementar exportação
        console.log('Gerar relatório de atividades');
    });
});