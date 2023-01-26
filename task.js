let backLight = document.querySelector('.backlight');
let last = document.querySelector('.last-block');
let menues = document.querySelectorAll('.menues')

backLight.addEventListener('click', () => {
    document.body.classList.toggle("dark")
})

var data = generateDayWiseTimeSeries(new Date("May 2021").getTime(), 9, {
    min: 275000,
    max: 5 * 275000
});

var options = {
    chart: {
        width: "180%",
        height: "60%",
        type: "area",
        stacked: false,
        toolbar: {
            show: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#805AD5"],
    series: [
        {
          data: data
        }
    ],
    stroke: {
        width: []
    },
    plotOptions: {
        bar: {
            columnWidth: "20%"
        }
    },
    xaxis: {
        type: "datetime",
        
        labels: {
            style: {
            colors: "#FFFFFF"
            }
        },
    },
    yaxis: [
        {
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#CCCCCC"
            },
            labels: {
                style: {
                    colors: "#FFFFFF"
                }
            },
        },
        
    ],
    tooltip: {
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    },

    fill: {
        opacity: 0,
        type: 'solid',
    }

};
  
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
  

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 30 * 86400000;
      i++;
    }
    return series;
  }
  

