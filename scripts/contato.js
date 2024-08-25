document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contato-form');
    var resultados = document.getElementById('resultados');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var assunto = document.getElementById('assunto').value;
        var mensagem = document.getElementById('mensagem').value;

        resultados.innerHTML = '<h3>Dados Enviados:</h3>' +
            '<p><strong>Nome:</strong> ' + nome + '</p>' +
            '<p><strong>Email:</strong> ' + email + '</p>' +
            '<p><strong>Assunto:</strong> ' + assunto + '</p>' +
            '<p><strong>Mensagem:</strong> ' + mensagem + '</p>';

        form.reset();
    });
});