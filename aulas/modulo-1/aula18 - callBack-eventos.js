// CALLBACK EVENTOS
// Arquivo HTML

// Seleciona o button
btn = document.getElementById("callback")

// Função que trata o evento
function btnClick() {
    console.log('CallBack - Evento')
    alert('CallBack - Envetos')
}

// Funcao CallBack
btn.addEventListener("click",btnClick)