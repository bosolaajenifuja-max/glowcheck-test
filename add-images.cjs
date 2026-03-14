const fs = require('fs');
let content = fs.readFileSync('src/data/products.js', 'utf8');

const brandImages = {
  'Cantu': 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop',
  'Mielle': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop',
  'Pattern': 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=100&h=100&fit=crop',
  'Aunt Jackie': 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=100&h=100&fit=crop',
  'SheaMoisture': 'https://images.unsplash.com/photo-1571781565023-4d619426f83c?w=100&h=100&fit=crop',
  'Pantene': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop',
  'Head & Shoulders': 'https://images.unsplash.com/photo-1571781535014-53bd94aa31d7?w=100&h=100&fit=crop',
  'Tresemme': 'https://images.unsplash.com/photo-1593702295094-aea8c5c1351a?w=100&h=100&fit=crop',
  'Garnier': 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop',
  'Herbal Essences': 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=100&h=100&fit=crop',
  'Aussie': 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=100&h=100&fit=crop',
  'John Frieda': 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop',
  'Blue Magic': 'https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop',
  'Eco Style': 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop',
  'Cecred': 'https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop',
  'Topicals': 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop',
  'Plantmade': 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop',
  'Palmer': 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=100&h=100&fit=crop',
  'Ambi': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop',
  'Nivea': 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop',
  'Dove': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=100&h=100&fit=crop',
  'Olay': 'https://images.unsplash.com/photo-1556229010-6c3e2b2e9f7c?w=100&h=100&fit=crop',
  'CeraVe': 'https://images.unsplash.com/photo-1556228841-a45e6e33473b?w=100&h=100&fit=crop',
  'The Ordinary': 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=100&h=100&fit=crop',
  'Neutrogena': 'https://images.unsplash.com/photo-1556227848-4f87c323962e?w=100&h=100&fit=crop',
  'Simple': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&h=100&fit=crop',
  'La Roche-Posay': 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=100&h=100&fit=crop'
};

// Replace image: null with actual brand images
Object.keys(brandImages).forEach(brand => {
  const regex = new RegExp(`(\\s*brand: "${brand}",\\s*\\n\\s*category: "[^"]+",\\s*\\n\\s*type: "[^"]+",\\s*\\n\\s*)image: null,`, 'g');
  content = content.replace(regex, `$1image: "${brandImages[brand]}",`);
});

fs.writeFileSync('src/data/products.js', content);
console.log('Added images by brand');
