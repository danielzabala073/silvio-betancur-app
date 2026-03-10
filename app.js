/* ============================================================
   DATA – Productos y Categorías
============================================================ */
const CATEGORIES = ['Todos', 'Suplementos', 'Tés & Infusiones', 'Aceites', 'Proteínas', 'Detox', 'Colágeno'];

const PRODUCTS = [
  {
    id: 1, name: 'Espirulina Premium', emoji: '🌊',
    category: 'Suplementos', price: 349, oldPrice: 420,
    featured: true,
    tags: ['Antioxidante', 'Proteína', 'Energía'],
    desc: 'Espirulina 100% orgánica, rica en proteína vegetal, vitaminas B12, hierro y antioxidantes. Ideal para aumentar energía y fortalecer el sistema inmune. Presentación de 200 tabletas.'
  },
  {
    id: 2, name: 'Té Verde Matcha', emoji: '🍵',
    category: 'Tés & Infusiones', price: 289, oldPrice: null,
    featured: true,
    tags: ['Antioxidante', 'Metabolismo', 'Detox'],
    desc: 'Matcha ceremonial de primera calidad importado de Japón. Alto contenido de catequinas y L-teanina. Acelera el metabolismo y mejora la concentración. 100g de polvo fino.'
  },
  {
    id: 3, name: 'Aceite de Coco Orgánico', emoji: '🥥',
    category: 'Aceites', price: 199, oldPrice: 240,
    featured: false,
    tags: ['Keto', 'Cocinado', 'Piel'],
    desc: 'Aceite de coco extra virgen prensado en frío, sin procesar ni refinado. Perfecto para cocinar, como humectante natural y para la dieta cetogénica. Frasco de 450ml.'
  },
  {
    id: 4, name: 'Proteína de Chícharo', emoji: '💪',
    category: 'Proteínas', price: 599, oldPrice: 720,
    featured: true,
    tags: ['Vegana', 'Músculo', 'Sin lactosa'],
    desc: 'Proteína vegana aislada de chícharo con 25g de proteína por porción. Sin lactosa, sin gluten, sin soya. Sabor vainilla natural. 1kg. Ideal post-entrenamiento.'
  },
  {
    id: 5, name: 'Té Detox 21 Días', emoji: '🌿',
    category: 'Tés & Infusiones', price: 399, oldPrice: null,
    featured: false,
    tags: ['Detox', 'Digestión', 'Depurativo'],
    desc: 'Mezcla herbal de 14 plantas depurativas: diente de león, ortiga, hinojo, jengibre y más. Programa completo de 21 días para limpiar el organismo y mejorar la digestión. 42 sobres.'
  },
  {
    id: 6, name: 'Colágeno Hidrolizado', emoji: '✨',
    category: 'Colágeno', price: 459, oldPrice: 520,
    featured: true,
    tags: ['Anti-edad', 'Articulaciones', 'Piel'],
    desc: 'Colágeno marino tipo I y III hidrolizado de alta biodisponibilidad. Con vitamina C y ácido hialurónico. Mejora la elasticidad de piel, cabello y uñas. 30 sobres individuales.'
  },
  {
    id: 7, name: 'Ashwagandha KSM-66', emoji: '🧘',
    category: 'Suplementos', price: 379, oldPrice: null,
    featured: false,
    tags: ['Estrés', 'Energía', 'Adaptógeno'],
    desc: 'Extracto de ashwagandha KSM-66 de la más alta concentración (600mg). Reduce el cortisol, mejora el sueño y la respuesta al estrés. Certificado orgánico. 60 cápsulas.'
  },
  {
    id: 8, name: 'Aceite de Orégano', emoji: '🫙',
    category: 'Aceites', price: 249, oldPrice: 300,
    featured: false,
    tags: ['Antibacterial', 'Inmune', 'Natural'],
    desc: 'Aceite esencial de orégano silvestre mediterráneo con mínimo 80% de carvacrol. Potente antibacterial y antifúngico natural. Fortalece el sistema inmune. 30ml con gotero.'
  },
  {
    id: 9, name: 'Maca Peruana Gold', emoji: '🌾',
    category: 'Suplementos', price: 279, oldPrice: 330,
    featured: false,
    tags: ['Energía', 'Hormonal', 'Fertilidad'],
    desc: 'Maca gelatinizada de las alturas de Perú, mayor biodisponibilidad. Regula el sistema hormonal, aumenta la energía y la libido. Certificada orgánica. 200g de polvo.'
  },
  {
    id: 10, name: 'Cúrcuma + Pimienta Negra', emoji: '🟡',
    category: 'Suplementos', price: 229, oldPrice: null,
    featured: false,
    tags: ['Antiinflamatorio', 'Articulaciones', 'Digestión'],
    desc: 'Cúrcuma 95% curcuminoides con pimienta negra (piperina) para máxima absorción. Poderoso antiinflamatorio natural. Alivia dolores articulares y mejora la digestión. 90 cápsulas.'
  },
  {
    id: 11, name: 'Proteína Whey Grass Fed', emoji: '🥛',
    category: 'Proteínas', price: 649, oldPrice: 780,
    featured: false,
    tags: ['Muscular', 'Recuperación', 'Premium'],
    desc: 'Whey protein de vacas alimentadas con pasto, sin hormonas ni antibióticos. 26g de proteína por porción con BCAA completos. Sabores: chocolate, vainilla y fresa. 1kg.'
  },
  {
    id: 12, name: 'Kit Detox Completo', emoji: '🎁',
    category: 'Detox', price: 899, oldPrice: 1100,
    featured: true,
    tags: ['Kit', 'Detox', 'Ahorro'],
    desc: 'Kit completo de depuración: Té detox 21 días + Espirulina + Clorofila líquida + Guía de alimentación digital. El paquete perfecto para empezar tu transformación. ¡Ahorra $201!'
  },
];

