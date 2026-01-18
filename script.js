// ==========================================
// CURSOR CUSTOMIZADO
// ==========================================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 100);
});

// Efeito ao passar sobre elementos interativos
document.querySelectorAll('button, a, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.borderColor = '#00d9ff';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
});

// ==========================================
// NAVEGAÇÃO
// ==========================================

const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

// Ativar link de navegação ao rolar
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Menu hambúrguer
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ==========================================
// SCROLL SUAVE
// ==========================================

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// CONTADOR DE ESTATÍSTICAS
// ==========================================

function animateCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
}

// Ativar contador quando chegar na seção
const statsSection = document.querySelector('.game-stats');
let statsAnimated = false;

window.addEventListener('scroll', () => {
    if (statsSection && !statsAnimated) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateCounter();
            statsAnimated = true;
        }
    }
});

// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Efeito visual de sucesso
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.textContent;
    const originalColor = submitBtn.style.color;
    const originalBgColor = submitBtn.style.background;

    submitBtn.textContent = '✓ MENSAGEM ENVIADA!';
    submitBtn.style.background = '#00ff41';
    submitBtn.style.color = '#0a0e27';
    submitBtn.style.boxShadow = '0 0 30px #00ff41';

    // Limpar formulário
    contactForm.reset();

    // Restaurar botão após 3 segundos
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = originalBgColor;
        submitBtn.style.color = originalColor;
        submitBtn.style.boxShadow = '0 0 10px #00d9ff, inset 0 0 10px rgba(0, 217, 255, 0.2)';
    }, 3000);
});

// ==========================================
// EFEITOS DE DIGITAÇÃO
// ==========================================

const typingText = document.querySelector('.typing-text');
const originalText = typingText.textContent;

function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, speed);
        }
    };

    type();
}

// Animar texto ao carregar
window.addEventListener('load', () => {
    typeWriter(typingText, originalText, 50);
});

// ==========================================
// ANIMAÇÕES DE ENTRADA
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e elementos
document.querySelectorAll('.about-card, .project-card, .skill-item').forEach(el => {
    observer.observe(el);
});

// ==========================================
// SONS E EFEITOS (Opcional)
// ==========================================

// Som ao clicar em botões (se desejar adicionar)
document.querySelectorAll('.btn-glow').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Criar ondulação
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ==========================================
// PARALLAX EFFECT
// ==========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero');

    parallaxElements.forEach(el => {
        el.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    });
});

// ==========================================
// ANIMAÇÃO DE TEMA (TOGGLE)
// ==========================================

// Adicionar um botão de tema se desejar
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Restaurar tema ao carregar
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ==========================================
// DICAS E EASTER EGGS
// ==========================================

let konami = [];
const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];

document.addEventListener('keydown', (e) => {
    konami.push(e.key);
    konami.splice(-konamiCode.length - 1);

    if (konami.join(',') === konamiCode.join(',')) {
        easterEgg();
    }
});

function easterEgg() {
    console.log('🎮 KONAMI CODE ATIVADO! 🎮');
    document.body.style.filter = 'hue-rotate(360deg)';
    
    const celebrationText = document.createElement('div');
    celebrationText.textContent = '🎮 LEVEL UP! 🎮';
    celebrationText.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        color: #00ff41;
        text-shadow: 0 0 30px #00ff41;
        font-weight: bold;
        z-index: 10001;
        pointer-events: none;
        animation: float 2s ease-in-out;
    `;
    
    document.body.appendChild(celebrationText);
    
    setTimeout(() => {
        document.body.style.filter = '';
        celebrationText.remove();
    }, 2000);
}

// ==========================================
// BACKGROUND ANIMADO
// ==========================================

function createFloatingElements() {
    const container = document.body;
    const elementCount = 5;

    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: fixed;
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            background: radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent);
            border: 1px solid rgba(0, 217, 255, 0.2);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 0;
            pointer-events: none;
            animation: float ${5 + Math.random() * 5}s infinite;
        `;
        container.appendChild(element);
    }
}

createFloatingElements();

// ==========================================
// INFORMAÇÕES DO DESENVOLVEDOR
// ==========================================

console.log('%c🎮 Bem-vindo ao meu portfólio! 🎮', 'color: #00d9ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00d9ff;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript', 'color: #00ff41; font-size: 14px;');
console.log('%cDesign Game Theme com Neon Colors', 'color: #ff006e; font-size: 14px;');

// ==========================================
// VALIDAÇÃO DE FORMULÁRIO
// ==========================================

const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.style.borderColor = '#00d9ff';
        }
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'rgba(0, 217, 255, 0.25)';
        }
    });
});

// ==========================================
// CARREGAMENTO DO PÁGINA
// ==========================================

window.addEventListener('load', () => {
    console.log('✓ Portfólio carregado com sucesso!');
    
    // Adicionar classe ao body para disparar animações
    document.body.classList.add('loaded');
});

// ==========================================
// SUPORTE PARA ANIMAÇÕES CUSTOMIZADAS
// ==========================================

// Detectar quando elementos entram na viewport
const revealElements = document.querySelectorAll('section');

revealElements.forEach((element, index) => {
    element.style.opacity = '1';
    element.style.animation = `fadeInUp 0.8s ease-out forwards`;
    element.style.animationDelay = `${index * 0.1}s`;
});

// ==========================================
// MELHORIAS DE PERFORMANCE
// ==========================================

// Usar RAF para animações suaves
let ticking = false;

function updateScroll() {
    // Atualizar elementos com scroll
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
    }
});

// ==========================================
// FIM DO SCRIPT
// ==========================================
