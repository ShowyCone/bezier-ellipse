const canvas = document.getElementById('miCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 400
canvas.height = 400

const defaultData = {
  radioX: 120,
  radioY: 50,
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

/* Funciona pero es la funcion vanilla ellipse
function ellipse(
  radioX = defaultData.radioX,
  radioY = defaultData.radioY,
  color = 'blue'
) {
  clearCanvas()
  defaultData.radioX = radioX
  defaultData.radioY = radioY

  ctx.beginPath()
  ctx.ellipse(
    canvas.width / 2,
    canvas.height / 2,
    radioX,
    radioY,
    0,
    0,
    Math.PI * 2
  )
  ctx.fillStyle = color
  ctx.fill()
  ctx.strokeStyle = 'black'
  ctx.stroke()
}
*/

document.getElementById('xRange').addEventListener('input', (event) => {
  //ellipse(event.target.value)
  drawEllipse(undefined, undefined, event.target.value)
})

document.getElementById('yRange').addEventListener('input', (event) => {
  //ellipse(undefined, event.target.value)
  drawEllipse(undefined, undefined, undefined, event.target.value)
})

drawEllipse(undefined, undefined, undefined, undefined)
//ellipse(120, 50, 'blue')

function drawEllipse(
  centerX = canvas.width / 2,
  centerY = canvas.height / 2,
  width = defaultData.radioX,
  height = defaultData.radioY
) {
  clearCanvas()
  defaultData.radioX = width
  defaultData.radioY = height
  ctx.beginPath()

  ctx.moveTo(centerX, centerY - height / 2)

  ctx.bezierCurveTo(
    centerX + width / 2,
    centerY - height / 2,
    centerX + width / 2,
    centerY + height / 2,
    centerX,
    centerY + height / 2
  )

  ctx.bezierCurveTo(
    centerX - width / 2,
    centerY + height / 2,
    centerX - width / 2,
    centerY - height / 2,
    centerX,
    centerY - height / 2
  )

  ctx.fillStyle = 'blue'
  ctx.fill()
  ctx.strokeStyle = 'black'
  ctx.stroke()
}
