const SOCIAL_LINKS = {
  telegram: 'https://t.me/+fkCmvZq9PzljMjhi',
  instagram: 'https://www.instagram.com/my.naastya?psln=dDFhenBoOTdjeGIx&utm_source=qr',
  threads: 'https://www.threads.com/@my.naastya?igshid=NTc4MTIwNjQ2YQ=='
};
const icons = {
  telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 4.2 18.3 20c-.2 1.1-.8 1.4-1.7.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.2 14.1l-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.5c.9-.3 1.7.2 1.5.7Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".8" class="solid"/></svg>',
  threads: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.1 21c-4.6 0-7.3-3-7.3-8.1 0-5.3 2.8-9 7.5-9 4.1 0 6.8 2.3 7.2 6.1l-2.5.4c-.3-2.6-1.9-4-4.7-4-3.1 0-4.9 2.4-4.9 6.5 0 3.7 1.6 5.8 4.7 5.8 2.8 0 4.4-1.4 4.4-3.8 0-1.8-.9-2.8-2.4-2.8-1.3 0-2.1.8-2.1 1.9 0 .9.6 1.4 1.5 1.4.7 0 1.3-.3 1.8-.8l1.3 1.6c-.8 1-2 1.5-3.4 1.5-2.2 0-3.7-1.4-3.7-3.6 0-2.5 1.9-4.3 4.7-4.3 3.1 0 5 2 5 5.2 0 3.7-2.7 6-7.1 6Z"/></svg>'
};
const links = document.querySelector('#social-links');
Object.entries(SOCIAL_LINKS).forEach(([key, url]) => { if (!url) return; links.insertAdjacentHTML('beforeend', `<a class="social-link social-link--${key}" href="${url}" aria-label="${key === 'telegram' ? 'Telegram' : key === 'instagram' ? 'Instagram' : 'Threads'}" target="_blank" rel="noopener noreferrer">${icons[key]}</a>`); });
if (!links.children.length) links.innerHTML = '<p class="link-note">Add your social links in <code>app.js</code>.</p>';
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('.mini-gallery img').forEach((image) => image.addEventListener('click', () => { lightbox.querySelector('img').src = image.src; lightbox.setAttribute('aria-hidden', 'false'); }));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox || event.target.tagName === 'BUTTON') lightbox.setAttribute('aria-hidden', 'true'); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') lightbox.setAttribute('aria-hidden', 'true'); });

// Let the hero portrait gently dissolve as the page scrolls down.
const heroPhoto = document.querySelector('.hero-photo');
if (heroPhoto) {
  let fadeFrame = 0;
  const updateHeroFade = () => {
    if (fadeFrame) return;
    fadeFrame = requestAnimationFrame(() => {
      const distance = Math.max(260, Math.min(440, window.innerHeight * 0.58));
      const progress = Math.min(1, Math.max(0, window.scrollY / distance));
      heroPhoto.style.opacity = String(1 - progress);
      heroPhoto.style.transform = 'translateY(' + (progress * 18) + 'px)';
      fadeFrame = 0;
    });
  };
  heroPhoto.style.willChange = 'opacity, transform';
  window.addEventListener('scroll', updateHeroFade, { passive: true });
  updateHeroFade();
}

