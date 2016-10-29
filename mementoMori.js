$(function() {
  $('.modalised').on('click', function() {
    var path = this.src;
    var interim = path.split(/(_thb)/g);
    var result = interim[0].concat(interim[2]);
    var caption = this.alt;
    $('#modal-image').attr('src', result);
    $('#modal-caption').text(caption);
    $('#imgModal').modal('show');
  });
});
