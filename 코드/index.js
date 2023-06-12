// home introduce img
$('.nudge__img .page-nav > div').click(function(){
  var $this = $(this);
  var $pagenav = $this.parent()
  var $current = $pagenav.find('.active');
    
  $current.removeClass('active');
  $this.addClass('active');

  var index = $this.index();
  var $슬라이더 = $this.closest('.nudge__img');
    
  $슬라이더.find('.slides > div.active').removeClass('active');
  $슬라이더.find('.slides > div').eq(index).addClass('active');
});

$('.nudge__img > .side-btns > div:first-child').click(function() {
  var $this = $(this);
  var $slider = $this.closest('.nudge__img');
  
  var $current = $slider.find('.page-nav > div.active');
  var $post = $current.prev();
  
  if ( $post.length == 0 ) {
      $post = $slider.find('.page-nav > div:last-child');
  }
  
  $post.click();
});

$('.nudge__img > .side-btns > div:last-child').click(function() {
  var $this = $(this);
  var $slider = $this.closest('.nudge__img');
  
  var $current = $slider.find('.page-nav > div.active');
  var $post = $current.next();
  
  if ( $post.length == 0 ) {
      $post = $slider.find('.page-nav > div:first-child');
  }
  
  $post.click();
});
// intro



// graph
const chart1 = document.querySelector('.graph1');
const chart2 = document.querySelector('.graph2');
const chart3 = document.querySelector('.graph3');
const chart4 = document.querySelector('.graph4');
var isVisible = false;


const makeChart = (percent, classname, color) => {
    let i=1;
    let chartFn = setInterval(function(){
        if (i <=percent) {
            colorFn(i, classname, color);
            i++;
        } else {
            clearInterval(chartFn);
        }
    }, 15);
}

const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}

$(window).on('scroll', function(){
  if (checkVisible($('.clock__graph'))&&!isVisible) {
    makeChart(77.322, chart1, '#39C08F');
    makeChart(80.496, chart2, '#39C08F');
    makeChart(79.53, chart3, '#39C08F');
    makeChart(60, chart4, '#dedede');
    isVisible = true;
  }
});
function checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), 
      scrolltop = $(window).scrollTop(), 
      y = $(elm).offset().top,
      elementHeight = $(elm).height();   
  
  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}


// book
var slides = document.querySelector('.book_list'),
  slide = document.querySelectorAll('.book_list li'),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 300,
  slideMargin = 30,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 330 + 'px';
  currentIdx = num;
}

nextBtn.addEventListener('click', function () {
  if( currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }   
});

prevBtn.addEventListener('click', function () {
  if( currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(slideCount - 3);
  }   
});