# 🎮 Portfólio Gamer - Jhon

Um portfólio moderno e interativo com design inspirado em games, cores neon vibrantes e animações fluidas.

## 🚀 Características

- **Design Game Theme**: Interface futurista com temática de videogame
- **Cores Neon**: Paleta moderna com azul neon (#00d9ff), rosa neon (#ff006e) e verde neon (#00ff41)
- **Animações Dinâmicas**:
  - Efeito Glitch no título
  - Typewriter effect no subtítulo
  - Animações de entrada para elementos
  - Parallax effects
  - Hover effects interativos
  - Health bar animada

- **Cursor Customizado**: Cursor glowing que segue o mouse
- **Responsivo**: Totalmente adaptável para mobile, tablet e desktop
- **Interatividades**:
  - Navegação suave
  - Formulário de contato
  - Contador de estatísticas animado
  - Easter egg (Konami Code)
  - Menu hambúrguer para mobile

- **Otimizações**:
  - Código limpo e organizado
  - Performance otimizada com RAF (RequestAnimationFrame)
  - Efeitos CRT simulados
  - Stars background animado

## 📁 Estrutura do Projeto

```
Site Jhon/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos e animações CSS
├── script.js           # Lógica JavaScript e interatividades
├── Imagens/
│   └── profile01.jfif  # Foto de perfil
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Gradientes
  - Animações CSS
  - Grid Layout
  - Flexbox
  - Box-shadow e text-shadow para efeito neon
  - Media queries para responsividade

- **JavaScript**:
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API
  - LocalStorage
  - RequestAnimationFrame

## 📋 Como Usar

1. **Clonar/Baixar os arquivos**
2. **Abrir o arquivo `index.html` no navegador**
3. **Personalizar o conteúdo**:
   - Editar informações pessoais em cada seção
   - Adicionar seus projetos na seção Projects
   - Atualizar habilidades na seção Skills
   - Adicionar links de redes sociais

## 🎨 Personalização

### Cores Neon
Para alterar as cores, edite as variáveis CSS no `style.css`:

```css
:root {
    --primary: #00d9ff;      /* Azul Neon */
    --secondary: #ff006e;    /* Rosa Neon */
    --accent: #00ff41;       /* Verde Neon */
    --dark-bg: #0a0e27;
    --dark-bg-2: #16213e;
    --text-light: #e0e0e0;
    --text-secondary: #a0a0a0;
}
```

### Adicionar Projetos
Adicione novos cards na seção Projects copiando a estrutura:

```html
<div class="project-card">
    <div class="project-image">
        <div class="pixel-art">■■■■■</div>
        <span class="project-level">LEVEL XX</span>
    </div>
    <div class="project-info">
        <h3>Seu Projeto</h3>
        <p>Descrição do projeto</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

### Adicionar GIFs
Para adicionar GIFs aos seus projetos, crie uma pasta `assets/` e referencie:

```html
<img src="assets/seu-gif.gif" alt="Descrição">
```

## 🎮 Easter Egg

Digite o **Konami Code** (↑↑↓↓←→←→BA) para ativar um efeito especial!

## 📱 Responsividade

- **Desktop**: Layout completo com navegação horizontal
- **Tablet**: Ajustes de grid e tamanho de fonte
- **Mobile**: Menu hambúrguer, layout single column, fonte reduzida

## 🔧 Funcionalidades JavaScript

- **Cursor Dinâmico**: Segue o mouse com efeito glowing
- **Navegação Ativa**: Indica seção atual ao scrollar
- **Contador Animado**: Anima números ao entrar na seção
- **Formulário**: Validação e feedback visual
- **Efeitos ao Scroll**: Parallax, animações de entrada
- **LocalStorage**: Salva preferência de tema

## 🚀 Deploy

Para fazer deploy do seu portfólio:

1. **Vercel**: Conecte seu repositório Git
2. **Netlify**: Drag and drop dos arquivos
3. **GitHub Pages**: Envie para um repositório público
4. **Seu servidor**: Faça upload via FTP

## 💡 Dicas

- Adicione seus projetos reais com links funcionais
- Incluia screenshots/GIFs de seus projetos
- Atualize a foto de perfil na pasta `Imagens/`
- Customize as cores conforme sua marca pessoal
- Adicione mais seções conforme necessário
- Implemente formulário backend para contato real

## 📞 Contato

- LinkedIn: [Adicione seu link]
- GitHub: [Adicione seu link]
- Email: [Adicione seu email]
- Discord: [Adicione seu perfil]

## 📝 Licença

Este projeto é livre para ser usado e modificado. Créditos são apreciados! 🎮

---

**Desenvolvido com ❤️ e muito código**

*Última atualização: Janeiro 2025*
