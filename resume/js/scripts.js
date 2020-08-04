$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#list-tab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})