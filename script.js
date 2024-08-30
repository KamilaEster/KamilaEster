// Função para mostrar uma mensagem de confirmação ao enviar o formulário de contato
function confirmarEnvio() {
    alert('Sua mensagem foi enviada com sucesso! Obrigada pelo contato.');
}

// Função para destacar o link ativo no menu de navegação
function destacarLinkAtivo() {
    const links = document.querySelectorAll('nav ul li a');
    const path = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.style.textDecoration = 'underline';
            link.style.fontWeight = 'bold';
        }
    });
}

// Executa as funções assim que a página é carregada
window.onload = function() {
    destacarLinkAtivo();
};
