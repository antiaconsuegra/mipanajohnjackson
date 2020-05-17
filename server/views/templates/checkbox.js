$(document).ready(function() {
  $('input[name="all"],input[name="title"]').bind('click', function() {
    var status = $(this).is(':checked');
    $('input[type="checkbox"]', $(this).parent('li')).attr('checked', status);
  });
});