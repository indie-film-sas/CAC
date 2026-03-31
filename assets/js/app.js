const membersData = [
  { name: 'Andes Media Lab', category: 'Productora', location: 'Córdoba Capital', description: 'Producción integral para cine y TV.' },
  { name: 'Quasar Post', category: 'Postproducción', location: 'Villa Allende', description: 'Color, audio y finishing premium.' },
  { name: 'Órbita Animación', category: 'Animación', location: 'Córdoba Capital', description: 'Animación 2D/3D para series y campañas.' },
  { name: 'Nodo Servicios', category: 'Servicios técnicos', location: 'Río Cuarto', description: 'Equipamiento, alquiler y soporte técnico.' }
]

const newsData = [
  { type: 'Evento', title: 'Ronda de coproducción 2026', date: '2026-03-20' },
  { type: 'Estreno', title: 'Estreno colectivo LATAM', date: '2026-03-15' },
  { type: 'Noticia', title: 'Programa de innovación audiovisual', date: '2026-03-10' },
  { type: 'Anuncio', title: 'Apertura de convocatoria regional', date: '2026-03-07' }
]

function renderMembers() {
  const container = document.querySelector('[data-members-list]')
  if (!container) return

  const searchInput = document.querySelector('[data-members-search]')
  const categorySelect = document.querySelector('[data-members-category]')
  const locationSelect = document.querySelector('[data-members-location]')
  const counter = document.querySelector('[data-members-count]')

  const categories = ['Todos', ...new Set(membersData.map((m) => m.category))]
  const locations = ['Todas', ...new Set(membersData.map((m) => m.location))]

  categories.forEach((cat) => categorySelect.insertAdjacentHTML('beforeend', `<option>${cat}</option>`))
  locations.forEach((loc) => locationSelect.insertAdjacentHTML('beforeend', `<option>${loc}</option>`))

  const paint = () => {
    const term = searchInput.value.toLowerCase()
    const cat = categorySelect.value
    const loc = locationSelect.value

    const filtered = membersData.filter((m) => {
      const byTerm = !term || `${m.name} ${m.description}`.toLowerCase().includes(term)
      const byCat = cat === 'Todos' || m.category === cat
      const byLoc = loc === 'Todas' || m.location === loc
      return byTerm && byCat && byLoc
    })

    counter.textContent = `${filtered.length} miembros encontrados`
    container.innerHTML = filtered
      .map((m) => `<article class="card"><h3>${m.name}</h3><p>${m.category} · ${m.location}</p><p>${m.description}</p></article>`)
      .join('')
  }

  searchInput.addEventListener('input', paint)
  categorySelect.addEventListener('change', paint)
  locationSelect.addEventListener('change', paint)
  paint()
}

function renderNews() {
  const container = document.querySelector('[data-news-list]')
  if (!container) return

  const tabs = document.querySelectorAll('[data-news-tab]')
  const paint = (type) => {
    const filtered = type === 'Todos' ? newsData : newsData.filter((n) => n.type === type)
    container.innerHTML = filtered.map((n) => `<article class="card"><strong>${n.type}</strong><h3>${n.title}</h3><p>${n.date}</p></article>`).join('')
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => paint(tab.dataset.newsTab))
  })

  paint('Todos')
}

function bindForms() {
  document.querySelectorAll('[data-form-action]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const status = form.querySelector('[data-form-status]')
      status.textContent = 'Formulario enviado correctamente. Te vamos a contactar por email.'
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderMembers()
  renderNews()
  bindForms()
})
