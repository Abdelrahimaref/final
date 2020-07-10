"use strict";

/****  Request Page  ****/
$('.ticket').click(function () {
  setTimeout(function () {
    $('.send-box').fadeOut(300);
    $('.ticket').addClass('nav-icon-color').removeClass('text-white');
  }, 200);
  setTimeout(function () {
    $('.request-form').fadeIn(300);
    $('.send').removeClass('nav-icon-color').addClass('text-white');
  }, 500);
});
$('.send').click(function () {
  setTimeout(function () {
    $('.request-form').fadeOut(300);
    $('.ticket').removeClass('nav-icon-color').addClass('text-white');
  }, 200);
  setTimeout(function () {
    $('.send-box').fadeIn(300);
    $('.send').addClass('nav-icon-color').removeClass('text-white');
  }, 500);
});
/*** web product modal ***/

$('.account-icon').click(function () {
  $('.account-icon').addClass('nav-icon-bg-color').removeClass('grey-bg-color');
  $('.date-icon').removeClass('nav-icon-bg-color').addClass('grey-bg-color');
  setTimeout(function () {
    $('.account').fadeIn(300);
  }, 500);
  setTimeout(function () {
    $('.date').fadeOut(300);
  }, 200);
});
$('.date-icon').click(function () {
  $('.date-icon').addClass('nav-icon-bg-color').removeClass('grey-bg-color');
  $('.account-icon').removeClass('nav-icon-bg-color').addClass('grey-bg-color');
  setTimeout(function () {
    $('.date').fadeIn(300);
  }, 500);
  setTimeout(function () {
    $('.account').fadeOut(300);
  }, 200);
});

function success() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Edit Done Succefully'
  });
}

function accept() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 2500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Sent successfully'
  });
}

function Canceled() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Refused successfully'
  });
}

function complain() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Compain Sent successfully'
  });
}

function success2() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 5500
  });
  Toast.fire({
    type: 'success',
    title: '4SOFT has received your request successfully and we will answer soon'
  });
}

function success3() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3000
  });
  Toast.fire({
    type: 'success',
    title: 'Updated successfully'
  });
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 300) {
    $('#goUPButton').slideDown(700);
  } else {
    $('#goUPButton').slideUp(700);
  }
});

function goUP() {
  window.scrollTo(0, 0);
}

;
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});
var real = document.getElementById('real-life');
var btn = document.getElementById('choose-btn-pc');
var customTxt = document.getElementById('customTxt');
btn.addEventListener("click", function () {
  real.click();
});
real.addEventListener("change", function () {
  if (real.value) {
    customTxt.innerHTML = real.value;
  } else {
    customTxt.innerHTML = "No File Chosen yet !";
  }
});