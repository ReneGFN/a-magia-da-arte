const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.navigation a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('[data-contact]').addEventListener('click', (event) => {
  event.preventDefault();
  alert('Assim que o WhatsApp da loja for definido, este botão levará o cliente diretamente para a conversa.');
});

const occasions = {
  presente: { icon: '✦', title: 'Presentes com afeto', text: 'Canecas, caixas, pelúcias e muitas opções para tornar uma lembrança inesquecível.' },
  fe: { icon: '✝', title: 'Fé que acompanha', text: 'Imagens, terços, lembranças e artigos que ajudam a expressar a sua devoção.' },
  casa: { icon: '⌂', title: 'Detalhes para o lar', text: 'Peças decorativas e opções acolhedoras para transformar os seus espaços.' },
  criatividade: { icon: '✎', title: 'Ideias em movimento', text: 'Papelaria e materiais para seus projetos, estudos e momentos de criação.' },
};

document.querySelectorAll('.occasion').forEach((button) => button.addEventListener('click', () => {
  const choice = occasions[button.dataset.occasion];
  document.querySelectorAll('.occasion').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  document.querySelector('#recommendation-icon').textContent = choice.icon;
  document.querySelector('#recommendation-title').textContent = choice.title;
  document.querySelector('#recommendation-text').textContent = choice.text;
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  lightboxImage.src = item.dataset.image;
  lightboxImage.alt = item.querySelector('img').alt;
  lightbox.querySelector('p').textContent = item.dataset.caption;
  lightbox.showModal();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

document.querySelector('#year').textContent = new Date().getFullYear();
