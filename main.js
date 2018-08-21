console.log('yes its connected')

$('readmore').click(function() {
  event.preventDefault()
  $('p').slidedown()
  $('readmore').text('showless')
