$(document).ready(function() {
  //TODO refactor the hard code.
//  var navTop = $('nav').offset().top;
  var navTop = 600;
//  var secHeight=$('section').height();
  var secHeight = 800;
//  var secTop=$('section:first').offset().top;
  var secTop = 900;

  setTimeout(function() {
    $.scrollTo('0px', 0);
  }, 100)

  setTimeout(function() {
    $.scrollTo('0px', 0);
  }, 100);

  var preStr = '&#8226;<br/>';
  var nextStr = '';
  for (var i = 1; i < 3; i++) {
    preStr += '&#8226;';
    nextStr += '&#8226;';
    for (var j = 1; j < i * 4; j++) {
      preStr += '&nbsp;';
    }
    for (var j = (3 - i) * 4; j > 1; j--) {
      nextStr += '&nbsp;';
    }
    preStr += '&#8226;<br/>';
    nextStr += '&#8226;<br/>';
  }
  nextStr += '&#8226;<br/>';

  $('section .next').append(nextStr);
  $('section .pre').append(preStr);

  $('section .next').click(function() {
    $.scrollTo($(this).parent().next('section'), 500);
  });

  $('section .pre').click(function() {
    if ($(this).parent().prev('section').length > 0) $.scrollTo($(this).parent().prev('section'), 500);
    else
      $.scrollTo('0px', 500);
  });

  $(document).scroll(function() {
    var curTop = $(document).scrollTop();
    if (curTop >= navTop) {
      console.log(navTop)
      $('nav').addClass('nav-fix');
      for (var i = 0; i <= $('section').length; i++) {
        if (curTop < secTop + i * secHeight) {
          $('nav div').removeClass('nav-current');
          $('nav div:eq(' + i + ')').addClass('nav-current');
          break;
        }
      }
    } else {
      $('nav').removeClass('nav-fix');
      $('nav div').removeClass('nav-current');
      $('nav div:first').addClass('nav-current');
    }
  });

  $('#play').click(function() {
    $('nav').show();
    $('section').show();
    $.scrollTo($('section:first'), 500);
  });

  $('nav div').click(function() {
    var scrollId = $(this).attr('title').toLowerCase();
    $.scrollTo('#' + scrollId, 500);
  });
});