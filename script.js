// ============================================================
// TRADUÇÕES — objeto com todos os textos em 4 idiomas
// ============================================================

const TRADUCOES = {

  pt: {
    /* ——— Geral ——— */
    'page-title':        'Marcos Lázaro Romão Silveira — Portfólio',
    /* ——— Cabeçalho / nav ——— */
    'nav-iaot':          'Meu projeto IAoT',
    'nav-pesquisa':      'Pesquisa Acadêmica',
    'nav-contato':       'Contato',
    /* ——— Sobre ——— */
    'sobre-cargo':       'Engenharia Elétrica · Ciência de Dados · Machine Learning',
    'sobre-local':       'Brasil',
    'bio-p1':            'Estudante de <strong>Engenharia Elétrica</strong> com foco em Ciência de Dados e Inteligência Artificial. Atuo na intersecção de modelos matemáticos, aprendizado de máquina e aplicações com impacto prático.',
    'bio-p2':            'Tenho interesse particular em projetos que cruzam tecnologia e questões sociais. Acredito que dados, bem interpretados, são instrumentos de transformação. Quando não estou pesquisando, estou jogando xadrez ou analisando datasets de futebol.',
    'rotulo-interesses': 'Interesses',
    'interesses-texto':  'Machine Learning · Processamento de Linguagem Natural · Visualização de Dados · Sistemas Elétricos Inteligentes',
    'link-cv-texto':     'Currículo (PDF)',
    'foto-texto':        'Foto',
    /* ——— IAoT ——— */
    'iaot-badge':        'Em desenvolvimento',
    'iaot-desc':         'IAoT é um projeto acadêmico pessoal em desenvolvimento contínuo. Combina técnicas de Inteligência Artificial com infraestrutura de Internet das Coisas para criar sistemas autônomos de monitoramento e tomada de decisão com baixo consumo energético.',
    'iaot-obj-label':    'Objetivos',
    'iaot-obj1':         'Desenvolver modelos de ML embarcados em dispositivos de baixo consumo',
    'iaot-obj2':         'Criar protocolo de comunicação otimizado para dados sensoriais',
    'iaot-obj3':         'Implementar inferência em tempo real na borda (edge computing)',
    'iaot-obj4':         'Explorar aplicações em contextos de impacto social',
    'iaot-status-label': 'Status',
    'iaot-status':       'Em desenvolvimento ativo — fase de prototipagem',
    'iaot-stack-label':  'Stack',
    /* ——— Pesquisa ——— */
    'pesquisa-secao':       'Pesquisa Acadêmica',
    'pesquisa-intro':       'Meus interesses de pesquisa situam-se na fronteira entre sistemas físicos e modelos computacionais. Busco contribuições que combinem rigor matemático com aplicabilidade prática.',
    'pesquisa-areas-label': 'Áreas de interesse',
    'pesquisa-area1':       'Aprendizado de Máquina em Sistemas Elétricos',
    'pesquisa-area2':       'Processamento de Sinais com Redes Neurais',
    'pesquisa-area3':       'Edge AI e computação embarcada',
    'pesquisa-area4':       'Modelos preditivos para dados temporais',
    'pesquisa-atual-label': 'Trabalho atual',
    'pesquisa-atual':       'Atualmente desenvolvendo o projeto IAoT, com foco em inferência eficiente de modelos de classificação em hardware de baixo custo. Paralelamente, estudo técnicas de compressão de redes neurais para aplicação em ambientes com restrição de memória.',
    /* ——— Projetos ——— */
    'projetos-secao':    'Projetos & Pesquisas',
    'proj1-titulo':      'Análise de Sentimentos em Reviews',
    'proj1-desc':        'Modelo de processamento de linguagem natural para classificar sentimentos em avaliações de produtos. Implementado com Python e scikit-learn, com pipeline de pré-processamento textual e validação cruzada estratificada.',
    'proj2-titulo':      'Dashboard Interativo de Vendas',
    'proj2-desc':        'Plataforma de visualização de dados comerciais construída com Plotly e Pandas. Inclui filtros dinâmicos por período, categoria e região com atualização em tempo real e exportação de relatórios.',
    'proj3-titulo':      'Previsão de Preços Imobiliários',
    'proj3-desc':        'Modelo de regressão para estimativa de preços de imóveis com base em variáveis geográficas e estruturais. Avaliação de desempenho com métricas RMSE e R² em conjunto de validação independente.',
    /* ——— Educação ——— */
    'edu-secao':         'Educação',
    'edu1-titulo':       'Bacharelado em Engenharia Elétrica',
    'edu1-inst':         'Universidade XYZ — Brasil',
    'edu1-detalhe':      'Ênfase em Sistemas Inteligentes e Automação. Disciplinas em Análise de Sinais, Controle de Sistemas e Probabilidade e Estatística.',
    'edu2-titulo':       'Machine Learning Specialization',
    'edu2-inst':         'DeepLearning.AI — Coursera',
    'edu2-detalhe':      'Supervised Learning, Unsupervised Learning e Reinforcement Learning. Projetos práticos em Python com TensorFlow.',
    /* ——— Rodapé ——— */
    'rodape-label':      'Contato',
    'rodape-intro':      'Aberto a colaborações, oportunidades de pesquisa e conversas sobre dados e inteligência artificial.',
    'rodape-email':      'E-mail',
    'rodape-linkedin':   'LinkedIn',
    'rodape-github':     'GitHub',
    'copyright':         '© 2025 Marcos Lázaro Romão Silveira',
  },

  en: {
    'page-title':        'Marcos Lázaro Romão Silveira — Portfolio',
    'nav-iaot':          'My IAoT Project',
    'nav-pesquisa':      'Academic Research',
    'nav-contato':       'Contact',
    'sobre-cargo':       'Electrical Engineering · Data Science · Machine Learning',
    'sobre-local':       'Brazil',
    'bio-p1':            '<strong>Electrical Engineering</strong> student focused on Data Science and Artificial Intelligence. I work at the intersection of mathematical models, machine learning, and applications with real-world impact.',
    'bio-p2':            "I have a particular interest in projects that bridge technology and social issues. I believe that data, well interpreted, is an instrument of transformation. When I'm not researching, I'm playing chess or analyzing football datasets.",
    'rotulo-interesses': 'Interests',
    'interesses-texto':  'Machine Learning · Natural Language Processing · Data Visualization · Intelligent Electrical Systems',
    'link-cv-texto':     'Resume (PDF)',
    'foto-texto':        'Photo',
    'iaot-badge':        'In development',
    'iaot-desc':         'IAoT is a personal academic project in continuous development. It combines Artificial Intelligence techniques with Internet of Things infrastructure to create autonomous monitoring and decision-making systems with low power consumption.',
    'iaot-obj-label':    'Objectives',
    'iaot-obj1':         'Develop embedded ML models for low-power devices',
    'iaot-obj2':         'Create an optimized communication protocol for sensor data',
    'iaot-obj3':         'Implement real-time inference at the edge (edge computing)',
    'iaot-obj4':         'Explore applications in social impact contexts',
    'iaot-status-label': 'Status',
    'iaot-status':       'Active development — prototyping phase',
    'iaot-stack-label':  'Stack',
    'pesquisa-secao':       'Academic Research',
    'pesquisa-intro':       'My research interests lie at the frontier between physical systems and computational models. I seek contributions that combine mathematical rigor with practical applicability.',
    'pesquisa-areas-label': 'Areas of interest',
    'pesquisa-area1':       'Machine Learning in Electrical Systems',
    'pesquisa-area2':       'Signal Processing with Neural Networks',
    'pesquisa-area3':       'Edge AI and embedded computing',
    'pesquisa-area4':       'Predictive models for temporal data',
    'pesquisa-atual-label': 'Current work',
    'pesquisa-atual':       'Currently developing the IAoT project, focusing on efficient inference of classification models on low-cost hardware. In parallel, studying neural network compression techniques for application in memory-constrained environments.',
    'projetos-secao':    'Projects & Research',
    'proj1-titulo':      'Sentiment Analysis in Reviews',
    'proj1-desc':        'Natural language processing model to classify sentiments in product reviews. Implemented with Python and scikit-learn, with a text preprocessing pipeline and stratified cross-validation.',
    'proj2-titulo':      'Interactive Sales Dashboard',
    'proj2-desc':        'Commercial data visualization platform built with Plotly and Pandas. Includes dynamic filters by period, category and region with real-time updates and report export.',
    'proj3-titulo':      'Real Estate Price Prediction',
    'proj3-desc':        'Regression model to estimate property prices based on geographic and structural variables. Performance evaluation with RMSE and R² metrics on an independent validation set.',
    'edu-secao':         'Education',
    'edu1-titulo':       "Bachelor's in Electrical Engineering",
    'edu1-inst':         'XYZ University — Brazil',
    'edu1-detalhe':      'Emphasis on Intelligent Systems and Automation. Courses in Signal Analysis, Control Systems, and Probability and Statistics.',
    'edu2-titulo':       'Machine Learning Specialization',
    'edu2-inst':         'DeepLearning.AI — Coursera',
    'edu2-detalhe':      'Supervised Learning, Unsupervised Learning and Reinforcement Learning. Practical projects in Python with TensorFlow.',
    'rodape-label':      'Contact',
    'rodape-intro':      'Open to collaborations, research opportunities and conversations about data and artificial intelligence.',
    'rodape-email':      'Email',
    'rodape-linkedin':   'LinkedIn',
    'rodape-github':     'GitHub',
    'copyright':         '© 2025 Marcos Lázaro Romão Silveira',
  },

  de: {
    'page-title':        'Marcos Lázaro Romão Silveira — Portfolio',
    'nav-iaot':          'Mein IAoT-Projekt',
    'nav-pesquisa':      'Akademische Forschung',
    'nav-contato':       'Kontakt',
    'sobre-cargo':       'Elektrotechnik · Datenwissenschaft · Machine Learning',
    'sobre-local':       'Brasilien',
    'bio-p1':            'Student der <strong>Elektrotechnik</strong> mit Schwerpunkt auf Datenwissenschaft und Künstlicher Intelligenz. Ich arbeite an der Schnittstelle von mathematischen Modellen, maschinellem Lernen und praxisorientierten Anwendungen.',
    'bio-p2':            'Ich interessiere mich besonders für Projekte, die Technologie und soziale Fragen verbinden. Ich glaube, dass Daten, gut interpretiert, Instrumente der Transformation sind. Wenn ich nicht forsche, spiele ich Schach oder analysiere Fußball-Datensätze.',
    'rotulo-interesses': 'Interessen',
    'interesses-texto':  'Machine Learning · Verarbeitung natürlicher Sprache · Datenvisualisierung · Intelligente elektrische Systeme',
    'link-cv-texto':     'Lebenslauf (PDF)',
    'foto-texto':        'Foto',
    'iaot-badge':        'In Entwicklung',
    'iaot-desc':         'IAoT ist ein persönliches akademisches Projekt in kontinuierlicher Entwicklung. Es kombiniert Techniken der Künstlichen Intelligenz mit Internet-der-Dinge-Infrastruktur, um autonome Überwachungs- und Entscheidungssysteme mit niedrigem Energieverbrauch zu schaffen.',
    'iaot-obj-label':    'Ziele',
    'iaot-obj1':         'ML-Modelle für energiesparende Geräte entwickeln',
    'iaot-obj2':         'Optimiertes Kommunikationsprotokoll für Sensordaten erstellen',
    'iaot-obj3':         'Echtzeit-Inferenz am Rand (Edge Computing) implementieren',
    'iaot-obj4':         'Anwendungen in Kontexten mit sozialem Impact erkunden',
    'iaot-status-label': 'Status',
    'iaot-status':       'Aktive Entwicklung — Prototypisierungsphase',
    'iaot-stack-label':  'Stack',
    'pesquisa-secao':       'Akademische Forschung',
    'pesquisa-intro':       'Meine Forschungsinteressen liegen an der Grenze zwischen physikalischen Systemen und Rechenmodellen. Ich suche Beiträge, die mathematische Strenge mit praktischer Anwendbarkeit verbinden.',
    'pesquisa-areas-label': 'Interessengebiete',
    'pesquisa-area1':       'Maschinelles Lernen in elektrischen Systemen',
    'pesquisa-area2':       'Signalverarbeitung mit neuronalen Netzen',
    'pesquisa-area3':       'Edge AI und eingebettetes Computing',
    'pesquisa-area4':       'Prädiktive Modelle für Zeitreihendaten',
    'pesquisa-atual-label': 'Aktuelle Arbeit',
    'pesquisa-atual':       'Derzeit entwickle ich das IAoT-Projekt mit Fokus auf effizienter Inferenz von Klassifikationsmodellen auf kostengünstiger Hardware. Parallel dazu studiere ich Techniken zur Komprimierung neuronaler Netze für den Einsatz in speicherbeschränkten Umgebungen.',
    'projetos-secao':    'Projekte & Forschung',
    'proj1-titulo':      'Sentimentanalyse in Bewertungen',
    'proj1-desc':        'Modell zur Verarbeitung natürlicher Sprache zur Klassifizierung von Stimmungen in Produktbewertungen. Implementiert mit Python und scikit-learn, mit Textvorverarbeitungs-Pipeline und stratifizierter Kreuzvalidierung.',
    'proj2-titulo':      'Interaktives Vertriebs-Dashboard',
    'proj2-desc':        'Plattform zur Visualisierung kommerzieller Daten, erstellt mit Plotly und Pandas. Enthält dynamische Filter nach Zeitraum, Kategorie und Region mit Echtzeit-Updates und Berichtsexport.',
    'proj3-titulo':      'Immobilienpreisvorhersage',
    'proj3-desc':        'Regressionsmodell zur Schätzung von Immobilienpreisen auf Basis geografischer und struktureller Variablen. Leistungsbewertung mit RMSE- und R²-Metriken an einem unabhängigen Validierungsdatensatz.',
    'edu-secao':         'Ausbildung',
    'edu1-titulo':       'Bachelor in Elektrotechnik',
    'edu1-inst':         'Universität XYZ — Brasilien',
    'edu1-detalhe':      'Schwerpunkt auf Intelligente Systeme und Automatisierung. Kurse in Signalanalyse, Regelungstechnik sowie Wahrscheinlichkeitsrechnung und Statistik.',
    'edu2-titulo':       'Machine Learning Spezialisierung',
    'edu2-inst':         'DeepLearning.AI — Coursera',
    'edu2-detalhe':      'Überwachtes Lernen, unüberwachtes Lernen und verstärkendes Lernen. Praktische Projekte in Python mit TensorFlow.',
    'rodape-label':      'Kontakt',
    'rodape-intro':      'Offen für Kooperationen, Forschungsmöglichkeiten und Gespräche über Daten und künstliche Intelligenz.',
    'rodape-email':      'E-Mail',
    'rodape-linkedin':   'LinkedIn',
    'rodape-github':     'GitHub',
    'copyright':         '© 2025 Marcos Lázaro Romão Silveira',
  },

  es: {
    'page-title':        'Marcos Lázaro Romão Silveira — Portafolio',
    'nav-iaot':          'Mi proyecto IAoT',
    'nav-pesquisa':      'Investigación Académica',
    'nav-contato':       'Contacto',
    'sobre-cargo':       'Ingeniería Eléctrica · Ciencia de Datos · Machine Learning',
    'sobre-local':       'Brasil',
    'bio-p1':            'Estudiante de <strong>Ingeniería Eléctrica</strong> con enfoque en Ciencia de Datos e Inteligencia Artificial. Trabajo en la intersección de modelos matemáticos, aprendizaje automático y aplicaciones con impacto práctico.',
    'bio-p2':            'Tengo especial interés en proyectos que cruzan tecnología y cuestiones sociales. Creo que los datos, bien interpretados, son instrumentos de transformación. Cuando no estoy investigando, estoy jugando ajedrez o analizando conjuntos de datos de fútbol.',
    'rotulo-interesses': 'Intereses',
    'interesses-texto':  'Machine Learning · Procesamiento de Lenguaje Natural · Visualización de Datos · Sistemas Eléctricos Inteligentes',
    'link-cv-texto':     'Currículum (PDF)',
    'foto-texto':        'Foto',
    'iaot-badge':        'En desarrollo',
    'iaot-desc':         'IAoT es un proyecto académico personal en desarrollo continuo. Combina técnicas de Inteligencia Artificial con infraestructura de Internet de las Cosas para crear sistemas autónomos de monitoreo y toma de decisiones con bajo consumo energético.',
    'iaot-obj-label':    'Objetivos',
    'iaot-obj1':         'Desarrollar modelos de ML embebidos en dispositivos de bajo consumo',
    'iaot-obj2':         'Crear protocolo de comunicación optimizado para datos sensoriales',
    'iaot-obj3':         'Implementar inferencia en tiempo real en el borde (edge computing)',
    'iaot-obj4':         'Explorar aplicaciones en contextos de impacto social',
    'iaot-status-label': 'Estado',
    'iaot-status':       'Desarrollo activo — fase de prototipado',
    'iaot-stack-label':  'Stack',
    'pesquisa-secao':       'Investigación Académica',
    'pesquisa-intro':       'Mis intereses de investigación se sitúan en la frontera entre sistemas físicos y modelos computacionales. Busco contribuciones que combinen rigor matemático con aplicabilidad práctica.',
    'pesquisa-areas-label': 'Áreas de interés',
    'pesquisa-area1':       'Aprendizaje Automático en Sistemas Eléctricos',
    'pesquisa-area2':       'Procesamiento de Señales con Redes Neuronales',
    'pesquisa-area3':       'Edge AI y computación embebida',
    'pesquisa-area4':       'Modelos predictivos para datos temporales',
    'pesquisa-atual-label': 'Trabajo actual',
    'pesquisa-atual':       'Actualmente desarrollando el proyecto IAoT, con foco en inferencia eficiente de modelos de clasificación en hardware de bajo costo. Paralelamente, estudio técnicas de compresión de redes neuronales para aplicación en entornos con restricción de memoria.',
    'projetos-secao':    'Proyectos & Investigación',
    'proj1-titulo':      'Análisis de Sentimientos en Reseñas',
    'proj1-desc':        'Modelo de procesamiento de lenguaje natural para clasificar sentimientos en reseñas de productos. Implementado con Python y scikit-learn, con pipeline de preprocesamiento textual y validación cruzada estratificada.',
    'proj2-titulo':      'Dashboard Interactivo de Ventas',
    'proj2-desc':        'Plataforma de visualización de datos comerciales construida con Plotly y Pandas. Incluye filtros dinámicos por período, categoría y región con actualizaciones en tiempo real y exportación de informes.',
    'proj3-titulo':      'Predicción de Precios Inmobiliarios',
    'proj3-desc':        'Modelo de regresión para estimar precios de inmuebles basado en variables geográficas y estructurales. Evaluación del rendimiento con métricas RMSE y R² en un conjunto de validación independiente.',
    'edu-secao':         'Educación',
    'edu1-titulo':       'Licenciatura en Ingeniería Eléctrica',
    'edu1-inst':         'Universidad XYZ — Brasil',
    'edu1-detalhe':      'Énfasis en Sistemas Inteligentes y Automatización. Asignaturas de Análisis de Señales, Control de Sistemas y Probabilidad y Estadística.',
    'edu2-titulo':       'Especialización en Machine Learning',
    'edu2-inst':         'DeepLearning.AI — Coursera',
    'edu2-detalhe':      'Aprendizaje supervisado, no supervisado y por refuerzo. Proyectos prácticos en Python con TensorFlow.',
    'rodape-label':      'Contacto',
    'rodape-intro':      'Abierto a colaboraciones, oportunidades de investigación y conversaciones sobre datos e inteligencia artificial.',
    'rodape-email':      'Correo',
    'rodape-linkedin':   'LinkedIn',
    'rodape-github':     'GitHub',
    'copyright':         '© 2025 Marcos Lázaro Romão Silveira',
  },
};

