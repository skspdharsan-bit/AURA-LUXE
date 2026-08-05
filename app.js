/* ==========================================================================
   AURA LUXE - Modern E-Commerce Platform Application Logic
   ========================================================================== */

// --- Products Database ---
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Aura Nova Wireless Headphones',
    category: 'Audio',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewsCount: 128,
    badges: ['sale', 'bestseller'],
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    description: 'Experience studio-grade acoustic clarity with active hybrid noise cancellation (ANC) and custom 40mm beryllium drivers.',
    specs: ['40dB Active Noise Cancellation', '45-Hour Battery Life', 'LDAC & aptX HD Codec Support', 'Plush Memory Foam Earcups'],
    inStock: true
  },
  {
    id: 'prod-2',
    title: 'Titanium Chrono Smartwatch',
    category: 'Wearables',
    price: 319.00,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 94,
    badges: ['new'],
    discountPercent: 0,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    description: 'Aircraft-grade titanium bezel housing a vivid AMOLED sapphire crystal display with advanced biometric health tracking.',
    specs: ['Sapphire Crystal Display', 'ECG & SpO2 Heart Monitor', 'Dual-Band GPS Navigation', '50m Water Resistance (5 ATM)'],
    inStock: true
  },
  {
    id: 'prod-3',
    title: 'CyberPulse Mechanical Keyboard',
    category: 'Tech & Gaming',
    price: 159.50,
    originalPrice: 189.00,
    rating: 4.9,
    reviewsCount: 210,
    badges: ['hot'],
    discountPercent: 15,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    description: 'Custom gasket-mounted mechanical keyboard featuring pre-lubed linear switches and customizable per-key RGB backlight.',
    specs: ['Hot-swappable Switches', 'Double-shot PBT Keycaps', 'CNC Anodized Aluminum Chassis', 'Tri-Mode Wireless & Type-C'],
    inStock: true
  },
  {
    id: 'prod-4',
    title: 'Vanguard Leather Backpack',
    category: 'Fashion & Style',
    price: 129.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 76,
    badges: [],
    discountPercent: 0,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
    description: 'Handcrafted full-grain leather backpack designed for modern commuters and international travelers.',
    specs: ['15.6" Padded Laptop Sleeve', 'Full-Grain Weatherproof Leather', 'Hidden Anti-Theft Back Pocket', 'Ergonomic Airflow Shoulder Straps'],
    inStock: true
  },
  {
    id: 'prod-5',
    title: 'AuraSound Portable Speaker',
    category: 'Audio',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewsCount: 142,
    badges: ['sale'],
    discountPercent: 25,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
    description: 'Compact IPX7 waterproof Bluetooth speaker delivering room-filling 360-degree spatial sound with deep punchy bass.',
    specs: ['IPX7 Waterproof & Dustproof', '20-Hour Playtime', 'Dual Passive Radiators', 'TWS Stereo Pairing Enabled'],
    inStock: true
  },
  {
    id: 'prod-6',
    title: 'Zenith Retro Mirrorless Camera',
    category: 'Tech & Gaming',
    price: 749.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 88,
    badges: ['bestseller'],
    discountPercent: 0,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
    description: 'Classic tactile dials meet cutting-edge 24.2 MP APS-C sensor with 4K 60fps video capture capability.',
    specs: ['24.2 MP APS-C CMOS Sensor', '4K 60fps HDR Recording', 'Physical Aluminum Dial Controls', 'Real-time Eye AF Tracking'],
    inStock: true
  },
  {
    id: 'prod-7',
    title: 'Luxe Minimalist Sneakers',
    category: 'Fashion & Style',
    price: 110.00,
    originalPrice: 140.00,
    rating: 4.5,
    reviewsCount: 64,
    badges: ['sale'],
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    description: 'Timeless low-top sneakers crafted from buttery Italian leather with ergonomic cushioned soles.',
    specs: ['100% Italian Nappa Leather', 'OrthoLite Antimicrobial Insole', 'Vulcanized Rubber Outsole', 'Recycled Microfiber Lining'],
    inStock: true
  },
  {
    id: 'prod-8',
    title: 'Lumina Smart LED Desk Lamp',
    category: 'Home Accessories',
    price: 64.50,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 52,
    badges: [],
    discountPercent: 0,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
    description: 'Sleek architectural LED lamp with integrated 15W Qi wireless charger and smooth touch dimming.',
    specs: ['15W Qi Wireless Fast Charging', 'Adjustable Color Temp (2700K - 6500K)', 'Ambient Light Sensor', 'Flicker-Free Eye Protection'],
    inStock: true
  },
  {
    id: 'prod-9',
    title: 'Acoustic Pro Noise-Isolating Earbuds',
    category: 'Audio',
    price: 129.99,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 115,
    badges: ['new'],
    discountPercent: 0,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    description: 'True wireless earbuds with custom tuned graphene drivers, crystal clear quad-mics for calls, and compact charging case.',
    specs: ['Graphene Acoustic Drivers', '30-Hour Total Playtime', 'Quad-Microphone Beamforming', 'Qi Wireless Charging Case'],
    inStock: true
  },
  {
    id: 'prod-10',
    title: 'Aura Glass Essential Oil Diffuser',
    category: 'Home Accessories',
    price: 49.00,
    originalPrice: 65.00,
    rating: 4.6,
    reviewsCount: 39,
    badges: ['sale'],
    discountPercent: 25,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&auto=format&fit=crop&q=80',
    description: 'Handblown ceramic and glass ultrasonic aroma diffuser with warm ambient mood lighting.',
    specs: ['Handblown Artisanal Glass', 'Ultrasonic Misting Technology', '7 Ambient Color Options', 'Auto Shut-Off Safety'],
    inStock: true
  }
];

