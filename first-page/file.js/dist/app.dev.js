"use strict";

/*global console, alert, swal, prompt, $*/
$(document).ready(function () {
  // func scroll
  $(window).scroll(function () {
    // when page scrollDown 
    if (this.scrollY > 75) {
      $('nav').addClass('w-100 fixed-top shadow-sm');
      $('nav').css('background', '#fff');
      $('.nav-item:last-of-type').addClass('bg-btn');
      $('.nav-item:last-of-type a').css('color', '#fff');
      $('.pre-header').css('margin-top', '70px');
    } else {
      $('nav').removeClass('w-100 fixed-top shadow-sm');
      $('nav').css('background', 'transparent');
      $('.nav-item:last-of-type').removeClass('bg-btn');
      $('.nav-item:last-of-type a').css('color', '#000');
      $('.pre-header').css('margin-top', '0px');
    }
  }); // func toggle class & text

  $('.box_project').on('click', function () {
    $('.box_project').addClass('active');
    $('.box_express').removeClass('active');
    $('.box_project button').html('choose me');
  });
  $('.box_express').on('click', function () {
    $('.box_express').addClass('active');
    $('.box_project').removeClass('active');
    $('.box_project button').html('get started');
  }); //func toggle class 5 style

  $('.type_project .box_project button').on('click', function () {
    $('.over-lay').css('display', 'block');
    $('.contact').css('display', 'block');
    $('.type_project .contact .box_contact .box_plan .m_box_project').addClass('active');
    $('.type_project .contact .box_contact .box_plan .m_box_express').removeClass('active');
  });
  $('.type_project .box_express button').on('click', function () {
    $('.over-lay').css('display', 'block');
    $('.contact').css('display', 'block');
    $('.type_project .contact .box_contact .box_plan .m_box_express').addClass('active');
    $('.type_project .contact .box_contact .box_plan .m_box_project').removeClass('active');
  }); // func run when click el has display none

  $('.over-lay').on('click', function () {
    $('.contact').css('display', 'none');
    $('.over-lay').css('display', 'none');
  });
});

window.onload = function () {
  'use strict'; // get class icons_li

  var li = document.getElementsByClassName('icons_li');

  var _loop = function _loop(i) {
    // when click run function
    li[i].onclick = function (e) {
      // get class icons_li
      var rm_class = document.getElementsByClassName('icons_li');

      for (var _i2 = 0; _i2 < rm_class.length; _i2++) {
        // remove class active form all class icons_li
        rm_class[_i2].classList.remove('active');
      } // get class icons_l


      var replace_src = document.getElementsByClassName('icons_li');

      for (var _i3 = 0; _i3 < replace_src.length; _i3++) {
        // change img src from data-src.value to data-src2.value
        replace_src[_i3].firstElementChild.setAttribute('src', replace_src[_i3].getAttribute('data-src2'));
      } // when click fun run and add class('active')


      li[i].classList.add('active'); // get attr data-src & img src change to value attr data-src

      document.getElementById(li[i].getAttribute('data-src')).firstElementChild.setAttribute('src', li[i].getAttribute('data-src')); // get class view

      var view_data = document.getElementsByClassName('views');

      for (var _i4 = 0; _i4 < view_data.length; _i4++) {
        // remove class active fron class views
        view_data[_i4].classList.remove('active');
      } // when click el === attr data-linkView will add class active


      document.getElementById(li[i].getAttribute('data-linkView')).classList.add('active');
    };
  };

  for (var i = 0; i < li.length; i++) {
    _loop(i);
  } // get class our_li


  var li_our = document.getElementsByClassName('our_li');

  var _loop2 = function _loop2(_i) {
    // when click run function
    li_our[_i].onclick = function (e) {
      // get class our_li
      var rm_2_class = document.getElementsByClassName('our_li');

      for (var _i5 = 0; _i5 < rm_2_class.length; _i5++) {
        // remove class active form all class our_li
        rm_2_class[_i5].classList.remove('active');
      } // when click fun run and add class('active')


      li_our[_i].classList.add('active'); // get class view


      var view_data_2 = document.getElementsByClassName('view_2');

      for (var _i6 = 0; _i6 < view_data_2.length; _i6++) {
        // remove class active fron class views
        view_data_2[_i6].classList.remove('active');
      } // when click el === attr data-target will add class active


      document.getElementById(li_our[_i].getAttribute('data-target')).classList.add('active');
    };
  };

  for (var _i = 0; _i < li_our.length; _i++) {
    _loop2(_i);
  }
};
/********* Contact Page ( Agile Modal ) **********/


$('.box-agile-1').click(function () {
  setTimeout(function () {
    $('.box-agile-2').removeClass('card-color-active').addClass('card-color-not-active');
  }, 100);
  setTimeout(function () {
    $('.box-agile-1').addClass('card-color-active').removeClass('card-color-not-active');
  }, 100);
});
$('.box-agile-2').click(function () {
  setTimeout(function () {
    $('.box-agile-2').addClass('card-color-active').removeClass('card-color-not-active');
  }, 100);
  setTimeout(function () {
    $('.box-agile-1').removeClass('card-color-active').addClass('card-color-not-active');
  }, 100);
});
/********   1  - sub card  ******** */

$('.sub-card').click(function () {
  if ($(this).hasClass('sub')) {
    $(this).hide("slide", {
      direction: "right"
    }, 150);
    $('.main-card').hide("slide", {
      direction: "left"
    }, 150);
    $(this).show("slide", {
      direction: "right"
    }, 150);
    $('.main-card').show("slide", {
      direction: "left"
    }, 150);
  }

  $(this).addClass('color-shadow').removeClass('sub').removeClass('border-main');
  $('.main-card').addClass('border-main').addClass('sub2').removeClass('color-shadow');
});
$('.main-card').click(function () {
  if ($(this).hasClass('sub2')) {
    $(this).hide("slide", {
      direction: "left"
    }, 150);
    $('.sub-card').hide("slide", {
      direction: "right"
    }, 150);
    $(this).show("slide", {
      direction: "left"
    }, 150);
    $('.sub-card').show("slide", {
      direction: "right"
    }, 150);
  }

  $(this).addClass('color-shadow').removeClass('sub2').removeClass('border-main');
  $('.sub-card').addClass('border-main').addClass('sub').removeClass('color-shadow');
});
/***  Team Slider ***/

$('.team-btn-1').click(function () {
  setTimeout(function () {
    $('.team-2').fadeOut(300);
  }, 400);
  setTimeout(function () {
    $('.team-1').fadeIn(800);
  }, 700);
});
$('.team-btn-2').click(function () {
  setTimeout(function () {
    $('.team-1').fadeOut(300);
  }, 400);
  setTimeout(function () {
    $('.team-2').fadeIn(800);
  }, 700);
});