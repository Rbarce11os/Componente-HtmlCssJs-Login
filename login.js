// Seleciona o campo de senha e o ícone de olho
const passwordInput = document.getElementById('password');
const passwordIcon = document.querySelector('.password-icon');

// Caractere usado para o placeholder (pode ser alterado)
const placeholderChar = '\u2022'; // Unicode para •

// Função para gerar o placeholder dinamicamente
function generatePlaceholder(length) {
    return placeholderChar.repeat(length);
}

// Define o placeholder inicial com 10 pontos (pode ser ajustado)
const placeholderLength = 10;
passwordInput.placeholder = generatePlaceholder(placeholderLength);

// Adiciona um evento de clique ao ícone de olho
passwordIcon.addEventListener('click', () => {
    // Verifica se o tipo do campo de senha é "password"
    if (passwordInput.type === 'password') {
        // Altera o tipo do campo de senha para "text"
        passwordInput.type = 'text';
        // Define o atributo 'data-icon' do ícone para 'open'
        passwordIcon.setAttribute('data-icon', 'open');
    } else {
        // Altera o tipo do campo de senha para "password"
        passwordInput.type = 'password';
        // Define o atributo 'data-icon' do ícone para 'closed'
        passwordIcon.setAttribute('data-icon', 'closed');
    }
});