// --- State Management ---
const state = {
  cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist') || '[]'),
  theme: localStorage.getItem('aura_theme') || 'dark',
  activeCategory: 'All',
  searchQuery: '',
  maxPrice: 800,
  minRating: 0,
  sortBy: 'featured',
  appliedCoupon: null,
  couponDiscount: 0
};

// --- DOM Elements ---
const dom = {
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  productsGrid: document.getElementById('products-grid'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartOverlay: document.getElementById('cart-overlay'),
  cartBtn: document.getElementById('cart-btn'),
  cartCloseBtn: document.getElementById('cart-close-btn'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartCountBadge: document.getElementById('cart-count-badge'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartShipping: document.getElementById('cart-shipping'),
  cartDiscount: document.getElementById('cart-discount'),
  cartTotal: document.getElementById('cart-total'),
  shippingProgressFill: document.getElementById('shipping-progress-fill'),
  shippingTrackerText: document.getElementById('shipping-tracker-text'),
  couponInput: document.getElementById('coupon-input'),
  couponApplyBtn: document.getElementById('coupon-apply-btn'),
  wishlistBtn: document.getElementById('wishlist-btn'),
  wishlistDrawer: document.getElementById('wishlist-drawer'),
  wishlistOverlay: document.getElementById('wishlist-overlay'),
  wishlistCloseBtn: document.getElementById('wishlist-close-btn'),
  wishlistItemsContainer: document.getElementById('wishlist-items-container'),
  wishlistCountBadge: document.getElementById('wishlist-count-badge'),
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  categoryChips: document.querySelectorAll('.chip-btn'),
  priceRange: document.getElementById('price-range'),
  priceValueLabel: document.getElementById('price-value-label'),
  sortSelect: document.getElementById('sort-select'),
  ratingSelect: document.getElementById('rating-select'),
  quickViewModal: document.getElementById('quick-view-modal'),
  quickViewCloseBtn: document.getElementById('qv-close-btn'),
  quickViewBody: document.getElementById('qv-modal-body'),
  checkoutBtn: document.getElementById('checkout-btn'),
  checkoutModal: document.getElementById('checkout-modal'),
  checkoutCloseBtn: document.getElementById('checkout-close-btn'),
  checkoutForm: document.getElementById('checkout-form'),
  orderSuccessModal: document.getElementById('order-success-modal'),
  orderSuccessCloseBtn: document.getElementById('order-success-close-btn'),
  orderIdLabel: document.getElementById('order-id-label'),
  toastContainer: document.getElementById('toast-container')
};

// --- Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initCountdown();
});

// --- Theme Switcher ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  if (state.theme === 'dark') {
    dom.themeToggleBtn.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`;
  } else {
    dom.themeToggleBtn.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
  }
}

// --- Event Listeners ---
function initEventListeners() {
  // Theme Toggle
  dom.themeToggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('aura_theme', state.theme);
    initTheme();
    showToast(`Switched to ${state.theme.toUpperCase()} mode`);
  });

  // Search Input
  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if (state.searchQuery.length > 0) {
      dom.searchClearBtn.classList.add('active');
    } else {
      dom.searchClearBtn.classList.remove('active');
    }
    renderProducts();
  });

  dom.searchClearBtn.addEventListener('click', () => {
    dom.searchInput.value = '';
    state.searchQuery = '';
    dom.searchClearBtn.classList.remove('active');
    renderProducts();
  });

  // Category Chips Filter
  dom.categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      dom.categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeCategory = chip.getAttribute('data-category');
      renderProducts();
    });
  });

  // Price Range Slider
  dom.priceRange.addEventListener('input', (e) => {
    state.maxPrice = parseFloat(e.target.value);
    dom.priceValueLabel.textContent = `$${state.maxPrice}`;
    renderProducts();
  });

  // Sorting Select
  dom.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Rating Filter
  dom.ratingSelect.addEventListener('change', (e) => {
    state.minRating = parseFloat(e.target.value);
    renderProducts();
  });

  // Drawers Toggle
  dom.cartBtn.addEventListener('click', () => toggleDrawer(dom.cartOverlay, true));
  dom.cartCloseBtn.addEventListener('click', () => toggleDrawer(dom.cartOverlay, false));
  dom.cartOverlay.addEventListener('click', (e) => {
    if (e.target === dom.cartOverlay) toggleDrawer(dom.cartOverlay, false);
  });

  dom.wishlistBtn.addEventListener('click', () => toggleDrawer(dom.wishlistOverlay, true));
  dom.wishlistCloseBtn.addEventListener('click', () => toggleDrawer(dom.wishlistOverlay, false));
  dom.wishlistOverlay.addEventListener('click', (e) => {
    if (e.target === dom.wishlistOverlay) toggleDrawer(dom.wishlistOverlay, false);
  });

  // Modals Close
  dom.quickViewCloseBtn.addEventListener('click', () => toggleModal(dom.quickViewModal, false));
  dom.quickViewModal.addEventListener('click', (e) => {
    if (e.target === dom.quickViewModal) toggleModal(dom.quickViewModal, false);
  });

  dom.checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your cart is empty!', 'warning');
      return;
    }
    toggleDrawer(dom.cartOverlay, false);
    populateCheckoutSummary();
    toggleModal(dom.checkoutModal, true);
  });

  dom.checkoutCloseBtn.addEventListener('click', () => toggleModal(dom.checkoutModal, false));
  dom.checkoutModal.addEventListener('click', (e) => {
    if (e.target === dom.checkoutModal) toggleModal(dom.checkoutModal, false);
  });

  // Checkout Form Submission
  dom.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  dom.orderSuccessCloseBtn.addEventListener('click', () => toggleModal(dom.orderSuccessModal, false));

  // Coupon Application
  dom.couponApplyBtn.addEventListener('click', applyCouponCode);
}

// --- Render Products Catalog ---
function renderProducts() {
  let filtered = PRODUCTS.filter(prod => {
    const matchesCategory = state.activeCategory === 'All' || prod.category === state.activeCategory;
    const matchesSearch = prod.title.toLowerCase().includes(state.searchQuery) || 
                          prod.category.toLowerCase().includes(state.searchQuery) ||
                          prod.description.toLowerCase().includes(state.searchQuery);
    const matchesPrice = prod.price <= state.maxPrice;
    const matchesRating = prod.rating >= state.minRating;
    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    dom.productsGrid.innerHTML = `
      <div class="no-results">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3>No matching products found</h3>
        <p>Try adjusting your search query, price filter, or category selection.</p>
      </div>`;
    return;
  }

  dom.productsGrid.innerHTML = filtered.map(prod => {
    const isWishlisted = state.wishlist.some(item => item.id === prod.id);
    const badgeElements = prod.badges.map(b => {
      if (b === 'sale') return `<span class="badge badge-sale">-${prod.discountPercent}% OFF</span>`;
      if (b === 'new') return `<span class="badge badge-new">NEW</span>`;
      if (b === 'hot' || b === 'bestseller') return `<span class="badge badge-hot">BESTSELLER</span>`;
      return '';
    }).join('');

    return `
      <div class="product-card" data-id="${prod.id}">
        <div class="product-image-box">
          <div class="badge-stack">${badgeElements}</div>
          <div class="quick-actions-overlay">
            <button class="action-circle-btn wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${prod.id}')" title="Add to Wishlist">
              <svg width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button class="action-circle-btn" onclick="openQuickView('${prod.id}')" title="Quick View">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <img class="product-img" src="${prod.image}" alt="${prod.title}" loading="lazy" />
        </div>
        <div class="product-info">
          <span class="product-category">${prod.category}</span>
          <h3 class="product-title">${prod.title}</h3>
          <div class="product-rating">
            ★ ${prod.rating.toFixed(1)} <span class="rating-count">(${prod.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <div class="price-box">
              <span class="current-price">$${prod.price.toFixed(2)}</span>
              ${prod.originalPrice ? `<span class="original-price">$${prod.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="add-cart-btn" onclick="addToCart('${prod.id}')">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// --- Cart Logic ---
function addToCart(productId, quantity = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ ...prod, quantity });
  }

  saveState();
  updateCartUI();
  animateBadge(dom.cartCountBadge);
  showToast(`Added "${prod.title}" to cart!`);
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveState();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveState();
  updateCartUI();
  showToast('Item removed from cart');
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  dom.cartCountBadge.textContent = totalCount;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * state.couponDiscount;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15.00;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  // Render Cart Items List
  if (state.cart.length === 0) {
    dom.cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p>Your shopping cart is currently empty.</p>
      </div>`;
  } else {
    dom.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.title}" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove">✕</button>
      </div>
    `).join('');
  }

  // Summary figures
  dom.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  dom.cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  dom.cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  dom.cartTotal.textContent = `$${grandTotal.toFixed(2)}`;

  // Free shipping progress calculation ($150 threshold)
  const threshold = 150;
  const remaining = Math.max(0, threshold - subtotal);
  const percent = Math.min(100, (subtotal / threshold) * 100);
  dom.shippingProgressFill.style.width = `${percent}%`;

  if (remaining === 0) {
    dom.shippingTrackerText.textContent = '🎉 You unlocked FREE Express Shipping!';
  } else {
    dom.shippingTrackerText.textContent = `Add $${remaining.toFixed(2)} more to qualify for FREE Shipping`;
  }
}

// --- Promo Coupons ---
function applyCouponCode() {
  const code = dom.couponInput.value.trim().toUpperCase();
  if (code === 'AURA10' || code === 'SAVE10') {
    state.appliedCoupon = code;
    state.couponDiscount = 0.10; // 10% OFF
    showToast('Success! 10% discount applied');
    updateCartUI();
  } else if (code === 'LUXE20') {
    state.appliedCoupon = code;
    state.couponDiscount = 0.20; // 20% OFF
    showToast('VIP Voucher! 20% discount applied');
    updateCartUI();
  } else {
    showToast('Invalid coupon code. Try "AURA10"', 'warning');
  }
}

// --- Wishlist Logic ---
function toggleWishlist(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const index = state.wishlist.findIndex(item => item.id === productId);
  if (index >= 0) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${prod.title}" from wishlist`);
  } else {
    state.wishlist.push(prod);
    showToast(`Saved "${prod.title}" to wishlist!`);
  }

  saveState();
  updateWishlistUI();
  renderProducts();
  animateBadge(dom.wishlistCountBadge);
}

