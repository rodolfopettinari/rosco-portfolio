// Cada skin define sus tokens visuales.
// Para agregar un skin nuevo, agregás un objeto a esta lista.

export const skins = [
  {
    id: 'editorial',
    name: 'Editorial',
    tokens: {
      '--ink': '#1a1a18',
      '--ink-mid': '#4a4a45',
      '--ink-light': '#8a8a82',
      '--ink-faint': '#d4d2c8',
      '--page': '#faf9f5',
      '--accent': '#be4050',
      '--accent-light': '#f9eaec',
      '--font-display': "'Playfair Display', Georgia, serif",
      '--font-body': "'Source Serif 4', Georgia, serif",
      '--right-bg': '#1a1a18',
    },
  },
  {
    id: 'product',
    name: 'Product',
    tokens: {
      '--ink': '#2C363F',
      '--ink-mid': '#5a6570',
      '--ink-light': '#9aa3ad',
      '--ink-faint': '#e8eaed',
      '--page': '#FFFFFF',
      '--accent': '#6C91C2',
      '--accent-light': '#eef3f9',
      '--font-display': "'DM Sans', sans-serif",
      '--font-body': "'Inter', sans-serif",
      '--right-bg': '#2C363F',
    },
  },
]