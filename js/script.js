$('.carroselDireitosBasicos').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.carroselMiniDireitos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});



function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}

const btnRandon = document.querySelector('#btnRandon');

btnRandon.addEventListener('click', randomizer)

const footer = document.querySelector('.footerConteudo');
const body = document.querySelector('.conteudo-geral');
const drFran = document.querySelector('.cardDrFran');
const header = document.querySelector('.headerConteudo');

function randomizer() {
  footer.style = 'background-color:'+generateColor()+';';
  body.style = 'background-color:'+generateColor()+';';
  drFran.style = 'background-color:'+generateColor()+';';
  header.style = 'background-color:'+generateColor()+';';
}