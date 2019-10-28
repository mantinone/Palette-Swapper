function testing(){
  console.log("Hello");
}

function changePanelColor(colors = testColors){
  let panes = document.getElementsByClassName('colorPane')
  for (var i in panes){
    panes[i].style.backgroundColor = colors[i]
  }
}


let testColors = ['#00ffff','#00ff00','#ff00ff','#ff0000','#0000ff']