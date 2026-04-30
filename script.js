/* ========================================
   PROJETO RUMOS - JAVASCRIPT
   Funcionalidades: Menu mobile, formulário, animações
   ======================================== */

// ========================================
// 1. MENU MOBILE - Abre e fecha o menu
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');

    // Abre/fecha o menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('ativo');
        });
    });
});

// ========================================
// 2. FORMULÁRIO DE CONTATO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContato');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Pega os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples
        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Validação de email
        if (!validarEmail(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }

        // Cria um link mailto (você pode substituir por uma API real depois)
        const assunto = `Mensagem de ${nome} - Projeto Rumos`;
        const corpo = `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`;
        const mailtoLink = `mailto:expedicaorumos@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        // Abre o cliente de email padrão
        window.location.href = mailtoLink;

        // Mostra mensagem de sucesso
        alert('Obrigado! Sua mensagem será enviada para nosso email.');

        // Limpa o formulário
        formulario.reset();
    });
});

// ========================================
// 3. VALIDAÇÃO DE EMAIL
// ========================================
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// 4. ANIMAÇÃO DE SCROLL - Elementos aparecem ao rolar
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.card, .nivel, .stat, .marco');

    // Função para verificar se elemento está visível
    function verificarVisibilidade() {
        elementos.forEach(elemento => {
            const posicao = elemento.getBoundingClientRect();
            const estaVisivel = posicao.top < window.innerHeight * 0.8;

            if (estaVisivel) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    }

    // Define estilo inicial (invisível)
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Verifica ao fazer scroll
    window.addEventListener('scroll', verificarVisibilidade);

    // Verifica na primeira carga
    verificarVisibilidade();
});

// ========================================
// 5. CONTADOR DE NÚMEROS - Anima números ao chegar na seção
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat-number');
    let jaAnimou = false;

    function animarNumeros() {
        const secaoImpacto = document.querySelector('.impacto');
        const posicao = secaoImpacto.getBoundingClientRect();

        // Se chegou na seção e ainda não animou
        if (posicao.top < window.innerHeight && !jaAnimou) {
            jaAnimou = true;

            stats.forEach(stat => {
                const numeroFinal = stat.textContent;
                const numero = parseInt(numeroFinal);
                let numeroAtual = 0;

                // Extrai apenas o número (remove +)
                const apenasNumero = parseInt(numeroFinal.replace(/\D/g, ''));
                const incremento = Math.ceil(apenasNumero / 50);

                const intervalo = setInterval(() => {
                    numeroAtual += incremento;
                    if (numeroAtual >= apenasNumero) {
                        stat.textContent = numeroFinal;
                        clearInterval(intervalo);
                    } else {
                        stat.textContent = numeroAtual + '+';
                    }
                }, 30);
            });
        }
    }

    window.addEventListener('scroll', animarNumeros);
});

// ========================================
// 6. SUAVIZAR SCROLL PARA LINKS INTERNOS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignora links que são apenas "#"
            if (href !== '#') {
                e.preventDefault();

                const alvo = document.querySelector(href);
                if (alvo) {
                    alvo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ========================================
// 7. EFEITO HOVER NOS CARDS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .nivel, .stat');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ========================================
// 8. FUNÇÃO AUXILIAR - Scroll para elemento
// ========================================
function scrollPara(elementoId) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================================
// 9. LOG DE INICIALIZAÇÃO
// ========================================
console.log('✓ Projeto Rumos - Site carregado com sucesso!');
console.log('Versão: 1.0');
console.log('Desenvolvido com ❤️ para saúde humanitária');
