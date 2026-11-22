// Datos de los proyectos. Para agregar uno nuevo, añade un objeto a esta lista.
const projects = [
  {
    id: 'bits',
    url: 'https://tucgg123.itch.io/bits-hackaton-big-hero',
    linkLabel: 'Jugar en itch.io',
    title: 'bits · NASA Space Apps',
    period: '11/2026',
    kind: 'Videojuego educativo sobre misiones CubeSat (NASA Space Apps Challenge 2026)',
    text: 'Videojuego 2D en Godot 4, hecho en un equipo de 5 personas, que enseña cómo se diseña y se lanza un CubeSat. Tiene cinco planetas y en cada uno se aprende un tema de ingeniería espacial: energía, propulsión, térmica, comunicaciones y gestión de riesgos. Las preguntas y los riesgos salen de datos reales de la NASA. Está en español e inglés y busca educar sobre los ODS 7, 9, 13 y 17.',
    role: 'Mi rol: desarrollador de backend y enlaces de datos.',
    points: [
      'Conecté el juego con la base de datos de Supabase mediante su API REST para cargar en tiempo real las preguntas y los riesgos de la NASA.',
      'Hice que el juego siga funcionando sin internet, con una copia local de los datos.',
      'Implementé la selección de preguntas al azar por tema y la versión bilingüe de los datos.',
      'Integré los recursos del equipo (mapas, música, personajes) y gestioné las ramas y versiones en GitHub.'
    ],
    stack: ['Godot 4', 'GDScript', 'Supabase', 'API REST', 'Git', 'GitHub']
  },
  {
    id: 'auren',
    url: 'https://auren-v2.netlify.app/',
    linkLabel: 'Ver AUREN',
    title: 'AUREN',
    period: '09/2026 – actualidad',
    kind: 'Plataforma educativa con IA (demo funcional)',
    text: 'Aplicación web progresiva (PWA) hecha en equipo para estudiar mejor con ayuda de inteligencia artificial. Tiene cuentas para estudiantes y profesores, y usa la API de Google Gemini a través de funciones serverless.',
    points: [
      'Autenticación y gestión de roles de usuario (estudiantes y profesores).',
      'Procesa documentos PDF, genera resúmenes automáticos y crea flashcards interactivas.',
      'Calendario de organización y sistema de rachas para incentivar el hábito de estudio.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Firebase Auth', 'Firestore', 'Netlify Functions', 'API de Google Gemini']
  },
  {
    id: 'solar',
    url: 'https://tucgg123.github.io/Simulador-Fisica-de-Campos/',
    linkLabel: 'Abrir el simulador',
    title: 'Simulador de Sistemas Fotovoltaicos',
    period: '2026',
    kind: 'Aplicación web interactiva (informe de Física de Campos)',
    text: 'Herramienta para evaluar paneles solares en los locales del Barrio Galán, Barranquilla, organizada en cinco módulos.',
    points: [
      'Simulador de retorno de la inversión según el consumo y el tipo de techo.',
      'Comparación de locales con gráficas de consumo frente a generación.',
      'Cálculos de física de campos: corriente, campo magnético, campo eléctrico y efecto Joule.',
      'Pronóstico del clima en vivo y modelos 3D en Tinkercad.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'API de Open-Meteo', 'Pruebas con Node.js', 'GitHub Pages']
  },
  {
    id: 'eco',
    url: 'https://tucgg123.github.io/EcoMallorquin/',
    linkLabel: 'Ver EcoMallorquín',
    title: 'EcoMallorquín',
    period: '2025',
    kind: 'Aplicación web de conservación ambiental',
    text: 'Aplicación orientada a proteger la fauna, con cuatro módulos pensados para visitantes y para quienes cuidan el entorno.',
    points: [
      'Mapa interactivo.',
      'Formulario de reportes ciudadanos.',
      'Base de datos de fauna.',
      'Información educativa para visitantes.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'GitHub Pages']
  },
  {
    id: 'signo',
    url: 'https://tucgg123.github.io/SignoGlove/es/index.html',
    linkLabel: 'Ver SignoGlove',
    title: 'SignoGlove',
    period: '2024',
    kind: 'Sistema de asistencia para accesibilidad (software + hardware)',
    text: 'Guante con una placa Micro:Bit conectado por Bluetooth a una aplicación web, pensado para facilitar la comunicación de personas que usan gestos.',
    points: [
      'Captura de movimiento y transmisión inalámbrica de datos.',
      'Procesamiento de gestos.',
      'Reproducción automática de frases.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Micro:Bit', 'Web Bluetooth', 'GitHub Pages']
  }
];

const listEl = document.getElementById('project-list');
const detailEl = document.getElementById('project-detail');
let selectedId = projects[0].id;

// Crea un elemento con texto (textContent evita inyectar HTML).
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderList() {
  listEl.replaceChildren();
  projects.forEach((p, index) => {
    const btn = el('button', 'project-btn');
    btn.type = 'button';
    btn.setAttribute('aria-pressed', String(p.id === selectedId));
    btn.append(el('span', 'p-title', p.title), el('span', 'p-period', p.period));
    btn.addEventListener('click', () => {
      selectedId = p.id;
      renderList();
      renderDetail();
      // Se vuelve a dibujar la lista, así que se devuelve el foco al botón elegido.
      listEl.children[index].focus();
    });
    listEl.append(btn);
  });
}

function renderDetail() {
  const p = projects.find((item) => item.id === selectedId) || projects[0];
  detailEl.replaceChildren();

  const points = el('ul', 'p-points');
  p.points.forEach((pt) => points.append(el('li', '', pt)));

  const stack = el('ul', 'p-stack');
  p.stack.forEach((t) => stack.append(el('li', '', t)));

  detailEl.append(
    el('p', 'p-kind', p.kind),
    el('h3', '', p.title),
    el('p', 'p-text', p.text)
  );
  // El rol es opcional: solo se muestra en proyectos de equipo que lo indiquen.
  if (p.role) detailEl.append(el('p', 'p-role', p.role));
  detailEl.append(
    points,
    el('h4', '', 'Tecnologías'),
    stack
  );
  // Enlace al proyecto publicado (se abre en otra pestaña).
  if (p.url) {
    const linkEl = el('a', 'btn btn-primary p-link', p.linkLabel || 'Ver proyecto');
    linkEl.href = p.url;
    linkEl.target = '_blank';
    linkEl.rel = 'noopener';
    detailEl.append(linkEl);
  }
}

renderList();
renderDetail();
