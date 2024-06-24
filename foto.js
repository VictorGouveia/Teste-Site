const carousel = document.getElementById('carousel');
  const slides = carousel.querySelector('.slides');
  const slideCount = slides.querySelectorAll('.slide').length;
  let currentIndex = 0;

  // Função para mudar para o próximo slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlide();
  }

  // Função para atualizar a exibição do slide
  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Configurando o intervalo de mudança de slide automático
  setInterval(nextSlide, 3500);


  const menu = document.querySelector('.menu')
const navmenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
});