$(function(){
  $('#presentation').show();
  $('#experiences').hide();
  $('#formations').hide();
  $('#competences').hide();
  $('#benevoles').hide();
  $('#contacts').hide();

  $('#pres').click(function(){
    $('#presentation').show();
    $('#experiences').hide();
    $('#formations').hide();
    $('#competences').hide();
    $('#benevoles').hide();
    $('#contacts').hide();
  });

  $('#form').click(function(){
    $('#formations').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#competences').hide();
    $('#benevoles').hide();
    $('#contacts').show();
  });

    $('#comp').click(function(){
      $('#competences').show();
      $('#presentation').hide();
      $('#experiences').hide();
      $('#formations').hide();
      $('#benevoles').hide();
      $('#contacts').show();
    });

  $('#expe').click(function(){
    $('#experiences').show();
    $('#presentation').hide();
    $('#formations').hide();
    $('#competences').hide();
    $('#benevoles').hide();
    $('#contacts').show();
  });

  $('#bene').click(function(){
    $('#benevoles').show();
    $('#experiences').hide();
    $('#presentation').hide();
    $('#formations').hide();
    $('#competences').hide();
    $('#contacts').show();
  });

  $('#cont').click(function(){
    $('#contacts').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#competences').hide();
    $('#formations').hide();
    $('#benevoles').hide();
});

$('.nav-collapse').click('li', function(){
  $('.nav-collapse').collapse('hide');
});
// pour mon trait fixe au click
$(function() {
    $('a').click(function(){
        $('a').removeClass('underline');
        $(this).addClass('underline');
    });
});
});

// test pour mouvement des cards
// $('body').mousemove(function(e) {
//    var amountMovedX = (e.pageX * -0.53 / 6);
//    var amountMovedY = (e.pageY * -0.53 / 6);
//    $('.card').css('left', amountMovedX + 'px');
//     $('.card').css('top', amountMovedY + 'px');
// });
