/********* Contact Page ( Agile Modal ) **********/

$('.box-agile-1').click(function(){
  setTimeout(() => {
    $('.box-agile-2').removeClass('card-color-active').addClass('card-color-not-active');
  }, 100);
  setTimeout(() => {
    $('.box-agile-1').addClass('card-color-active').removeClass('card-color-not-active');
  }, 100);
})
$('.box-agile-2').click(function(){
  setTimeout(() => {
    $('.box-agile-2').addClass('card-color-active').removeClass('card-color-not-active');
  }, 100);
  setTimeout(() => {
    $('.box-agile-1').removeClass('card-color-active').addClass('card-color-not-active');
  }, 100);
})


/********** Desktop page  ********/
var iNum = 0 ; 
var xPrice = 0 ; 
$('.radio-dsktop').click(function(){
  if($(this).prop("checked") == true) {
    iNum = iNum + 1 ;
    $('.num--box').text(iNum);
    $(".box--p").before('<div class=" '+$(this).val()+' d-flex justify-content-between mt-3">' + '<img class=" ' + $(this).val()+'" style="width:25px" src =\"images/desktop/'+$(this).val()+'.png'+'">' + '<li class=' + $(this).val() +'>' + $(this).val()  +'</li>' + '</div>');
    xPrice = parseInt(xPrice) + parseInt($(this).parent().parent().attr('value'));
    $('.box--price').text(xPrice);
  }
  else if($(this).prop("checked") == false) {
    iNum = iNum - 1;
    $('.num--box').text(iNum);
    var ele = $(this).val();
    $('.'+ele).remove(); 
    xPrice = parseInt(xPrice) - parseInt($(this).parent().parent().attr('value'));
    $('.box--price').text(xPrice);
  }
});

/********** technology page  *******/
$('.data-btn').click(function(){
  setTimeout(function(){
    $('.for-design').fadeOut(300);
    $('.for-workflow').fadeOut(300);
    $('.data-btn').addClass('icon-card--active');
    $('.design-btn').removeClass('icon-card--active');
    $('.workflow-btn').removeClass('icon-card--active');
    $('.data-btn img').attr("src" , "images/white-1.svg");
    $('.design-btn img').attr("src" , "images/light-2.svg");    
    $('.workflow-btn img').attr("src" , "images/light-3.svg");
  },400)
  setTimeout(function(){
    $('.for-data').fadeIn(800);
  },700)
});
$('.design-btn').click(function(){
  setTimeout(function(){
    $('.for-data').fadeOut(300);
    $('.for-workflow').fadeOut(300);
    $('.design-btn').addClass('icon-card--active');
    $('.data-btn').removeClass('icon-card--active');
    $('.workflow-btn').removeClass('icon-card--active');
    $('.data-btn img').attr("src" , "images/light-1.svg");
    $('.design-btn img').attr("src" , "images/white-2.svg");    
    $('.workflow-btn img').attr("src" , "images/light-3.svg");
  },400)
  setTimeout(function(){
    $('.for-design').fadeIn(800);
  },700)
});
$('.workflow-btn').click(function(){
  setTimeout(function(){
    $('.for-data').fadeOut(300);
    $('.for-design').fadeOut(300);
    $('.workflow-btn').addClass('icon-card--active');
    $('.design-btn').removeClass('icon-card--active');
    $('.data-btn').removeClass('icon-card--active');
    $('.data-btn img').attr("src" , "images/light-1.svg");
    $('.design-btn img').attr("src" , "images/light-2.svg");    
    $('.workflow-btn img').attr("src" , "images/white-3.svg");

  },400)
  setTimeout(function(){
    $('.for-workflow').fadeIn(800);
  },700)
});

/********** QUESTION PAGE  *******/
var que = 1 ; 
$('.question-box').click(function(){
  var pp = $(this)
  if(que==1) {
    setTimeout(function(){
      pp.addClass('card');
      pp.children('.answer').fadeIn(300);
    },300)

    que=2 ; 
  }
  else if(que==2) {
    setTimeout(function(){
      pp.removeClass('card');
      pp.children('.answer').fadeOut(300);
    },300)
    que=1 ; 
  }

});
      /****  Questions Type  ****/
