$(document).ready(function() {
  var sig = $('.sigPad').signaturePad({
    drawOnly: true,
    clear: '#clear'
  });
  $('#name').val('');
  $('#swear').val('');
});
