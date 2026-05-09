document.addEventListener('DOMContentLoaded', () => {
// mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('shadow-2xl', window.scrollY > 30);
  }, { passive: true });

  // reveal
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ===== PRODUCT DATA =====
  const phones = [
    { name: 'iPhone 16 Pro Max', tag: 'New · 256GB', price: 1749000, img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'Samsung Galaxy S24 Ultra', tag: 'New · 512GB', price: 1399000, img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'iPhone 15 Pro', tag: 'New · 256GB', price: 1199000, img: 'https://images.unsplash.com/photo-1696446702239-e76293f3a78f?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'Google Pixel 9 Pro', tag: 'New · 256GB', price: 980000, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'iPhone 14 Pro Max', tag: 'Pre-Owned · Excellent · 92% Battery', price: 749000, img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Excellent' },
    { name: 'iPhone 13', tag: 'Pre-Owned · Good · 88% Battery', price: 419000, img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Good' },
    { name: 'Samsung Galaxy S23', tag: 'Pre-Owned · Excellent · 90% Battery', price: 549000, img: 'https://images.unsplash.com/photo-1675953935267-e039e13e1baa?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Excellent' },
    { name: 'iPhone 12', tag: 'Pre-Owned · Good · 85% Battery', price: 329000, img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Good' },
  ];

  const laptops = [
    { name: 'MacBook Pro 14" M4', tag: 'New · 16GB / 512GB', price: 2499000, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'MacBook Air 13" M3', tag: 'New · 8GB / 256GB', price: 1499000, img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'Dell XPS 15', tag: 'New · i7 · 32GB · RTX 4060', price: 2299000, img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'HP Spectre x360 14', tag: 'New · i7 · 16GB · OLED', price: 1899000, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80', cond: 'new' },
    { name: 'MacBook Pro 13" M2', tag: 'Pre-Owned · Excellent · 96% Battery', price: 1099000, img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Excellent' },
    { name: 'Dell Latitude 7440', tag: 'Pre-Owned · Good · i7 · 16GB', price: 599000, img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Good' },
    { name: 'Lenovo ThinkPad X1 Carbon', tag: 'Pre-Owned · Excellent · i7 · 16GB', price: 729000, img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Excellent' },
    { name: 'MacBook Air M1', tag: 'Pre-Owned · Good · 89% Battery', price: 649000, img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=600&q=80', cond: 'preowned', badge: 'Good' },
  ];

  const preowned = [
    phones[4], phones[5], phones[6], phones[7],
    laptops[4], laptops[5], laptops[6], laptops[7]
  ];

  // ===== RENDER =====
  const fmt = n => '₦' + n.toLocaleString('en-NG');
  const waLink = (name) => `https://wa.me/2348024100099?text=Hi%20KOVA%2C%20I'd%20like%20to%20order%20the%20${encodeURIComponent(name)}`;

  function pill(badge) {
    if (!badge) return '<span class="pill bg-accent/15 text-accent border border-accent/30">New</span>';
    const cls = badge === 'Excellent' ? 'bg-green-500/15 text-green-400 border border-green-500/30'
              : badge === 'Good' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
              : 'bg-orange-500/15 text-orange-400 border border-orange-500/30';
    return `<span class="pill ${cls}">${badge}</span>`;
  }

  function card(p) {
    return `
      <article class="product-card reveal rounded-2xl overflow-hidden p-5 flex flex-col" data-cond="${p.cond}">
        <div class="aspect-square overflow-hidden rounded-xl bg-panel2 flex items-center justify-center mb-4 relative">
          <img src="${p.img}" alt="${p.name}" class="prod-img w-full h-full object-cover" loading="lazy"/>
          <div class="absolute top-3 left-3">${pill(p.badge)}</div>
        </div>
        <h3 class="font-semibold text-base">${p.name}</h3>
        <p class="text-white/45 text-xs mt-1">${p.tag}</p>
        <div class="mt-auto pt-4 flex items-center justify-between gap-2">
          <p class="font-bold text-lg">${fmt(p.price)}</p>
          <div class="flex gap-1.5">
            <button class="add-cart w-9 h-9 rounded-full border border-white/15 hover:border-accent hover:text-accent transition flex items-center justify-center" data-name="${p.name}" aria-label="Add to cart">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <a href="${waLink(p.name)}" target="_blank" class="w-9 h-9 rounded-full bg-green-500 hover:bg-green-400 text-black flex items-center justify-center transition" aria-label="WhatsApp order">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.6-.6-.6-1.1-1.3-1.5-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.4.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  document.getElementById('phoneGrid').innerHTML = phones.map(card).join('');
  document.getElementById('laptopGrid').innerHTML = laptops.map(card).join('');
  document.getElementById('preownedGrid').innerHTML = preowned.map(card).join('');

  // observe new reveals
  document.querySelectorAll('.product-card.reveal').forEach(el => io.observe(el));

  // segment filter on phone grid
  const segs = document.querySelectorAll('.seg-btn');
  segs.forEach(s => s.addEventListener('click', () => {
    segs.forEach(x => { x.classList.remove('seg-active'); x.classList.add('text-white/60'); });
    s.classList.add('seg-active'); s.classList.remove('text-white/60');
    const f = s.dataset.filter;
    document.querySelectorAll('#phoneGrid > [data-cond]').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.cond === f) ? '' : 'none';
    });
  }));

  // repair form
  document.getElementById('repairForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
    document.getElementById('repairOk').classList.remove('hidden');
  });

  // simple cart counter
  let cartN = 0;
  const cartCount = document.getElementById('cartCount');
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart');
    if (!btn) return;
    cartN++;
    cartCount.textContent = cartN;
    cartCount.classList.remove('hidden');
    cartCount.classList.add('flex');
    btn.innerHTML = '<svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>';
    setTimeout(() => {
      btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
    }, 1400);
  });
});
