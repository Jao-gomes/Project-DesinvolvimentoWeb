
const btnEnviar = document.getElementById('btnEnviar');

if (btnEnviar) {
    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault();

    const formData = new FormData(document.querySelector('.form-contato'));
    const dados = Object.fromEntries(formData);


    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    const msgFeedback = document.getElementById('msgFeedback');

    // Limpa mensagem anterior
    msgFeedback.className = 'msg-feedback';
    msgFeedback.style.display = 'none';
    msgFeedback.textContent = '';

    // Valida nome
    if (!dados.name || dados.name.trim() === '') {
        msgFeedback.textContent = 'Por favor, preencha seu nome.';
        msgFeedback.classList.add('erro');
        msgFeedback.style.display = 'block';
        return;
    }

    // Valida email
    if (!dados.email || dados.email.trim() === '') {
        msgFeedback.textContent = 'O email é obrigatório.';
        msgFeedback.classList.add('erro');
        msgFeedback.style.display = 'block';
        return;
    }

    if (!emailRegex.test(dados.email)) {
        msgFeedback.textContent = 'Email inválido. Verifique e tente novamente.';
        msgFeedback.classList.add('erro');
        msgFeedback.style.display = 'block';
        return;
    }

    // Valida mensagem
    if (!dados.message || dados.message.trim() === '') {
        msgFeedback.textContent = 'Escreva uma mensagem antes de enviar.';
        msgFeedback.classList.add('erro');
        msgFeedback.style.display = 'block';
        return;
    }

    // Tudo certo
    msgFeedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    msgFeedback.classList.add('sucesso');
    msgFeedback.style.display = 'block';

    // Limpa os campos
    document.querySelectorAll('.form-contato input, .form-contato textarea').forEach(function(campo) {
        campo.value = '';
    });
    });
}

// Menu hamburguer (mobile)
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menuPrincipal');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('aberto');
    });
}