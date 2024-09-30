// Classe que representa um usuário
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// Classe responsável pela autenticação
class Auth {
    constructor() {
        this.users = [];  // Simulando o banco de dados
    }

    // Cadastrar um novo usuário
    registerUser(name, email, password) {
        if (this.isEmailRegistered(email)) {
            this.showError('registerError', 'E-mail já cadastrado!');
            return false;
        }
        const newUser = new User(name, email, password);
        localStorage.setItem('user',newUser );
        this.users.push(newUser);
        this.showError('registerError', 'Cadastro realizado com sucesso!', 'success');
        return true;
    }

    // Fazer login do usuário
    loginUser(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            // Armazenar o e-mail do usuário logado no localStorage
            localStorage.setItem('loggedUser', email);
            window.location.href = 'main.html';  // Redireciona para a página principal
        } else {
            this.showError('loginError', 'Usuário ou senha inválidos.');
        }
    }

    // Verificar se o e-mail já está registrado
    isEmailRegistered(email) {
        return this.users.some(user => user.email === email);
    }

    // Validar se as senhas coincidem
    validatePassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Exibir mensagem de erro ou sucesso
    showError(elementId, message, type = 'error') {
        const element = document.getElementById(elementId);
        element.innerText = message;
        if (type === 'success') {
            element.classList.remove('text-danger');
            element.classList.add('text-success');
        } else {
            element.classList.remove('text-success');
            element.classList.add('text-danger');
        }
    }

   // Limpar mensagens de erro
    clearErrorMessages() {
        this.showError('loginError', '');
        this.showError('registerError', '');
        this.showError('loginSuccess', '');
    }
    
    // Limpar campos de um formulário
     clearForm(formId) {
        document.getElementById(formId).reset();
    }
}

// Instanciando a classe Auth para gerenciar usuários
const auth = new Auth();

// Manipular o evento de clique no botão de cadastro
document.getElementById('registerBtn').addEventListener('click', () => {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    auth.clearErrorMessages(); // Limpa as mensagens de erro anteriores

    if (!name || !email || !password || !confirmPassword) {
        auth.showError('registerError', 'Por favor, preencha todos os campos.');
        return;
    }

    if (!auth.validatePassword(password, confirmPassword)) {
        auth.showError('registerError', 'As senhas não coincidem.');
        return;
    }

    if (auth.registerUser(name, email, password)) {
        // Cadastro realizado com sucesso, fecha o modal e limpa os campos
        const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        registerModal.hide(); // Fechar o modal

        auth.clearForm('registerForm'); // Limpar os campos do formulário

        // Mostrar mensagem de sucesso na tela de login e limpar campos
        auth.showError('loginSuccess', 'Cadastro realizado com sucesso! Por favor, faça login.', 'success');
    }
});

// Manipular o evento de clique no botão de login
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    auth.clearErrorMessages(); // Limpa as mensagens de erro anteriores

    if (!email || !password) {
        auth.showError('loginError', 'Por favor, preencha todos os campos.');
        return;
    }

    auth.loginUser(email, password);
});
