const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelector('#year').textContent = new Date().getFullYear();

const contactEmail = 'ecorte.in@gmail.com';
document.querySelectorAll('a[href*="info@ecorte.in"]').forEach((link) => {
  link.href = link.href.replace('info@ecorte.in', contactEmail);
  link.textContent = link.textContent.replace('info@ecorte.in', contactEmail);
});
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = '<img src="assets/images/ecorte-logo.png" alt="Ecorte Ventures LLP">';
  brand.style.display = 'inline-flex';
  brand.style.alignItems = 'center';
  brand.querySelector('img').style.cssText = 'display:block;width:auto;height:43px;max-width:270px;object-fit:contain';
});

const contactDetails = `
  <div class="contact-details">
    <div><span>Call Mustafa Mojawala</span><a href="tel:+919321065511">+91 93210 65511</a></div>
    <div><span>Call Husain Abbasi</span><a href="tel:+919930727678">+91 99307 27678</a></div>
    <div><span>Office landline</span><a href="tel:+9122350101187">+91 22 3501 0187</a></div>
    <div class="address"><span>Visit us</span><address>Ecorte Ventures LLP<br>A-407, Sussex Industrial Estate, Dadoji Kondev Marg, Dhaku Prabhuchi Wadi, Ranibaug, Byculla East, Mumbai, Maharashtra 400027</address></div>
  </div>`;
const directContact = document.querySelector('.contact-direct');
if (directContact) directContact.insertAdjacentHTML('afterend', contactDetails);
document.querySelectorAll('.site-footer .footer-top').forEach((footer) => {
  footer.insertAdjacentHTML('beforeend', '<div class="footer-phones"><span>CALL US</span><a href="tel:+919321065511">Mustafa · +91 93210 65511</a><a href="tel:+919930727678">Husain · +91 99307 27678</a><a href="tel:+9122350101187">Office · +91 22 3501 0187</a></div>');
});
const contactStyles = document.createElement('style');
contactStyles.textContent = `.contact-details{margin-top:34px;display:grid;gap:18px}.contact-details span,.footer-phones span{display:block;font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;opacity:.65}.contact-details a{font:800 20px 'Manrope',sans-serif;border-bottom:1px solid var(--ink)}.contact-details address{font-style:normal;font-size:14px;line-height:1.55;max-width:460px}.footer-phones{display:flex;flex-direction:column;gap:4px;font-size:12px;color:#bac4c2}.footer-phones span{margin-bottom:4px}.footer-phones a:hover{color:#fff}@media(max-width:850px){.site-footer .footer-top{grid-template-columns:1fr 1fr}.footer-phones{grid-column:1/-1}}@media(max-width:520px){.site-footer .footer-top{grid-template-columns:1fr}.footer-phones{grid-column:auto}}`;
document.head.append(contactStyles);

if (document.querySelector('.page-hero, .contact-section')) {
  const pageStyles = document.createElement('link');
  pageStyles.rel = 'stylesheet';
  pageStyles.href = 'assets/css/pages.css';
  document.head.append(pageStyles);
}

document.querySelector('#inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Website enquiry: ${data.get('service')}`;
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`;
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
