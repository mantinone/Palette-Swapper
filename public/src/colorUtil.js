class Color {
  constructor( r=5, g=5, b=5 ){
      this.rgb = {r,g,b}
  }

  static hexToDec( hex ){
    return parseInt(hex, 16)
  }

  static decToHex( dec ){
    var decString = dec.toString(16)
    if (decString.length < 2){
      decString = '0' + decString
    }
    return decString
  }

  static colorFromHex( cssHex ){
    return new Color( Color.hexToDec(cssHex.substr(1,2)), Color.hexToDec(cssHex.substr(3,2)), Color.hexToDec(cssHex.substr(5,2)) )
  }

  toCSS(){
    var cssString = '#'
    for ( var i in this.rgb ){
      cssString = cssString.concat( Color.decToHex(this.rgb[i]) )
    }
    return cssString
  }
}

