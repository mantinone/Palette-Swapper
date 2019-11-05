const colorAlgorithms = {
  TestColors: ()=> ['#00ffff','#00ff00','#ff00ff','#ff0000','#0000ff'],
  Random: () => randomColors(),
  RandomOffsetRGB: () => randomOffset(),
  TestFunction: () => testFunction()
}

function generateColors(){
  let algorithm = document.getElementById('algorithmSelect').value
  console.log(colorAlgorithms[algorithm]);
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

 function randomOffset(){
//   //let colors = []
//   //colors.push randomHexColor()
//   for (int i = 1; i < 5; i++){
//     //randomly offset each value
//   }
//
 }

function testFunction(){
    console.log('Testing');
}
