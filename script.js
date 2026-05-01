document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Adiciona o evento de clique no menu hambúrguer
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});