// Mapeamento de idioma → atributo lang do HTML
const LANG_ATTR = { pt: 'pt-BR', en: 'en', de: 'de', es: 'es' };

let idiomaAtual = 'pt';

// ============================================================
// FUNÇÃO PRINCIPAL — aplica o idioma selecionado
// ============================================================
function setIdioma(lang) {
  const t = TRADUCOES[lang];
  if (!t) return;

  // Atualiza textContent (elementos sem HTML interno)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chave = el.dataset.i18n;
    if (t[chave] !== undefined) {
      el.textContent = t[chave];
    }
  });

  // Atualiza innerHTML (elementos com tags <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const chave = el.dataset.i18nHtml;
    if (t[chave] !== undefined) {
      el.innerHTML = t[chave];
    }
  });

  // Atualiza título da aba do navegador
  if (t['page-title']) {
    document.title = t['page-title'];
  }

  // Atualiza o atributo lang do <html>
  document.documentElement.lang = LANG_ATTR[lang] || lang;

  // Atualiza o botão ativo no seletor de bandeiras
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persiste a escolha no localStorage
  localStorage.setItem('idioma', lang);

  idiomaAtual = lang;
}

// ============================================================
// EVENTOS — clique nas bandeiras
// ============================================================
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setIdioma(btn.dataset.lang);
  });
});

// ============================================================
// INICIALIZAÇÃO — restaura idioma salvo ou usa pt como padrão
// ============================================================
const idiomasSalvo = localStorage.getItem('idioma');
const idiomaInicial = (idiomasSalvo && TRADUCOES[idiomasSalvo]) ? idiomasSalvo : 'pt';
setIdioma(idiomaInicial);

// ============================================================
// CABEÇALHO — borda ao rolar
// ============================================================
const cabecalho = document.getElementById('cabecalho');

window.addEventListener('scroll', () => {
  cabecalho.classList.toggle('com-borda', window.scrollY > 10);
}, { passive: true });

// ============================================================
// NAV — destaque da aba ativa conforme scroll
// ============================================================
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

['iaot', 'pesquisa', 'contato'].forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});
