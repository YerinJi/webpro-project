const chart1 = document.querySelector('.graph1');
const chart2 = document.querySelector('.graph2');
const chart3 = document.querySelector('.graph3');
const chart4 = document.querySelector('.graph4');



const makeChart = (percent, classname, color) => {
    let i=1;
    let chartFn = setInterval(function(){
        if (i <=percent) {
            colorFn(i, classname, color);
            i++;
        } else {
            clearInterval(chartFn);
        }
    }, 10);
}

const colorFn = (i, classname, color) => {
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}

makeChart(77.322, chart1, '#39C08F');
makeChart(80.496, chart2, '#39C08F');
makeChart(79.53, chart3, '#39C08F');
makeChart(60, chart4, '#dedede');

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