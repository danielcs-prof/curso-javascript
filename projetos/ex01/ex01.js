// Variáveis para manipulação dos elementos HTML
const form = document.getElementById('userForm');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

// Função que será executada ao submeter o formulário (função anônima)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    
    // Captura os valores do formulário
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userAge = parseInt(document.getElementById('age').value);
    let userGender = document.getElementById('gender').value;

    // Validação dos campos
    if (validateForm(userName, userEmail, userAge)) {
        // Adiciona usuário à tabela
        addUserToTable(userName, userEmail, userAge, userGender);
        // Limpa os campos do formulário
        clearFormFields();
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
});

// Função para validar o formulário (função com parâmetros)
function validateForm(name, email, age) {
    return name.trim() !== '' && email.trim() !== '' && age > 0;
}

// Função para adicionar usuário à tabela (função com parâmetros)
function addUserToTable(name, email, age, gender) {
    // Criar uma nova linha na tabela
    let newRow = userTable.insertRow();
    
    // Adicionar as células da linha
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = age;
    newRow.insertCell(3).textContent = gender;
}

// Função para limpar os campos do formulário (função sem parâmetros)
function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = 'Masculino';
}

// Arrow Function para manipular a cor do botão após a submissão do formulário
form.addEventListener('submit', () => {
    document.querySelector('button[type="submit"]').style.backgroundColor = '#28a745';
});
