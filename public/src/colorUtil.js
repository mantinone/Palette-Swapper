class Color {
  constructor( r=0, g=0, b=0 ){
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
    return new Color( Color.hexToDec(cssHex.substr(2,2)), Color.hexToDec(cssHex.substr(4,2)), Color.hexToDec(cssHex.substr(6,2)) )
  }

  toCSS(){
    var cssString = '0x'
    for ( var i in this.rgb ){
      cssString = cssString.concat( Color.decToHex(this.rgb[i]) )
    }
    return cssString
  }
}

