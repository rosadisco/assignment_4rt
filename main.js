console.log('yes its connected')

$('.readmore a').click(function() {
  event.preventDefault()
  $('#show-this-on-click').slideDown()
  $('.readmore a').hide()
  $('.readless').show()
})

$('.readless a').click(function() {
  event.preventDefault()
  $('#show-this-on-click').slideUp()
  $('.readless').hide()
  $('.readmore a').show()
})
