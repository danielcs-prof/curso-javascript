// main.js - Arquivo para lógica de logout e interações na página principal

// Função para gerenciar o logout do usuário
document.addEventListener('DOMContentLoaded', function () {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
        document.getElementById('loggedUserEmail').innerText = loggedUser;
    } else {
        // Se não houver usuário logado, redireciona para a página de login
        window.location.href = 'index.html';
    }

    // Implementação do logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('loggedUser'); // Remove o usuário logado do localStorage
        window.location.href = 'index.html'; // Redireciona para a página de login
    });
});