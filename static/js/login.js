document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        
        const email = document.getElementById('email').value;
        const nome = document.getElementById('nome').value;
        
        if(!email || !nome) {
            e.preventDefault();
            showError('Preencha todos os campos');
        }
    });
    
    function showError(message) {
        // Remove erros anteriores
        const oldError = document.querySelector('.error-message');
        if(oldError) oldError.remove();
        
        // Cria novo elemento de erro
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        // Insere antes do botão
        const submitButton = document.querySelector('.btn-login');
        loginForm.insertBefore(errorElement, submitButton);
        
        // Adiciona classe de erro aos campos
        document.getElementById('nome').classList.add('has-error');
        document.getElementById('nome').classList.add('has-error');
        
        // Remove a classe após interação
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('has-error');
                const error = document.querySelector('.error-message');
                if(error) error.remove();
            });
        });
    }
});