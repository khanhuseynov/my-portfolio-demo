$(document).ready(function(){
  var text = 'Fronted Developer',
      index = 0;
  function typingEffect() {
    if (index < text.length) {
      $('#display').append(text[index]);
      index++;
      setTimeout(typingEffect, 100);
    } else {
      setTimeout(function(){
        var length = text.length;
        function removeLetters() {
          if (length > 0) {
            $('#display').text(text.slice(0, length-1));
            length--;
            setTimeout(removeLetters, 100);
          } else {
            index = 0;
            setTimeout(typingEffect, 200);
          }
        }
        removeLetters();
      }, 2000);
    }
  }
  typingEffect();
});


$(window).scroll(function() {
  $('.hiddenDiv').each(function(){
    var elementPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (elementPos < topOfWindow + $(window).height()) {
      $(this).addClass('fadeInUp');
    }
  });
});
