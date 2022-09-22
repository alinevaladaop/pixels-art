function selecionarCor(event) {
  const selecionada = document.querySelector('.selected');
  const aSelecionar = event.target;
  selecionada.classList.remove('selected');
  aSelecionar.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', selecionarCor);

function pintaQuadro(event) {
  const corSelecionada = document.querySelector('.selected');
  const quadroAPintar = event.target;

  if (corSelecionada.id === 'black') {
    quadroAPintar.style.backgroundColor = 'black';
  } else if (corSelecionada.id === 'rosa') {
    quadroAPintar.style.backgroundColor = 'rgb(220, 65, 168)';
  } else if (corSelecionada.id === 'amarelo') {
    quadroAPintar.style.backgroundColor = 'yellow';
  } else if (corSelecionada.id === 'verde') {
    quadroAPintar.style.backgroundColor = 'rgb(28, 176, 28)';
  }
}

const quadroNovo = document.getElementById('pixel-board');
quadroNovo.addEventListener('click', pintaQuadro);

function limpandoQuadro() {
  const limpaQuadro = document.getElementsByClassName('pixel');

  for (let i = 0; i < limpaQuadro.length; i += 1) {
    limpaQuadro[i].style.backgroundColor = 'white';
  }
}

const quadroLimpo = document.getElementById('clear-board');
quadroLimpo.addEventListener('click', limpandoQuadro);
