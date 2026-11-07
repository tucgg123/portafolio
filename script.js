// Datos de los proyectos. Para agregar uno nuevo, añade un objeto a esta lista.
const projects = [
  {
    id: 'auren',
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
    title: 'Simulador de Sistemas Fotovoltaicos',
    period: '2026',
    kind: 'Aplicación web interactiva',
    text: 'Herramienta para entender y evaluar sistemas de energía solar, organizada en cinco módulos.',
    points: [
      'Simulación energética y análisis climático.',
      'Visualización de modelos 3D.',
      'Cálculo de retorno de inversión.',
      'Explicación de los fundamentos físicos.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub Pages']
  },
  {
    id: 'eco',
    title: 'EcoMallorquín',
    period: '2025',
    kind: 'Aplicación web de conservación ambiental',
    text: 'Aplicación orientada a proteger la fauna, con cuatro módulos pensados para visitantes y para quienes cuidan el entorno.',
    points: [
      'Mapa interactivo.',
      'Sistema de reportes en tiempo real.',
      'Base de datos de fauna.',
      'Información educativa para visitantes.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub Pages']
  },
  {
    id: 'signo',
    title: 'SignoGlove',
    period: '2024',
    kind: 'Sistema de asistencia para accesibilidad (software + hardware)',
    text: 'Guante con una placa Micro:Bit conectado por Bluetooth a una aplicación web, pensado para facilitar la comunicación de personas que usan gestos.',
    points: [
      'Captura de movimiento y transmisión inalámbrica de datos.',
      'Procesamiento de gestos.',
      'Reproducción automática de frases.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Micro:Bit', 'Bluetooth', 'Git', 'GitHub Pages']
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
    el('p', 'p-text', p.text),
    points,
    el('h4', '', 'Tecnologías'),
    stack
  );
}

renderList();
renderDetail();