/* ============================================================
   STATE
============================================================ */
let cart = JSON.parse(localStorage.getItem('nc_cart') || '[]');
let currentCategory = 'Todos';
let currentPage = 'home';

/* ============================================================
   NAVIGATION
============================================================ */
function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');

  currentPage = page;
  window.scrollTo(0, 0);

  if (page === 'carrito') renderCart();
  if (page === 'catalogo') renderGrid();
}

/* ============================================================
   FEATURED PRODUCTS (home scroll)
============================================================ */
function renderFeatured() {
  const container = document.getElementById('featured-scroll');
  const featured = PRODUCTS.filter(p => p.featured);
  container.innerHTML = featured.map(p => `
    <div class="product-card-h" onclick="openModal(${p.id})">
      ${p.oldPrice ? `<span class="badge">¡Oferta!</span>` : ''}
      <span class="emoji">${p.emoji}</span>
      <h4>${p.name}</h4>
      <div class="price">$${p.price}</div>
    </div>
  `).join('');
}

/* ============================================================
   CATEGORIES BAR
============================================================ */
function renderCategories() {
  const bar = document.getElementById('categories-bar');
  bar.innerHTML = CATEGORIES.map(c => `
    <button class="cat-pill ${c === currentCategory ? 'active' : ''}"
      onclick="selectCategory('${c}')">${c}</button>
  `).join('');
}

function selectCategory(cat) {
  currentCategory = cat;
  renderCategories();
  renderGrid();
}

