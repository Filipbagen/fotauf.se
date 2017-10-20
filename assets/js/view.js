function view (name) {
  var width = window.innerWidth

  if (width > 500) {
    var imageElement = document.getElementById('popup')
    var overlayElement = document.getElementById('overlay')

    if (name) {
      var bg
      if (name.charAt(0) === 'l') {
        bg = 'assets/img/landscape-thumb' + name.slice(9) + '.jpg'
      } else if (name.charAt(0) === 'p') {
        bg = 'assets/img/portrait-thumb' + name.slice(8) + '.jpg'
      } else if (name.charAt(0) === 'c') {
        bg = 'assets/img/city-thumb' + name.slice(4) + '.jpg'
      }
      imageElement.src = bg

      imageElement.src = 'assets/img/' + name + '.jpg'
      overlayElement.className = 'active'
    } else {
      overlayElement.className = ''
    }
  }
}
