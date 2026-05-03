document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================
  // MENU MOBILE (Mantido para funcionar no celular)
  // =========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // =========================================
  // INTEGRAÇÃO FORMULÁRIO -> GOOGLE SHEETS
  // =========================================
  const form = document.getElementById('form-contato');
  
  // COLE A SUA URL DO GOOGLE APPS SCRIPT AQUI DENTRO DAS ASPAS
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx9X4E9w4PbMLl5e8a_MnmN_ZaB7Va3mDAUPTjUBELVkVV9aIPzBincxyXPk4p7vKlM/exec';

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // Impede a página de recarregar e perder os dados
      
      const btn = form.querySelector('.btn-enviar');
      const textoOriginal = btn.textContent;
      
      // Muda o texto do botão para dar feedback visual de carregamento
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // Faz o envio silencioso (fetch) dos dados para a planilha
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
          form.reset(); // Limpa os campos do formulário
          btn.textContent = textoOriginal;
          btn.disabled = false;
        })
        .catch(error => {
          alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
          console.error('Erro!', error.message);
          btn.textContent = textoOriginal;
          btn.disabled = false;
        });
    });
  }
});