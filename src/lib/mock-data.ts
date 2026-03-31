export type Member = {
  slug: string
  name: string
  category: string
  description: string
  specialties: string[]
  location: string
  website: string
  email: string
}

export const members: Member[] = [
  {
    slug: 'andes-media-lab',
    name: 'Andes Media Lab',
    category: 'Productora',
    description: 'Producción integral para cine, TV y branded content.',
    specialties: ['Producción ejecutiva', 'Dirección', 'Distribución'],
    location: 'Córdoba Capital',
    website: 'https://andes.example.com',
    email: 'info@andes.example.com'
  },
  {
    slug: 'quasar-post',
    name: 'Quasar Post',
    category: 'Postproducción',
    description: 'Color, finishing y post de audio para proyectos premium.',
    specialties: ['Color grading', 'Sound design'],
    location: 'Villa Allende',
    website: 'https://quasar.example.com',
    email: 'hola@quasar.example.com'
  },
  {
    slug: 'orbita-animacion',
    name: 'Órbita Animación',
    category: 'Animación',
    description: 'Estudio 2D/3D enfocado en series y contenido infantil.',
    specialties: ['Animación 3D', 'Motion graphics'],
    location: 'Córdoba Capital',
    website: 'https://orbita.example.com',
    email: 'contacto@orbita.example.com'
  }
]

export const newsItems = [
  { title: 'Ronda de coproducción 2026', type: 'Evento', date: '2026-03-20' },
  { title: 'Estreno colectivo en mercado LATAM', type: 'Estreno', date: '2026-03-15' },
  { title: 'Nuevo programa de innovación audiovisual', type: 'Noticia', date: '2026-03-10' }
]
