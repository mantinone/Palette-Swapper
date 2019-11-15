class Color {
  constructor( r=5, g=5, b=5 ){
      this.rgb = {r,g,b}
      this.hsv = Color.rgbToHsv( this.rgb )
  }

  static rgbToHsv( rgb ){
    let hsv = { h:0, s:0, v:0}
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

  static hsvToRgb( hsv ){
    let rgb = { r:0, g:0, b:0 }

    let max = hsv.v * 255
    console.log(max);
    let delta = max * hsv.s
    let min = max - delta


    let hDiv = hsv.h/60

    if( hsv.h <= 60 || hsv.h > 300 ){
      rgb.r = max
      if( hsv.h <= 60 ){
        rgb.b = min
        rgb.g = hDiv*delta + min
      } else {
        rgb.g = min
        rgb.b = (6 - hDiv)*delta + min
      }
    } else if ( hsv.h > 60 && hsv.h <= 180 ){
      rgb.g = max
      if (hsv.h <= 120 ){
        rgb.b = min
        rgb.r = (2 - hDiv)*delta + min
      } else {
        rgb.r = min
        rgb.b = (hDiv - 2)*delta + min
      }
    } else {
      rgb.b = max
      if ( hsv.h <= 240 ){
        rgb.r = min
        rgb.g = (4 - hDiv)*delta + min
      } else {
        rgb.g = min
        rgb.r = (hDiv - 4)*delta + min
      }
    }

    rgb.r = Math.round(rgb.r)
    rgb.g = Math.round(rgb.g)
    rgb.b = Math.round(rgb.b)

    return rgb
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

