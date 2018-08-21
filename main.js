console.log('yes its connected')

event.preventDefault()

$('readmore').click(function() {
  $('p').slidedown()
  $('readmore').text('showless')
