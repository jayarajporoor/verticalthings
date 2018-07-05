//var deb= nw.Window.get().showDevTools();
var memory = window.myvariable;
var size= memory.alloc.length;
var array=memory.alloc;
var i,j;


var jsonRectangles = [
    ];
var colors = ["rgb(100,100,100,0.15)","rgb(0,20,200,0.2)",,"rgb(130,10,200,0.1)",
              "rgb(100,200,50,0.15)","rgb(200,100,250,0.2)","rgb(100,100,23,0.1)",
              "rgb(200,100,30,0.1)","rgb(200,200,200,0.15)","rgb(150,150,100,0.1)",
              "rgb(10,20,100,0.2)","rgb(40,100,256,0.1)","rgb(0,20,130,0.15)","rgb(150,250,200,0.1)"];

for(i=0;i<size;i++)
{
    var obj={};
    obj.x_axis=array[i].lifetime.start*100;
    obj.y_axis=array[i].loc;
    obj.height=array[i].sym.info.size;
    obj.width=(array[i].lifetime.end-array[i].lifetime.start)*100+ 20 ;
    obj.color=colors[(i)%6];
    obj.name=array[i].sym.name;
    console.log(obj);
    jsonRectangles.push(obj);
}
console.log(jsonRectangles);

var max_x = 0;
var max_y = 0;

for (var i = 0; i < jsonRectangles.length; i++) {
    var temp_x, temp_y;
    var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
    var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

    if ( temp_x >= max_x ) { max_x = temp_x; }

    if ( temp_y >= max_y ) { max_y = temp_y; }
}


var digits = max_y.toString().length;
var xdigits = max_x.toString().length;

if(xdigits == 5)
{
   xscale = 100;
}else if(xdigits == 4)
{
  if(max_x<=5000)
  {
    xscale = 2.25 ;
  }else if(max_x<=1000) {
    xscale = 4;
  }
}else if(xdigits == 3)
{
  xscale =1;
}else {
  xscale =1;
}

var yscale;
if(digits==5){
  yscale=100;
}
else if(digits==4){
  yscale=4;
}
else if(digits==3){
  yscale = 1;
}
else if(digits==2){
  yscale = 0.1;
}
else if(digits ==1){
  yscale = 0.01;
}

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", max_x+1000)
                                    .attr("height", max_y+1000);

svgContainer.append('text')
              .attr("transform","translate(130,400) rotate(-90) ")
              .attr("dy","1em")
              .style("text-anchor","middle")
              .text("memory-address");
svgContainer.append('text')
              .attr("transform","translate(400,110)")
              .attr("dy","1em")
              .style("text-anchor","middle")
              .text("pipeline-execution");


var axisScale = d3.scaleLinear()
                        .domain([0,max_x])
                        .range([0,(max_x)/xscale])
var yaxisScale = d3.scaleLinear()
                        .domain([0,max_y])
                        .range([0,max_y/yscale]);
var xAxisGroup = svgContainer.append("g")
                              .style("font","14px times")
                              .attr("transform","translate(200,160)")
                              .attr("id","x-group")
                              .call(d3.axisTop(axisScale));
var yAxisGroup  =svgContainer.append("g")
                              .attr("transform","translate(200,160)")
                              .call(d3.axisLeft(yaxisScale));


var rectangles = xAxisGroup.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

 console.log(rectangles);
 var rectangleAttributes = rectangles
                           .attr("x", function (d) { return d.x_axis; })
                           .attr("width", function (d) { return (d.width); })
                           .style("fill", function(d) { return d.color; })
                           .attr("y",function(d) { return (d.y_axis); })
                           .attr("height", function (d) { return d.height; })
                           .attr("transform","scale(+"+1/xscale+","+1/yscale+')');


 var rectangleText =xAxisGroup.selectAll("textRect")
                               .data(jsonRectangles)
                               .enter()
                               .append("text");

 rectangleText
            .attr("x", function(d) { return (d.x_axis+d.width/2)/xscale; })
            .attr("y", function(d) { return (d.y_axis+(d.height/2))/yscale; })
            .attr("fill", "#000")
            .attr("text-anchor", "middle")
            .text(function(d) { return d.name})
            .attr("font-family", "Times")
            .attr("transform","scale(1,1)")
            .attr("font-size", "15px");
