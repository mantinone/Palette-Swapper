let testColors = ['#00ffff','#00ff00','#ff00ff','#ff0000','#0000ff']

function testing(){
  console.log("Hello");
}

function generateColors(){
  changePanelColor(randomColors())
}

function changePanelColor(colors = testColors){
  let panes = document.getElementsByClassName('colorPane')
  for (var i in panes){
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
