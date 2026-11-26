/* ==========================================================================
   Mateo Import. — Carrito, Filtros, Búsqueda y Pedido por WhatsApp
   ========================================================================== */

(function () {
  const CART_KEY = 'mateo_import_cart_v1';
  const CONFIG = window.MATEO_CONFIG;
  const PRODUCTS = window.MATEO_PRODUCTS || [];

  // ---------- Helpers ----------
  function formatPrice(amount) {
    return `${CONFIG.currencySymbol} ${Number(amount).toFixed(2)}`;
  }

  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function getProductById(id) {
    return PRODUCTS.find((p) => p.id === id);
  }

  // ---------- Cart State ----------
  let cart = loadCart();

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCartUI();
  }

  function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty });
    }
    saveCart();
    showToast(`Agregaste ${qty} × ${product.name}`);
  }

  function updateCartQty(productId, newQty) {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(productId);
      return;
    }
    const item = cart.find((i) => i.id === productId);
    if (item) {
      item.qty = qty;
      saveCart();
    }
  }

  function removeFromCart(productId) {
    cart = cart.filter((i) => i.id !== productId);
    saveCart();
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  function getCartTotals() {
    let totalItems = 0;
    let totalPrice = 0;
    const detailed = [];

    cart.forEach((entry) => {
      const product = getProductById(entry.id);
      if (!product) return;
      const subtotal = product.price * entry.qty;
      totalItems += entry.qty;
      totalPrice += subtotal;
      detailed.push({ product, qty: entry.qty, subtotal });
    });

    return { totalItems, totalPrice, detailed };
  }

  // ---------- WhatsApp Checkout ----------
  function sendWhatsAppOrder() {
    const { detailed, totalItems, totalPrice } = getCartTotals();
    if (detailed.length === 0) {
      showToast('Tu carrito está vacío. Agrega productos primero.');
      return;
    }

    const nameInput = document.getElementById('cartCustomerName');
    const customerName = nameInput ? nameInput.value.trim() : '';

    const lines = [
      `Hola *${CONFIG.brandName}* ✨`,
      'Quisiera realizar el siguiente pedido desde la web:',
      ''
    ];

    detailed.forEach(({ product, qty, subtotal }, idx) => {
      lines.push(
        `${idx + 1}. *${product.name}* (${product.categoryLabel})\n   Cantidad: ${qty} × ${formatPrice(product.price)} = *${formatPrice(subtotal)}*`
      );
    });

    lines.push('');
    lines.push(`🛍️ *Total de unidades:* ${totalItems}`);
    lines.push(`💰 *Total estimado:* ${formatPrice(totalPrice)}`);

    if (customerName) {
      lines.push('');
      lines.push(`👤 *Cliente:* ${customerName}`);
    }

    lines.push('');
    lines.push('Quedo atento(a) para coordinar el pago y la entrega. ¡Gracias!');

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // ---------- Inject Global UI (Cart Drawer, Quick View Modal, Toast, WA Float) ----------
  function injectGlobalUI() {
    if (document.getElementById('cartDrawer')) return;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="drawer-backdrop" id="drawerBackdrop"></div>
      <aside class="cart-drawer" id="cartDrawer" aria-label="Carrito de compras" aria-hidden="true">
        <div class="cart-header">
          <h2>Tu Carrito</h2>
          <button class="icon-close" id="closeCartBtn" aria-label="Cerrar carrito">&times;</button>
        </div>
        <div class="cart-items" id="cartItemsContainer"></div>
        <div class="cart-footer" id="cartFooter">
          <div class="cart-customer-fields">
            <input type="text" id="cartCustomerName" class="cart-input" placeholder="Tu nombre (opcional)" />
          </div>
          <div class="cart-summary-row">
            <span>Total estimado</span>
            <strong id="cartTotalAmount">${formatPrice(0)}</strong>
          </div>
          <button class="btn btn-whatsapp" id="checkoutWhatsAppBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L0 24l6.33-1.66a11.84 11.84 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.89-9.89 9.89zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
            </svg>
            Finalizar pedido por WhatsApp
          </button>
          <button class="cart-clear-btn" id="clearCartBtn" type="button">Vaciar carrito</button>
        </div>
      </aside>

      <div class="modal-backdrop" id="quickViewModal" aria-hidden="true">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="qvTitle">
          <button class="icon-close modal-close" id="closeQuickViewBtn" aria-label="Cerrar vista rápida">&times;</button>
          <div class="modal-media">
            <img id="qvImage" src="" alt="" />
          </div>
          <div class="modal-body">
            <span class="eyebrow" id="qvCategory"></span>
            <h3 id="qvTitle"></h3>
            <div class="modal-price" id="qvPrice"></div>
            <div class="product-controls">
              <div class="qty-control">
                <button type="button" class="qty-btn" id="qvMinus" aria-label="Disminuir cantidad">−</button>
                <input type="number" id="qvQty" class="qty-value" value="1" min="1" max="99" aria-label="Cantidad" />
                <button type="button" class="qty-btn" id="qvPlus" aria-label="Aumentar cantidad">+</button>
              </div>
              <button type="button" class="btn btn-primary btn-add-cart" id="qvAddBtn">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>

      <div class="toast" id="toastNotification" role="status" aria-live="polite">
        <span id="toastMessage"></span>
        <button type="button" id="toastOpenCart">Ver carrito</button>
      </div>

      <a class="wa-float" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola Mateo Import., tengo una consulta sobre sus accesorios ✨')}" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L0 24l6.33-1.66a11.84 11.84 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.89-9.89 9.89zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </a>
    `;

    document.body.appendChild(wrapper);

    // Drawer events
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    document.getElementById('drawerBackdrop').addEventListener('click', closeCart);
    document.getElementById('checkoutWhatsAppBtn').addEventListener('click', sendWhatsAppOrder);
    document.getElementById('clearCartBtn').addEventListener('click', () => {
      clearCart();
      showToast('Carrito vaciado');
    });

    // Toast open cart
    document.getElementById('toastOpenCart').addEventListener('click', () => {
      hideToast();
      openCart();
    });

    // Quick View events
    document.getElementById('closeQuickViewBtn').addEventListener('click', closeQuickView);
    document.getElementById('quickViewModal').addEventListener('click', (e) => {
      if (e.target.id === 'quickViewModal') closeQuickView();
    });
    document.getElementById('qvMinus').addEventListener('click', () => {
      const input = document.getElementById('qvQty');
      input.value = Math.max(1, (parseInt(input.value, 10) || 1) - 1);
    });
    document.getElementById('qvPlus').addEventListener('click', () => {
      const input = document.getElementById('qvQty');
      input.value = Math.min(99, (parseInt(input.value, 10) || 1) + 1);
    });

    // ESC key closes drawer / modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        closeQuickView();
      }
    });
  }

  function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
    document.getElementById('drawerBackdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.getElementById('drawerBackdrop').classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderCartUI() {
    const { totalItems, totalPrice, detailed } = getCartTotals();

    // Update all header badges
    document.querySelectorAll('.cart-badge').forEach((badge) => {
      badge.textContent = totalItems;
    });

    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotalAmount');
    if (!container || !footer || !totalEl) return;

    totalEl.textContent = formatPrice(totalPrice);

    if (detailed.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <p>Tu carrito está vacío por ahora.</p>
          <a href="catalogo.html" class="btn btn-outline btn-sm">Explorar catálogo</a>
        </div>
      `;
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'flex';
    container.innerHTML = detailed
      .map(
        ({ product, qty, subtotal }) => `
        <div class="cart-item" data-id="${product.id}">
          <img src="${encodeURI(product.image)}" alt="${product.name}" />
          <div>
            <div class="cart-item-top">
              <div class="cart-item-title">${product.name}</div>
              <button type="button" class="cart-remove" data-action="remove" data-id="${product.id}">Quitar</button>
            </div>
            <div class="cart-item-price">${formatPrice(product.price)} c/u</div>
            <div class="cart-item-bottom">
              <div class="qty-control">
                <button type="button" class="qty-btn" data-action="dec" data-id="${product.id}" aria-label="Disminuir">−</button>
                <input type="number" class="qty-value" value="${qty}" min="1" max="99" data-action="input" data-id="${product.id}" aria-label="Cantidad" />
                <button type="button" class="qty-btn" data-action="inc" data-id="${product.id}" aria-label="Aumentar">+</button>
              </div>
              <div class="cart-item-subtotal">${formatPrice(subtotal)}</div>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    container.querySelectorAll('[data-action]').forEach((el) => {
      const id = el.dataset.id;
      const action = el.dataset.action;
      if (action === 'remove') {
        el.addEventListener('click', () => removeFromCart(id));
      } else if (action === 'dec') {
        el.addEventListener('click', () => {
          const current = cart.find((i) => i.id === id);
          if (current) updateCartQty(id, current.qty - 1);
        });
      } else if (action === 'inc') {
        el.addEventListener('click', () => {
          const current = cart.find((i) => i.id === id);
          if (current) updateCartQty(id, current.qty + 1);
        });
      } else if (action === 'input') {
        el.addEventListener('change', (e) => updateCartQty(id, e.target.value));
      }
    });
  }

  // ---------- Quick View Modal ----------
  let currentQuickViewId = null;

  function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;
    currentQuickViewId = productId;

    document.getElementById('qvImage').src = encodeURI(product.image);
    document.getElementById('qvImage').alt = product.name;
    document.getElementById('qvCategory').textContent = product.categoryLabel;
    document.getElementById('qvTitle').textContent = product.name;
    document.getElementById('qvPrice').textContent = formatPrice(product.price);
    document.getElementById('qvQty').value = 1;

    const addBtn = document.getElementById('qvAddBtn');
    addBtn.onclick = () => {
      const qty = parseInt(document.getElementById('qvQty').value, 10) || 1;
      addToCart(currentQuickViewId, qty);
      closeQuickView();
    };

    const modal = document.getElementById('quickViewModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ---------- Toast ----------
  let toastTimer = null;

  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMessage');
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 3200);
  }

  function hideToast() {
    const toast = document.getElementById('toastNotification');
    if (toast) toast.classList.remove('show');
  }

  // ---------- Product Card Rendering ----------
  function createProductCardHTML(product) {
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media" data-quickview="${product.id}">
          <img src="${encodeURI(product.image)}" alt="${product.name}" loading="lazy" decoding="async" />
          ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
          <button type="button" class="product-quickview-btn" data-quickview="${product.id}">Vista rápida</button>
        </div>
        <div class="product-info">
          <span class="product-category-label">${product.categoryLabel}</span>
          <h3 class="product-title" data-quickview="${product.id}">${product.name}</h3>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            <span class="product-stock">Disponible</span>
          </div>
          <div class="product-controls">
            <div class="qty-control">
              <button type="button" class="qty-btn" data-card-dec aria-label="Disminuir cantidad">−</button>
              <input type="number" class="qty-value" value="1" min="1" max="99" aria-label="Cantidad de ${product.name}" />
              <button type="button" class="qty-btn" data-card-inc aria-label="Aumentar cantidad">+</button>
            </div>
            <button type="button" class="btn btn-primary btn-add-cart" data-card-add="${product.id}">Agregar</button>
          </div>
        </div>
      </article>
    `;
  }

  function bindProductCards(container) {
    container.querySelectorAll('.product-card').forEach((card) => {
      const qtyInput = card.querySelector('.qty-value');
      const decBtn = card.querySelector('[data-card-dec]');
      const incBtn = card.querySelector('[data-card-inc]');
      const addBtn = card.querySelector('[data-card-add]');

      decBtn.addEventListener('click', () => {
        qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
      });

      incBtn.addEventListener('click', () => {
        qtyInput.value = Math.min(99, (parseInt(qtyInput.value, 10) || 1) + 1);
      });

      addBtn.addEventListener('click', () => {
        const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
        addToCart(addBtn.dataset.cardAdd, qty);
        qtyInput.value = 1;
      });

      card.querySelectorAll('[data-quickview]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          openQuickView(el.dataset.quickview);
        });
      });
    });
  }

  // ---------- Home Featured Grid ----------
  function initFeaturedProducts() {
    const grid = document.getElementById('featuredProductsGrid');
    if (!grid) return;
    const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
    grid.innerHTML = featured.map(createProductCardHTML).join('');
    bindProductCards(grid);
  }

  // ---------- Catalog Page (Search + Category Filter + Sort) ----------
  function initCatalogPage() {
    const grid = document.getElementById('catalogProductsGrid');
    if (!grid) return;

    const searchInput = document.getElementById('catalogSearch');
    const searchClear = document.getElementById('catalogSearchClear');
    const sortSelect = document.getElementById('catalogSort');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resultsCount = document.getElementById('catalogResultsCount');

    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = (urlParams.get('categoria') || 'todos').toLowerCase();
    const validCats = ['todos', 'dijes', 'aretes', 'aretes-modelo', 'pulseras'];

    let activeCategory = validCats.includes(initialCat) ? initialCat : 'todos';
    let searchQuery = '';
    let sortMode = 'featured';

    function setActiveFilterButton() {
      filterButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.category === activeCategory);
      });
    }

    function renderCatalog() {
      const normalizedQuery = normalizeText(searchQuery);

      let filtered = PRODUCTS.filter((p) => {
        const matchesCat = activeCategory === 'todos' || p.category === activeCategory;
        const matchesQuery =
          !normalizedQuery ||
          normalizeText(p.name).includes(normalizedQuery) ||
          normalizeText(p.categoryLabel).includes(normalizedQuery);
        return matchesCat && matchesQuery;
      });

      if (sortMode === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortMode === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortMode === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'es'));
      } else {
        filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
      }

      if (resultsCount) {
        resultsCount.textContent = `Mostrando ${filtered.length} de ${PRODUCTS.length} accesorios`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <h3>No encontramos accesorios con esa búsqueda</h3>
            <p>Prueba con otro nombre o vuelve a ver toda nuestra colección.</p>
            <button type="button" class="btn btn-outline btn-sm" id="resetFiltersBtn">Ver todos los productos</button>
          </div>
        `;
        const resetBtn = document.getElementById('resetFiltersBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            activeCategory = 'todos';
            searchQuery = '';
            searchInput.value = '';
            searchClear.classList.remove('visible');
            setActiveFilterButton();
            renderCatalog();
          });
        }
        return;
      }

      grid.innerHTML = filtered.map(createProductCardHTML).join('');
      bindProductCards(grid);
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        setActiveFilterButton();
        renderCatalog();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchClear) {
          searchClear.classList.toggle('visible', searchQuery.length > 0);
        }
        renderCatalog();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchQuery = '';
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchInput.focus();
        renderCatalog();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        sortMode = e.target.value;
        renderCatalog();
      });
    }

    setActiveFilterButton();
    renderCatalog();
  }

  // ---------- Header & Mobile Navigation ----------
  function initNavigation() {
    document.querySelectorAll('.cart-trigger').forEach((btn) => {
      btn.addEventListener('click', openCart);
    });

    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    injectGlobalUI();
    initNavigation();
    renderCartUI();
    initFeaturedProducts();
    initCatalogPage();
  });
})();
