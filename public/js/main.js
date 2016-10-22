$(() => {
$.material.init();
  let num = 0;
  $('.option').change(e => {
    ($(this).text().length > 0) ?
      $('a[name="newOptionButton"]').prop('disable', false) :
      $('a[name="newOptionButton"]').prop('disable', true);
  });
  $('a[name="newOptionButton"]').click( () => {

        num++;
        $('#pollAnswer').clone()
                    .attr('id', `answer${num}`)
                    .appendTo('.answers-container')
                    .val('')
                    .focus();
      });

  $('#deleteNewAnswer').click(e => {
      // TODO
  });
  });