/* ============================================================
   PRODUCTS GRID
============================================================ */
function renderGrid() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase();
  let filtered = currentCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentCategory);

  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    );
  }

  const grid = document.getElementById('products-grid');
  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">
      <div style="font-size:48px">🔍</div>
      <p>Sin resultados para "<strong>${query}</strong>"</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card-v" onclick="openModal(${p.id})">
      <span class="card-emoji">${p.emoji}</span>
      <div class="card-body">
        ${p.oldPrice ? `<span style="background:var(--amber-light);color:var(--amber);font-size:10px;font-weight:600;border-radius:20px;padding:2px 8px;display:inline-block;margin-bottom:4px;">¡Oferta!</span>` : ''}
        <div class="card-name">${p.name}</div>
        <div class="card-cat">${p.category}</div>
        <div style="display:flex;align-items:baseline;gap:4px;">
          <span class="card-price">$${p.price}</span>
          ${p.oldPrice ? `<span class="card-old">$${p.oldPrice}</span>` : ''}
        </div>
        <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+ Agregar</button>
      </div>
    </div>
  `).join('');
}

function filterProducts() {
  renderGrid();
}

/* ============================================================
   MODAL – PRODUCT DETAIL
============================================================ */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-content').innerHTML = `
    <span class="modal-emoji">${p.emoji}</span>
    <div class="modal-name">${p.name}</div>
    <div class="modal-cat">${p.category}</div>
    <div class="modal-price-row">
      <span class="modal-price">$${p.price}</span>
      ${p.oldPrice ? `<span class="modal-old">$${p.oldPrice}</span>
        <span style="background:var(--amber-light);color:var(--amber);font-size:12px;font-weight:600;border-radius:20px;padding:3px 10px;">
          ${Math.round((1 - p.price/p.oldPrice)*100)}% OFF
        </span>` : ''}
    </div>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-tags">${p.tags.map(t => `<span class="modal-tag">✓ ${t}</span>`).join('')}</div>
    <button class="btn-primary full-width" onclick="addToCart(${p.id}); closeModal()">
      🛒 Agregar al carrito — $${p.price}
    </button>
  `;

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

/* ============================================================
   CART
============================================================ */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  updateBadge();
  showToast(`✓ ${product.name} agregado`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateBadge();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  renderCart();
}

function renderCart() {
  const listEl   = document.getElementById('cart-items');
  const emptyEl  = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl  = document.getElementById('cart-total-amount');

  if (!cart.length) {
    listEl.classList.add('hidden');
    emptyEl.classList.remove('hidden');
    footerEl.classList.add('hidden');
    return;
  }

  listEl.classList.remove('hidden');
  emptyEl.classList.add('hidden');
  footerEl.classList.remove('hidden');

  let total = 0;
  listEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item">
        <span class="ci-emoji">${p.emoji}</span>
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">$${p.price} c/u</div>
          <div class="ci-qty">
            <button onclick="changeQty(${p.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${p.id}, +1)">+</button>
          </div>
        </div>
        <button class="ci-delete" onclick="removeFromCart(${p.id})">🗑</button>
      </div>
    `;
  }).join('');

  totalEl.textContent = `$${total.toLocaleString()}`;
}

function saveCart() {
  localStorage.setItem('nc_cart', JSON.stringify(cart));
}

function updateBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (total > 0) {
    badge.textContent = total;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

/* ============================================================
   CHECKOUT VÍA WHATSAPP
============================================================ */
function checkout() {
  if (!cart.length) return;
  let msg = '¡Hola Ana! Quiero hacer un pedido:\n\n';
  let total = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return;
    msg += `• ${p.emoji} ${p.name} x${item.qty} = $${p.price * item.qty}\n`;
    total += p.price * item.qty;
  });
  msg += `\n💰 *Total: $${total.toLocaleString()} MXN*\n\n¡Gracias! 🌿`;
  window.open(`https://wa.me/573117357754?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ============================================================
   CONTACT
============================================================ */
function openWhatsApp() {
  window.open('https://wa.me/573117357754?text=Hola%20Ana%2C%20me%20interesa%20recibir%20asesoría%20sobre%20tus%20productos%20naturales%20🌿', '_blank');
}

function openInstagram() {
  window.open('https://instagram.com/naturalcoach.mx', '_blank');
}

function sendMessage() {
  showToast('✓ Mensaje enviado. ¡Te contactamos pronto!');
}

/* ============================================================
   TOAST
============================================================ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2200);
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Show app after splash
  setTimeout(() => {
    document.getElementById('app').classList.remove('hidden');
    goTo('home');
  }, 2400);

  renderFeatured();
  renderCategories();
  renderGrid();
  updateBadge();
});
