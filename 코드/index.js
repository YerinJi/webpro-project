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