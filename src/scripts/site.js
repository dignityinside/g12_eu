const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector('[data-navigation]');
const toggle = menu?.querySelector('.navigation__toggle');
const items = menu?.querySelector('.navigation__items');
function closeMenu(returnFocus = false) {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', toggle.dataset.openLabel);
  items?.classList.remove('navigation__items--open');
  document.body.classList.remove('navigation-open');
  if (returnFocus) toggle?.focus();
}
toggle?.addEventListener('click', () => {
  if (toggle.getAttribute('aria-expanded') === 'true') return closeMenu();
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', toggle.dataset.closeLabel);
  items.classList.add('navigation__items--open');
  document.body.classList.add('navigation-open');
  window.setTimeout(() => {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      items.querySelector('a.navigation__item')?.focus({ preventScroll: true });
    }
  }, 200);
});
document.addEventListener('pointerdown', event => {
  if (!menu?.contains(event.target)) closeMenu();
});
menu?.addEventListener('keydown', event => {
  if (toggle?.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') closeMenu(true);
  if (event.key !== 'Tab') return;
  const focusable = [...menu.querySelectorAll('button, a, select')].filter(element => element.offsetParent !== null);
  const first = focusable[0], last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
window.matchMedia('(min-width: 1024px)').addEventListener('change', () => closeMenu());
document.querySelector('[data-language-select]')?.addEventListener('change', event => {
  const destination = event.target.value;
  try { localStorage.setItem('locale', destination.split('/')[1]); } catch {}
  window.location.assign(destination + window.location.hash);
});
const sectionLinks = [...(menu?.querySelectorAll('a[href*="#"]') ?? [])];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  sectionLinks.forEach(link => {
    const active = link.hash === `#${visible.target.id}`;
    link.classList.toggle('navigation__item--active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .1, .25, .5] });
sectionLinks.forEach(link => { const section = document.getElementById(link.hash.slice(1)); if (section) observer.observe(section); });
const topButton = document.querySelector('[data-back-to-top]');
function updateTopButton() { if (topButton) topButton.hidden = window.scrollY <= 400; }
window.addEventListener('scroll', updateTopButton, { passive: true });
updateTopButton();
topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  document.querySelector('.header .brand')?.focus({ preventScroll: true });
});
document.querySelector('[data-show-map]')?.addEventListener('click', () => {
  const map = document.querySelector('iframe.map');
  map.src = map.dataset.src;
  map.hidden = false;
  document.querySelector('[data-map-placeholder]').hidden = true;
});
document.querySelector('[data-pastor-toggle]')?.addEventListener('click', event => {
  const button = event.currentTarget;
  const biography = document.getElementById('pastor-biography');
  biography.hidden = !biography.hidden;
  button.setAttribute('aria-expanded', String(!biography.hidden));
  button.textContent = biography.hidden ? button.dataset.more : button.dataset.less;
});
document.querySelector('[data-copy-iban]')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('.donation__status');
  button.disabled = true;
  status.textContent = '';
  try {
    await navigator.clipboard.writeText('DE19870958245028779013');
    status.textContent = button.dataset.copied;
  } catch { status.textContent = button.dataset.error; }
  finally { button.disabled = false; }
});
