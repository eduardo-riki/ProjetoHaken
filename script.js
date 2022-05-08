const iconesSolLua = document.querySelector('.icones-sol-lua')

document.querySelector('.botao-mudanca-tema').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  const currentRotation = parseInt(getComputedStyle(iconesSolLua).getPropertyValue('--rotacao'))
  iconesSolLua.style.setProperty('--rotacao', currentRotation + 180)
})