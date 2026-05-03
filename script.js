
  document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================
  // MENU MOBILE
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
      e.preventDefault(); 
      
      const btn = form.querySelector('.btn-enviar');
      const textoOriginal = btn.textContent;
      
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // A MÁGICA ESTÁ AQUI: mode: 'no-cors'
      fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form),
        mode: 'no-cors' 
      })
      .then(response => {
        // Com 'no-cors', não conseguimos ler a resposta exata do Google, 
        // mas se chegou no .then, o envio foi feito!
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        form.reset(); 
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