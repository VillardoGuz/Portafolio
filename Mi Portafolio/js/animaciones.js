
window.sr = ScrollReveal();

sr.reveal('.navbar', {
duration: 2000,
origin: 'bottom'
});

sr.reveal('.header-content-left', {
duration: 2000,
origin: 'top',
distance: '300px'
});

sr.reveal('.header-content-right', {
duration: 2000,
origin: 'right',
distance: '300px'
});

sr.reveal('.header-btn', {
duration: 2000,
delay: 1000, 
origin: 'bottom'
});



sr.reveal('#Proyecto', {
  duration: 8000,
  origin: 'left',
  distance: '300px'
  });


sr.reveal('#DescripcionProyecto', {
    duration: 8000,
    origin: 'Bottom',
    distance: '900px'
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});
});
