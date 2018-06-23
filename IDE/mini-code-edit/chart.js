// Our labels along the x-axis
var info;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        info   = JSON.parse(this.responseText);
        var i;
        var sum=0;
        for(i=0;i<info.length;i++)
        {
          
        }
    }
};
xmlhttp.open("GET", "analysis.json", true);
xmlhttp.send();
var durations = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
var i;
var sum=0;
for(i=0;i<durations.length;i++)
{
  sum =sum+durations[i];
  durations[i]=sum+"ms";
}
// For drawing the lines
var r1 = [86,114,106,106,107,111,133,221,783,2478];
var r2 = [282,350,411,3700,502,635,809,947,1402,5267];
var r3 = [168,170,178,190,1007,203,276,408,675,734];
var r4 = [40,20,10,16,24,38,74,167,508,784];
var r5=  [6,3,2,2,433,26,82,172,312,100];
var totalpower = [];
i=0;
for(i=0;i<durations.length;i++)
{
  totalpower[i]=r1[i]+r2[i]+r3[i]+r4[i]+r5[i];

}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    type: "stepLine",
    labels: durations,
    datasets: [
      {
        steppedLine:true,
        data: r1,
        label: "r1",
        borderColor: "#3e95cd",
        fill: false

      },
      {
        steppedLine:true,
        data: r2,
        label: "r2",
        borderColor: "#8e5ea2",
        fill:false
      },
      {
        steppedLine:true,
        data: r3,
        label: "r3",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        steppedLine:true,
        data: r4,
        label: "r4",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        steppedLine:true,
        data: r5,
        label: "r5",
        borderColor: "#c45850",
        fill: false
      },
      {
        steppedLine:true,
        data:totalpower,
        label:"TotalConsumption",
        borderColor:"#3e95cd",
        fill:false
      }
    ]
  },
  steppedLine:true,
  options : {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Power in mah'
        }
      }]
    }
  }
});
