$(function () {
  $('.burger').on('click', function () {
    $('.header__menu').toggleClass('open');
  });
  $('.header__item').on('click', function () {
    $('.header__menu').removeClass('open');
  });
});
$(document).ready(function(){
    $('.structure__content').viewportChecker();
});
$(document).ready(function(){
    $('.effect__before').viewportChecker();
});

$(window).scroll(function(){
  if($('.effect__before').hasClass('visible')){
    $('.effect__content').addClass('visible');
  }
})

$(function () {
  $('.test__item--male').on('click', function () {
    $('.test--1').addClass('close');
    $('.test--2').addClass('open');
  })
})
$(function () {
  $('.test__item--female').on('click', function () {
    $('.test--1').addClass('close');
    $('.test--2').addClass('open');
  })
})
$(function () {
  $('.test__item--3').on('click', function () {
    $('.test--2').removeClass('open');
    $('.test--3').addClass('open');
  })
})
$(function () {
  $('.test__item--1').on('click', function () {
    $('.test--2').removeClass('open');
    $('.final--1').slideDown()
    // $('.final--1').addClass('open');
  })
})
$(function () {
  $('.test__item--2').on('click', function () {
    $('.test--2').removeClass('open');
    // $('.final--2').addClass('open');
    $('.final--2').slideDown()
  })
})
$(function () {
  $('.test__item--4').on('click', function () {
    $('.test--3').removeClass('open');
    $('.final--3').slideDown()
    // $('.final--3').addClass('open');
  })
})
$(function () {
  $('.test__item--5').on('click', function () {
    $('.test--3').removeClass('open');
    // $('.final--4').addClass('open');
    $('.final--4').slideDown()
  })
})
$(function () {
  $('.test__item--6').on('click', function () {
    $('.test--3').removeClass('open');
    //$('.final--5').addClass('open');
    $('.final--5').slideDown()
  })
})
$(function () {
  $('.reset').on('click', function () {
    $('.test').removeClass('open').removeClass('close');
    $('.final').removeClass('open').removeClass('close');
    $('.test--1').addClass('open');
  })
})

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});


let boxBlock = document.querySelector('.effect__box')
let box2 = document.querySelector('.effect__box-img_2')
let box3 = document.querySelector('.effect__box-img_3')
let box4 = document.querySelector('.effect__box-img_4')
document.addEventListener('scroll', onScroll);
	 
    function onScroll() {
      const posTop = boxBlock.getBoundingClientRect().top;
      if(posTop + boxBlock.clientHeight <= window.innerHeight && posTop >= 0) {
		
      box2.classList.add('move_2')
      box3.classList.add('move_3')
      box4.classList.add('move_4')
        document.removeEventListener('scroll', onScroll);
      }
	 }
	 