$('.category-question').click(function(){
  setTimeout(function(){
    $('.start-questions').fadeOut(300);
    $('.native-questions').fadeOut(300);
    $('.pricing-questions').fadeOut(300);
    $('.support-questions').fadeOut(300);
    $('.category-question').addClass('active-color');
    $('.start-question').removeClass('active-color');
    $('.native-question').removeClass('active-color');
    $('.pricing-question').removeClass('active-color');
    $('.support-question').removeClass('active-color');
  },400)

  setTimeout(function(){
    $('.category-questions').fadeIn(800);
  },700)
})
$('.start-question').click(function(){
  setTimeout(function(){
    $('.category-questions').fadeOut(300);
    $('.native-questions').fadeOut(300);
    $('.pricing-questions').fadeOut(300);
    $('.support-questions').fadeOut(300);
    $('.start-question').addClass('active-color');
    $('.category-question').removeClass('active-color');
    $('.native-question').removeClass('active-color');
    $('.pricing-question').removeClass('active-color');
    $('.support-question').removeClass('active-color');
  },400)

  setTimeout(function(){
    $('.start-questions').fadeIn(800);
  },700)
})
$('.native-question').click(function(){
  setTimeout(() => {
    $('.category-questions').fadeOut(300);
    $('.start-questions').fadeOut(300);
    $('.pricing-questions').fadeOut(300);
    $('.support-questions').fadeOut(300);
    $('.native-question').addClass('active-color');
    $('.start-question').removeClass('active-color');
    $('.category-question').removeClass('active-color');
    $('.pricing-question').removeClass('active-color');
    $('.support-question').removeClass('active-color');
  }, 400);
  setTimeout(() => {
    $('.native-questions').fadeIn(800);
  }, 400);
})
$('.pricing-question').click(function(){
  setTimeout(() => {
    $('.category-questions').fadeOut(300);
    $('.start-questions').fadeOut(300);
    $('.native-questions').fadeOut(300);
    $('.support-questions').fadeOut(300);
    $('.pricing-question').addClass('active-color');
    $('.start-question').removeClass('active-color');
    $('.native-question').removeClass('active-color');
    $('.category-question').removeClass('active-color');
    $('.support-question').removeClass('active-color');
  }, 400);


  setTimeout(() => {
    $('.pricing-questions').fadeIn(800);
  }, 700);

})
$('.support-question').click(function(){
  setTimeout(() => {
    $('.start-questions').fadeOut(300);
    $('.native-questions').fadeOut(300);
    $('.pricing-questions').fadeOut(300);
    $('.category-questions').fadeOut(300);
    $('.support-question').addClass('active-color');
    $('.start-question').removeClass('active-color');
    $('.native-question').removeClass('active-color');
    $('.pricing-question').removeClass('active-color');
    $('.category-question').removeClass('active-color');
  }, 400);  
  setTimeout(() => {
    $('.support-questions').fadeIn(800);
  }, 700);

})


/*********** End QUESTION PAGE  *******/


/*********** team card in about page *********/
var f = 1 ; 
$('.post-all').hover(function(){
  var pos = $(this);
  if(f==1) {
    setTimeout(() => {
      pos.children().children('.all-con').fadeOut(100);
    }, 100);
    setTimeout(() => {
      pos.children().children('.post-image-box').children('img').css({width:'80px',height:'80px'})
      pos.css({backgroundColor:'#f5f9fa'});
      pos.children().children('.post-subname2').fadeIn(300);
    }, 100);
    f=2 ; 
  }
  else if(f==2) {
    setTimeout(() => {
      $(this).children().children('.post-subname2').fadeOut(100);
    }, 100);
    setTimeout(() => {
      $(this).children().children('.post-image-box').children('img').css({width:'180px',height:'180px'})
      $(this).css({backgroundColor:'#FFF'});
      $(this).children().children('.all-con').fadeIn(300);
    }, 200);
    f=1;
  }
});

$('.team-btn-1').click(function(){
  setTimeout(() => {
    $('.team-2').fadeOut(300);
  }, 400);
  setTimeout(() => {
    $('.team-1').fadeIn(800);
  }, 700);

});
$('.team-btn-2').click(function(){
  setTimeout(() => {
    $('.team-1').fadeOut(300);
  }, 400);
  setTimeout(() => {
    $('.team-2').fadeIn(800);
  }, 700);
})


/********   1  - sub card  ******** */ 

$('.sub-card').click(function(){
  if($(this).hasClass('sub')) {
    $(this).hide("slide", {direction: "right"}, 150);
    $('.main-card').hide("slide", {direction: "left"}, 150);
    $(this).show("slide", {direction: "right"}, 150);
    $('.main-card').show("slide", {direction: "left"}, 150);
  }
  $(this).addClass('color-shadow').removeClass('sub').removeClass('border-main');
  $('.main-card').addClass('border-main').addClass('sub2').removeClass('color-shadow');
})
$('.main-card').click(function(){
  if($(this).hasClass('sub2')) {
    $(this).hide("slide", {direction: "left"}, 150);
    $('.sub-card').hide("slide", {direction: "right"}, 150);
    $(this).show("slide", {direction: "left"}, 150);
    $('.sub-card').show("slide", {direction: "right"}, 150);
  }
  $(this).addClass('color-shadow').removeClass('sub2').removeClass('border-main');  
  $('.sub-card').addClass('border-main').addClass('sub').removeClass('color-shadow');
})
/**********  Payment Box   ***********/

$('.pay11').click(function(){
  $(this).addClass('active-box');
  $('.btn1').addClass('active-btn');
  $(this).removeClass('non-active-box');
  $('.btn1').removeClass('non-active-btn');
  $('.pay22').addClass('non-active-box');
  $('.btn2').addClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay22').css({'opacity':0.6});

});

