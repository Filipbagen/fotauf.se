function view (name) {
  if (name) {
    var imageElement = document.getElementById('popup')
    var bg = 'assets/img/' + name + '.jpg'
    imageElement.src = bg
  }


  var overlayElement = document.getElementById('overlay')
  overlayElement.className = 'overlay active'

  if (name) {
    overlayElement.className = 'active'
  } else {
    overlayElement.className = ''
  }
}
