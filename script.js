// Inicialize o EmailJS com seu ID de usuário
emailjs.init('YOUR_EMAILJS_USER_ID'); // Substitua com seu User ID do EmailJS

document.getElementById('email-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os dados do formulário
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Converte os dados do formulário em um objeto
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Envia os dados usando emailjs.send
    emailjs.send('service_xxvfbvr', 'template_b4yxr59', data)
        .then(function(response) {
            alert('Formulário enviado por e-mail com sucesso!');
        }, function(error) {
            alert('Erro ao enviar o formulário por e-mail: ' + JSON.stringify(error));
        });
});
