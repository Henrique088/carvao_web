document.addEventListener('DOMContentLoaded', function() {
    // Validação de senha em tempo real
    const senhaInput = document.getElementById('senha');
    const strengthBars = document.querySelectorAll('.strength-bar');
    
    senhaInput.addEventListener('input', function() {
        const strength = calculatePasswordStrength(this.value);
        updateStrengthIndicator(strength);
    });
    
    // Confirmar senha
    const confirmarSenha = document.getElementById('confirmar_senha');
    confirmarSenha.addEventListener('input', function() {
        if(this.value !== senhaInput.value) {
            this.setCustomValidity("As senhas não coincidem");
        } else {
            this.setCustomValidity("");
        }
    });
    
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        // Critérios de força
        if(password.length >= 8) strength++;
        if(/[A-Z]/.test(password)) strength++;
        if(/[0-9]/.test(password)) strength++;
        if(/[^A-Za-z0-9]/.test(password)) strength++;
        
        return Math.min(strength, 3); // Máximo de 3 barras
    }
    
    function updateStrengthIndicator(strength) {
        strengthBars.forEach((bar, index) => {
            if(index < strength) {
                bar.style.backgroundColor = 
                    strength === 1 ? '#e74c3c' : 
                    strength === 2 ? '#f39c12' : '#2ecc71';
            } else {
                bar.style.backgroundColor = '#ecf0f1';
            }
        });
    }
});