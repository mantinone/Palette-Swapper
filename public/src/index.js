const colorAlgorithms = {
  TestColors: ()=> ['#00ffff','#00ff00','#ff00ff','#ff0000','#0000ff'],
  Random: () => randomColors(),
  RandomOffsetRGB: () => randomOffsetRGB(),
  TestFunction: () => testFunction()
}

function generateColors(){
  let algorithm = document.getElementById('algorithmSelect').value
  changePanelColor( colorAlgorithms[algorithm]() )
}

function changePanelColor(colors){
  let panes = document.getElementsByClassName('colorPane')
  for (var i = 0; i < panes.length; i++ ){
    panes[i].style.backgroundColor = colors[i]
  }
}

function randomColors(){
  let colors = []
  for (var i=0; i<5;i++){
    colors.push( randomHexColor() )
  }
  return colors
}

function randomHexColor(){
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

function randomIntRange( max=255, min = 0){
  return Math.floor(Math.random()*(max-min+1)) + min
}

function randomOffsetRGB(){
  let offset = 30
  let colors = []
  colors.push( randomHexColor() )
  let baseColor = Color.colorFromHex( colors[0] )

  for (var i = 1; i < 5; i++){
    var offsetColor = new Color( calculateOffset(baseColor.rgb.r,offset), calculateOffset(baseColor.rgb.g,offset), calculateOffset(baseColor.rgb.b,offset))
    colors.push( offsetColor.toCSS() )
  }
  return colors
}

function calculateOffset( value, offset ){
   return value+randomIntRange(offset,-1*offset)
 }

function testFunction(){
    console.log('Testing');
}
