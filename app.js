const SOCIAL_LINKS = { telegram: '', instagram: '' };
const labels = { telegram: ['↗', 'Telegram', 'More of my world 🤍'], instagram: ['◎', 'Instagram', 'Follow my moments ✨'] };
const links = document.querySelector('#social-links');
Object.entries(SOCIAL_LINKS).forEach(([key, url]) => { if (!url) return; const [icon, name, caption] = labels[key]; links.insertAdjacentHTML('beforeend', `<a class="social-link" href="${url}" target="_blank" rel="noopener noreferrer"><b>${icon}</b><span>${name}<small>${caption}</small></span></a>`); });
if (!links.children.length) links.innerHTML = '<p class="gallery__note">Add your Telegram or Instagram link in <code>app.js</code>.</p>';
