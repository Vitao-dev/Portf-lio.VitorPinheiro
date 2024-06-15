// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio real do formulário

        // Captura os dados do formulário
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Exibe uma mensagem de agradecimento
        alert(`Obrigado pela mensagem, ${name}! Entraremos em contato em breve.`);

        // Limpa os campos do formulário
        contactForm.reset();
    });
});