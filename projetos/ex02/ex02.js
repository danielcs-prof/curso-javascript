// Classe User para representar um usuário
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// Classe UserManager para gerenciar os usuários e a lógica do sistema
class UserManager {
    constructor() {
        this.users = []; // Array para armazenar os usuários cadastrados

        // Variáveis de escopo de bloco para manipulação de elementos HTML
        this.btnLogin = document.getElementById('btnLogin');
        this.btnRegister = document.getElementById('btnRegister');
        this.btnSubmitRegister = document.getElementById('btnSubmitRegister');

        // Modal de cadastro usando Bootstrap
        this.registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

        // Adicionando eventos de clique aos botões
        this.btnLogin.addEventListener('click', () => this.loginUser());
        this.btnRegister.addEventListener('click', () => this.showRegisterModal());
        this.btnSubmitRegister.addEventListener('click', () => this.submitRegisterForm());
    }

    // Função sem parâmetros: Exibe o modal de cadastro
    showRegisterModal() {
        this.registerModal.show();
    }

    // Função para capturar e validar os dados do formulário de cadastro (função com parâmetros)
    submitRegisterForm() {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Validação simples com arrow function
        const isValid = (field) => field.trim() !== '';

        if (isValid(name) && isValid(email) && isValid(password)) {
            // Verifica se o email já está cadastrado
            if (this.users.some(user => user.email === email)) {
                alert('E-mail já cadastrado. Por favor, utilize outro e-mail.');
                return;
            }

            // Cria um novo usuário e adiciona ao "banco de dados"
            const newUser = new User(name, email, password);
            this.users.push(newUser);
            console.log(`Usuário cadastrado: Nome: ${name}, Email: ${email}`);
            alert('Usuário cadastrado com sucesso!');

            this.clearFormFields('register'); // Limpa os campos do formulário
            this.registerModal.hide(); // Fecha o modal após cadastro
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    // Função para capturar e validar os dados do formulário de login (função sem parâmetros)
    loginUser() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Verifica se o email e a senha estão corretos
        const user = this.users.find(user => user.email === email && user.password === password);

        if (user) {
            console.log(`Login efetuado: Email: ${email}`);
            alert(`Bem-vindo, ${user.name}! Login efetuado com sucesso!`);
            this.redirectToMainPage(); // Redireciona para a página principal
        } else {
            alert('E-mail ou senha incorretos.');
        }
    }

    // Função para limpar os campos dos formulários (função com parâmetros)
    clearFormFields(formType) {
        if (formType === 'register') {
            document.getElementById('registerName').value = '';
            document.getElementById('registerEmail').value = '';
            document.getElementById('registerPassword').value = '';
        } else {
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        }
    }

    // Função para redirecionar à página principal (função sem parâmetros)
    redirectToMainPage() {
        window.location.href = "main.html"; // Redireciona para a página principal
    }
}

// Instancia a classe UserManager para inicializar a aplicação
const userManager = new UserManager();