$('.pay22').click(function(){
  $(this).addClass('active-box');
  $('.btn2').addClass('active-btn');
  $(this).removeClass('non-active-box');
  $('.btn2').removeClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay11').addClass('non-active-box');
  $('.btn1').addClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay11').css({'opacity':0.6});

});

/********** Load More  *********/

$(".moreBox").slice(0, 2).show();
if ($(".blogBox:hidden").length != 0) {
  $("#loadMore").show();
}   
$("#loadMore").on('click', function (e) {
  e.preventDefault();
  $(".moreBox:hidden").slice(0, 3).slideDown();
  if ($(".moreBox:hidden").length == 0) {
    $("#loadMore").fadeOut('slow');
  }
});

$(".moreBox2").slice(0, 2).show();
if ($(".blogBox2:hidden").length != 0) {
  $("#loadMore2").show();
}   
$("#loadMore2").on('click', function (e) {
  e.preventDefault();
  $(".moreBox2:hidden").slice(0, 3).slideDown();
  if ($(".moreBox2:hidden").length == 0) {
    $("#loadMore2").fadeOut('slow');
  }
});

$(".moreBox3").slice(0, 2).show();
if ($(".blogBox3:hidden").length != 0) {
  $("#loadMore3").show();
}   
$("#loadMore3").on('click', function (e) {
  e.preventDefault();
  $(".moreBox3:hidden").slice(0, 3).slideDown();
  if ($(".moreBox3:hidden").length == 0) {
    $("#loadMore3").fadeOut('slow');
  }
});

/*************** Courses **************/

$('.web-btn').click(function(){
  setTimeout(() => {
    $('.mobile').fadeOut(300);
    $('.desktop').fadeOut(300);
  }, 400);
  setTimeout(() => {
    $('.web').fadeIn(800);
  }, 700);

})
$('.mob-btn').click(function(){
  setTimeout(() => {
    $('.web').fadeOut(300);
    $('.desktop').fadeOut(300);
  }, 400);
  setTimeout(() => {
    $('.mobile').fadeIn(800);
  }, 700);
})
$('.desk-btn').click(function(){
  setTimeout(() => {
    $('.mobile').fadeOut(300);
    $('.wen').fadeOut(300);  
  }, 400);
  setTimeout(() => {
    $('.desktop').fadeIn(800);
  }, 700);

})


$('.plus-appear').click(function(){
  var plus = $(this);
  setTimeout(() => {
    $('.plus-appear').fadeOut(300);
  }, 400);
  setTimeout(() => {
    plus.parent().parent().children('ul').fadeIn(800);
    $('.minus-dis').fadeIn(800);
  }, 700);

});
$('.minus-dis').click(function(){
  var minus = $(this) ; 
  setTimeout(() => {
    $(this).parent().parent().children('ul').fadeOut(300);
    $('.minus-dis').fadeOut(300)
  }, 400);
  setTimeout(() => {
    $('.plus-appear').fadeIn(800);
  }, 700);
});


$(window).on("scroll",function(){
  if($(window).scrollTop()>=100) {
      $('.nav-scroll').css({
        backgroundColor:'#FFF',
        boxShadow:'4px 4px 3px #F5F5F5',
      });
    }
      else {
        $('.nav-scroll').css({
          backgroundColor:'transparent',
          boxShadow:'none',

        });
      }
}) ;

/**** For Navbar in about page ****/

$(window).on("scroll",function(){
  if($(window).scrollTop()>=100) {
      $('.nav-scroll2').css({
        backgroundColor:'#FFF',
        boxShadow:'4px 4px 3px #F5F5F5',
      });
    }
      else {
        $('.nav-scroll2').css({
          backgroundColor:'#FFF',
          boxShadow:'none',

        });
      }
}) ;


$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});





function success() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 3500
      })
      Toast.fire({
        type: 'success',
        title: 'Edit Done Succefully'
      })
}

function accept() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Accepted successfully'
    })
}
function Canceled() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Refused successfully'
    })
}
function complain() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Compain Sent successfully'
    })
}

function success2() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 5500
      })
      
      Toast.fire({
        type: 'success',
        title: '4SOFT has received your request successfully and we will answer soon'
      })
}

function success3() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      type: 'success',
      title: 'Updated successfully'
    })
}




$(window).on("scroll",function(){
    if($(window).scrollTop()>=300)
    {
        $('#goUPButton').slideDown(700);
    }
    else
    {
        $('#goUPButton').slideUp(700); 
    }
}) ;
function goUP(){
    window.scrollTo(0,0); 
};
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var srcBtn = document.getElementById('src-btn2');
var fileBtn = document.getElementById('file-btn2');
var customTxt2 = document.getElementById('customTxt2');
srcBtn.addEventListener("click",function() {
  fileBtn.click();
});
fileBtn.addEventListener("change",function() {
  if(fileBtn.value) {
    customTxt2.innerHTML = fileBtn.value;
  } else {
    customTxt2.innerHTML = "No File Chosen yet !";
  }
});