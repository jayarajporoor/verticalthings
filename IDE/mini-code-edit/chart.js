// Our labels along the x-axis
var info;
var durations = [];
var module_name = [];
var no_resources=0;
var jsondata=[];
var totalpower = [];
var deb= nw.Window.get().showDevTools();
const m = new Map();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        info   = JSON.parse(this.responseText);
        var i;
        // for calculating the total no of resources
        for(i=0;i<info.length;i++)
        {
          var res=info[i].acquires;
          var it=0;
          for(it=0;it<res.length;it++)
          {
            m.set(res[it],[]);
          }
        }
        var sum=0;
        for(i=0;i<info.length;i++)
        {
          module_name[i]=info[i].label;

          durations[i]=parseInt(info[i].duration);
          sum+=durations[i];
          durations[i]=sum+"ms";

          var aq=[];
          aq= info[i].acquires;
          var res=[];
          res=info[i].power;
          var l;
          var s=new Set();
          for(l=0;l<aq.length;l++)
          {
            s.add(aq[l]);
          }
          const keys = [...m.keys()];
          for(l=0;l<m.size;l++)
          {
            var temp =m.get(keys[l]);
            //console.log(temp.length);
            if(s.has(keys[l]))
            {
              var find;
              var found;
              for(find=0;find<res.length;find++)
              {
                  if(res[find].resource==keys[l])
                  {
                    found=res[find];
                    break;
                  }
              }
              //console.log(temp.length+"hi");
              temp.push(found.execpower);
            //  console.log(temp.length);
              m.set(keys[l],temp);
            }else{
              temp.push("0");
              m.set(keys[l],temp);
            }

          }
          console.log("\n\n");
        }
        var i=0;
        for (const k of m.keys()) {
          var obj=  new Object();
          obj["steppedLine"]=true;
          obj["label"]=k;
          obj["borderColor"]="#3e95cd";
          obj["fill"]=false;
          obj["data"]=m.get(k);
        //  console.log(obj);
          jsondata[i]=obj;
          i++;
          console.log(k +" " +m.get(k));
        }
        console.log(jsondata);

    }
};
xmlhttp.open("GET", "analysis.json", true);
xmlhttp.send();


console.log(m.size+"h"+durations.length);
// For drawing the lines
/*
var r1=[1,1,1];
var r2=[2,3,4];
var r3=[1,2,3];
var r4=[1,5,3];
var r5=[1,4,7];
*/
i=0;
for(i=0;i<durations.length;i++)
{
  totalpower[i]=r1[i]+r2[i]+r3[i]+r4[i]+r5[i];
}

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: durations,
    datasets: jsondata,
  },
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
