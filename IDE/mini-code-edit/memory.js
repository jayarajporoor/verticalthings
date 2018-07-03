var deb= nw.Window.get().showDevTools();
console.log(window.myvariable)
var memory = window.myvariable;
var size= memory.alloc.length;
var array=memory.alloc;
var i,j;


var jsonRectangles = [
    ];
var colors = ["#ccffcc","#ccccff","#00ffcc","#ffccff","#ffcccc","#99ccff"];

for(i=0;i<size;i++)
{
    var obj={};
    obj.x_axis=array[i].lifetime.start*100;
    obj.y_axis=array[i].loc;
    obj.height=array[i].sym.info.size;
    obj.width=(array[i].lifetime.end-array[i].lifetime.start)*100;
    obj.color=colors[(i+1)%6];
    obj.name=array[i].sym.name;
    console.log(obj);
    jsonRectangles.push(obj);
}
console.log(jsonRectangles);

for(i=0;i<size;i++)
{
  if(jsonRectangles[i].width==0)
  {
      for(j=0;j<size;j++)
      {
        jsonRectangles[j].width+=20;
      }
  }
}

var max_x = 0;
var max_y = 0;

for (var i = 0; i < jsonRectangles.length; i++) {
    var temp_x, temp_y;
    var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
    var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

    if ( temp_x >= max_x ) { max_x = temp_x; }

    if ( temp_y >= max_y ) { max_y = temp_y; }
}

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", max_x+1000)
                                    .attr("height", max_y+1000);

var axisScale = d3.scaleLinear()
                        .domain([0,max_x])
                        .range([0,(max_x)])
var yaxisScale = d3.scaleLinear()
                        .domain([0,max_y])
                        .range([0,(max_y)]);
var xAxisGroup = svgContainer.append("g")
                              .style("font","8px times")
                              .attr("transform","translate(200,160) scale(2,3)")
                              .attr("id","x-group")
                              .call(d3.axisTop(axisScale));
var yAxisGroup  =svgContainer.append("g")
                              .attr("transform","translate(200,160) scale(2,3)")
                              .call(d3.axisLeft(yaxisScale));


var rectangles = xAxisGroup.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

 console.log(rectangles);
 var rectangleAttributes = rectangles
                           .attr("x", function (d) { return d.x_axis; })
                           .attr("width", function (d) { return d.width; })
                           .style("fill", function(d) { return d.color; })
                           .attr("y",function(d) { return (d.y_axis); })
                           .attr("height", function (d) { return d.height; });

 var rectangleText =xAxisGroup.selectAll("textRect")
                               .data(jsonRectangles)
                               .enter()
                               .append("text");
 rectangleText
            .attr("x", function(d) { return d.x_axis+d.width/2; })
            .attr("y", function(d) { return d.y_axis+d.height/2; })
            .attr("fill", "#000")
            .attr("text-anchor", "middle")
            .text(function(d) { return d.name})
            .attr("font-family", "Times")
            .attr("font-size", "8px");
