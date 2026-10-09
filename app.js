const SOCIAL_LINKS = {
  telegram: 'https://t.me/+fkCmvZq9PzljMjhi',
  instagram: 'https://www.instagram.com/my.naastya?psln=dDFhenBoOTdjeGIx&utm_source=qr',
  threads: 'https://www.threads.com/@my.naastya?igshid=NTc4MTIwNjQ2YQ=='
};
const labels = {
  telegram: ['↗', 'Telegram', 'More of my world 🤍'],
  instagram: ['◎', 'Instagram', 'Follow my moments ✨'],
  threads: ['@', 'Threads', 'A little more from me']
};
const links = document.querySelector('#social-links');
Object.entries(SOCIAL_LINKS).forEach(([key, url]) => { if (!url) return; const [icon, name, caption] = labels[key]; links.insertAdjacentHTML('beforeend', `<a class="social-link" href="${url}" target="_blank" rel="noopener noreferrer"><b>${icon}</b><span>${name}<small>${caption}</small></span></a>`); });
if (!links.children.length) links.innerHTML = '<p class="link-note">Add your social links in <code>app.js</code>.</p>';
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('.mini-gallery img').forEach((image) => image.addEventListener('click', () => { lightbox.querySelector('img').src = image.src; lightbox.setAttribute('aria-hidden', 'false'); }));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox || event.target.tagName === 'BUTTON') lightbox.setAttribute('aria-hidden', 'true'); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') lightbox.setAttribute('aria-hidden', 'true'); });
