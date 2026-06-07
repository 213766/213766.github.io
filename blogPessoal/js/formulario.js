const mensagem = document.getElementsByName('mensagem')[0];
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    if (mensagem.value.trim() === '') {
        event.preventDefault();
        alert('Insira uma Mensagem antes de Enviar!');
    }
});