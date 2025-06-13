<<<<<<< HEAD
const menuResponsive = document.querySelector('.menu-responsive');

menuResponsive.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuResponsive.classList.toggle('change');

    if (menuResponsive.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

document.querySelectorAll('.nav-responsive a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-responsive').style.display = 'none';
        menuResponsive.classList.remove('change');
    });
});


// Toggle de Idioma

const toggleButton = document.getElementById('toggle-lang');
let currentLang = 'pt';

const translations = {
    pt: {
        menu: 'Menu',
        about: 'Sobre Mim',
        contact: 'Entre em Contato',
        greeting: 'SAUDAÇÕES! ME CHAMO',
        download: 'Faça download do meu Currículo',
        aboutTitle: 'SOBRE MIM',
        aboutText: `Olá! Sou um entusiasta da tecnologia em formação como desenvolvedor FullStack, atualmente focado no desenvolvimento de aplicações web com HTML, CSS, JavaScript, React.js e Node.js, além de aprimorar minhas habilidades em computação em nuvem com AWS.

        Sou certificado como AWS Certified Cloud Practitioner (CLF-C02), com conhecimento sólido nos principais serviços da AWS, incluindo EC2, S3, Lambda, RDS, IAM e VPC, além de boas práticas de arquitetura cloud e segurança.

        Gosto de criar soluções eficientes, escaláveis e alinhadas com as melhores práticas de desenvolvimento, sempre buscando aprendizado contínuo e evolução técnica. Estou aberto a colaborar em projetos desafiadores que me ajudem a crescer profissionalmente e que agreguem valor para as equipes e para os usuários.

        Se quiser, fique à vontade para explorar meus projetos e entrar em contato!`,
        skills: 'Habilidades',
        skillsText: 'HTML, CSS, JavaScript, MySQL, NodeJs, TypeScript (Básico) e ReactJs (Básico)',
        interests: 'Interesses',
        interestsText: 'Desenvolvimento Web, Cloud Computing e Infraestrutura de TI.',
        projects: 'Projetos',
        projectsText: 'Segue o link do meu GitHub pessoal acima. Caso não funcione <a href="https://github.com/Isaacfalkoskki/" target="_blank">clique aqui.</a>',
        linkedinBtn: 'Saiba mais no Meu Linkedin',
        contactTitle: 'FALE COMIGO!',
        namePlaceholder: 'Digite seu nome completo',
        emailPlaceholder: 'Digite seu E-mail',
        numberPlaceholder: 'Digite seu Número',
        subjectPlaceholder: 'Assunto',
        messagePlaceholder: 'Escreva aqui sua Mensagem',
        sendBtn: 'ENVIAR',
        footer: 'Todos os Direitos Reservados.'
    },
    en: {
        menu: 'Menu',
        about: 'About Me',
        contact: 'Contact Me',
        greeting: 'HELLO! MY NAME IS',
        download: 'Download My Resume',
        aboutTitle: 'ABOUT ME',
        aboutText: `Hello! I am a technology enthusiast training as a FullStack developer, currently focused on developing web applications using HTML, CSS, JavaScript, React.js, and Node.js, as well as improving my cloud computing skills with AWS.

        I am certified as an AWS Certified Cloud Practitioner (CLF-C02), with solid knowledge of key AWS services, including EC2, S3, Lambda, RDS, IAM, and VPC, as well as cloud architecture best practices and security.

        I enjoy creating efficient, scalable solutions aligned with development best practices, always seeking continuous learning and technical growth. I am open to collaborating on challenging projects that help me grow professionally and add value to teams and users.

        Feel free to explore my projects and get in touch!`,
        skills: 'Skills',
        skillsText: 'HTML, CSS, JavaScript, MySQL, NodeJs, TypeScript (Basic) and ReactJs (Basic)',
        interests: 'Interests',
        interestsText: 'Web Development, Cloud Computing, and IT Infrastructure.',
        projects: 'Projects',
        projectsText: 'Follow the link to my personal GitHub above. If it does not work <a href="https://github.com/Isaacfalkoskki/" target="_blank">click here.</a>',
        linkedinBtn: 'Learn more on My Linkedin',
        contactTitle: 'CONTACT ME!',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email',
        numberPlaceholder: 'Enter your phone number',
        subjectPlaceholder: 'Subject',
        messagePlaceholder: 'Write your message here',
        sendBtn: 'SEND',
        footer: 'All Rights Reserved.'
    }
};

toggleButton.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslation();
});

function applyTranslation() {
    const t = translations[currentLang];

    document.querySelectorAll('.nav a')[0].textContent = t.menu;
    document.querySelectorAll('.nav a')[1].textContent = t.about;
    document.querySelectorAll('.nav a')[2].textContent = t.contact;

    document.querySelectorAll('.nav-responsive a')[0].textContent = t.menu;
    document.querySelectorAll('.nav-responsive a')[1].textContent = t.about;
    document.querySelectorAll('.nav-responsive a')[2].textContent = t.contact;

    document.querySelector('.home-content h3').textContent = t.greeting;
    document.querySelector('.home-content a.btn').textContent = t.download;

    document.querySelector('.about-content h3').textContent = t.aboutTitle;
    document.querySelector('.about-content p').textContent = t.aboutText;

    document.querySelectorAll('.about-content li')[0].innerHTML = `<b><i>${t.skills}:</i></b> ${t.skillsText}`;
    document.querySelectorAll('.about-content li')[1].innerHTML = `<b><i>${t.interests}:</i></b> ${t.interestsText}`;
    document.querySelectorAll('.about-content li')[2].innerHTML = `<b><i>${t.projects}:</i></b> ${t.projectsText}`;

    document.querySelector('.about-content a.btn').textContent = t.linkedinBtn;

    document.querySelector('.contact h2').innerHTML = `${t.contactTitle}`;

    document.querySelectorAll('.input-box input')[0].placeholder = t.namePlaceholder;
    document.querySelectorAll('.input-box input')[1].placeholder = t.emailPlaceholder;
    document.querySelectorAll('.input-box input')[2].placeholder = t.numberPlaceholder;
    document.querySelectorAll('.input-box input')[3].placeholder = t.subjectPlaceholder;

    document.querySelector('textarea').placeholder = t.messagePlaceholder;

    document.querySelector('.contact a.btn').textContent = t.sendBtn;

    document.querySelector('footer p').innerHTML = `&copy; ${t.footer}`;
}
=======


const menuResponsive = document.querySelector('.menu-responsive');
menuResponsive.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuResponsive.classList.toggle('change');

    if (menuResponsive.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

}
>>>>>>> bb24d61dd4134e964feba68684b8ed5905dff7c2
