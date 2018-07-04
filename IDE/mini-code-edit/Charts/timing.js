var deb= nw.Window.get().showDevTools();
var modules = window.info;
var size = modules.length;
var i,j;
var currentx=0,currenty=0;

var jsonRectangles = [
    ];
var colors=["rgb(100,100,100,0.15)","rgb(20,20,20,0.1)","rgb(100,200,50,0.15)","rgb(200,100,250,0.2)","rgb(100,100,23,0.1)","rgb(200,100,30,0.1)","rgb(200,200,200,0.15)","rgb(150,150,100,0.1)","rgb(10,20,100,0.2)"];

for(i=0;i<size;i++)
{
    var obj = {};
    obj.x_axis = currentx;
    currentx = currentx+parseInt(modules[i].time)/100000;
    obj.y_axis = currenty;
    currenty += 30;
    obj.height = 30;
    obj.width = parseInt(modules[i].time)/100000;
    obj.color = colors[(i+1)%6];
    obj.name = modules[i].name[0];
    console.log(obj);
    jsonRectangles.push(obj);
}
console.log(jsonRectangles);
if(jsonRectangles.length<5)
{
    for(i=0;i<5-jsonRectangles.length;i++)
    {
        var obj ={};
        obj.x_axis= currentx;
        currentx += 50;
        obj.y_axis = currenty;
        currenty += 30;
        obj.height  =30;
        obj.width = 50;
        obj.color = "#ffffff";
        obj.name = "";
        jsonRectangles.push(obj);
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

var digits=max_x.toString().length;
console.log(digits);

var xscale;
console.log(digits);
if(digits==4)
{
  xscale=10000;
}else if(digits ==7) {
  xscale=1;
}
xscale=parseInt(xscale);

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
                           //.attr("transform","scale("+1/xscale+")");

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