function updateWishlistUI() {
  dom.wishlistCountBadge.textContent = state.wishlist.length;

  if (state.wishlist.length === 0) {
    dom.wishlistItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p>No saved items in your wishlist.</p>
      </div>`;
    return;
  }

  dom.wishlistItemsContainer.innerHTML = state.wishlist.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.title}" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <button class="btn btn-primary" style="padding: 0.35rem 0.85rem; font-size: 0.75rem;" onclick="addToCart('${item.id}'); toggleWishlist('${item.id}');">
          Move to Cart
        </button>
      </div>
      <button class="cart-item-remove" onclick="toggleWishlist('${item.id}')" title="Remove">✕</button>
    </div>
  `).join('');
}

// --- Quick View Modal ---
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  dom.quickViewBody.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img class="qv-image-main" src="${prod.image}" alt="${prod.title}" />
      </div>
      <div>
        <span class="product-category">${prod.category}</span>
        <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">${prod.title}</h2>
        <div class="product-rating" style="margin-bottom: 1rem;">
          ★ ${prod.rating.toFixed(1)} <span class="rating-count">(${prod.reviewsCount} customer reviews)</span>
        </div>
        <div class="price-box" style="margin-bottom: 1rem;">
          <span class="current-price" style="font-size: 1.5rem;">$${prod.price.toFixed(2)}</span>
          ${prod.originalPrice ? `<span class="original-price" style="font-size: 1rem;">$${prod.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.25rem;">
          ${prod.description}
        </p>
        <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Key Specifications</h4>
        <ul class="qv-spec-list">
          ${prod.specs.map(spec => `<li>✓ ${spec}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${prod.id}'); toggleModal(dom.quickViewModal, false);">
            Add to Cart
          </button>
          <button class="btn btn-outline" onclick="toggleWishlist('${prod.id}')">
            Wishlist
          </button>
        </div>
      </div>
    </div>`;

  toggleModal(dom.quickViewModal, true);
}

// --- Checkout Modal ---
function populateCheckoutSummary() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * state.couponDiscount;
  const shipping = subtotal > 150 ? 0 : 15.00;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  document.getElementById('checkout-items-summary').innerHTML = state.cart.map(item => `
    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.5rem;">
      <span>${item.title} (x${item.quantity})</span>
      <span style="font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

  document.getElementById('checkout-grand-total').textContent = `$${grandTotal.toFixed(2)}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const orderId = 'AL-' + Math.floor(100000 + Math.random() * 900000);
  dom.orderIdLabel.textContent = orderId;

  // Clear Cart
  state.cart = [];
  state.appliedCoupon = null;
  state.couponDiscount = 0;
  saveState();
  updateCartUI();

  toggleModal(dom.checkoutModal, false);
  toggleModal(dom.orderSuccessModal, true);
  showToast('Order placed successfully!', 'success');
}

// --- Utilities & Helpers ---
function toggleDrawer(overlayEl, show) {
  if (show) overlayEl.classList.add('active');
  else overlayEl.classList.remove('active');
}

function toggleModal(modalEl, show) {
  if (show) modalEl.classList.add('active');
  else modalEl.classList.remove('active');
}

function saveState() {
  localStorage.setItem('aura_cart', JSON.stringify(state.cart));
  localStorage.setItem('aura_wishlist', JSON.stringify(state.wishlist));
}

function animateBadge(element) {
  element.classList.remove('pulse');
  void element.offsetWidth; // Force reflow
  element.classList.add('pulse');
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div class="toast-message">${message}</div>`;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Flash Sale Countdown Timer
function initCountdown() {
  let time = 3600 * 14 + 1800; // 14h 30m
  const timerEl = document.getElementById('hero-countdown');
  if (!timerEl) return;

  setInterval(() => {
    time--;
    if (time < 0) time = 86400;
    const hrs = String(Math.floor(time / 3600)).padStart(2, '0');
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    timerEl.textContent = `${hrs}:${mins}:${secs}`;
  }, 1000);
}
