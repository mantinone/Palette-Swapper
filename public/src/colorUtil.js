class Color {
  constructor( r=5, g=5, b=5 ){
      this.rgb = {r,g,b}
      this.hsv = Color.rgbToHsv( this.rgb )
  }

  static rgbToHsv( rgb ){
    let hsv = {}
    let max = Math.max(rgb.r,rgb.g,rgb.b)
    let min = Math.min(rgb.r,rgb.g,rgb.b)
    let delta = max - min

    if( rgb.r === max ){
      hsv.h = ((rgb.g-rgb.b)/delta)
    } else if ( rgb.g === max) {
      hsv.h = 2 + ((rgb.b-rgb.r)/delta)
    } else {
      hsv.h = 4 + ((rgb.r-rgb.g)/delta)
    }
    hsv.h *= 60
    if( hsv.h < 0 ){hsv.h += 360}

    if( max === 0 ){
      hsv.s = 0
    } else {
      hsv.s = delta/max
    }

    hsv.v = max/255

    return hsv
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

