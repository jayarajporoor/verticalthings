var newButton, openButton, saveButton,compileButton;
var editor;
var menu;
var fileEntry;
var hasWriteAccess;
tabTextarea = [[],[]];
tabID=1;
var memory;

var gui = require("nw.gui");
var fs = require("fs");
var deb= nw.Window.get().showDevTools();
var express= require('express');
var app = express();
var clipboard = gui.Clipboard.get();

var modules;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        modules   = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "moduleinfo.json", true);
xmlhttp.send();
var compilerObj = require('./../../compiler/src/vtcompiler.js');

function handleDocumentChange(title) {
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var mode = "vertical";
  var modeName = "Vertical";
  if (title) {
    title = title.match(/[^/]+$/)[0];
    document.getElementById("title").innerHTML = title;
    if (title.match(/.json$/)) {
      mode = {name: "javascript", json: true};
      modeName = "JavaScript (JSON)";
    } else if (title.match(/.html$/)) {
      mode = "htmlmixed";
      modeName = "HTML";
    } else if (title.match(/.css$/)) {
      mode = "css";
      modeName = "CSS";
    }else if(title.match(/.v$/))  {
      mode= "vertical";
      modeName = "Vertical";
    }
  } else {
    document.getElementById("title").innerHTML = "[no document loaded]";
  }
  tabTextarea[id].setOption("mode", mode);
  document.getElementById("mode").innerHTML = modeName;
}

function newFile() {
  fileEntry = null;
  hasWriteAccess = false;
  handleDocumentChange(null);
}

function setFile(theFileEntry, isWritable) {
  fileEntry = theFileEntry;
  hasWriteAccess = isWritable;
}

function readFileIntoEditor(theFileEntry) {
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var obj=document.getElementsByClassName('tab active show')[0];
  console.log("printing the obj");
  console.log(obj);
  tabTextarea[id]["filePath"]=theFileEntry;
  console.log(id+tabTextarea[id]["filePath"]);
  fs.readFile(theFileEntry, function (err, data) {
    if (err) {
      console.log("Read failed: " + err);
    }
    handleDocumentChange(theFileEntry);
    tabTextarea[id].setValue(String(data));
    var str=theFileEntry;
    var words=str.split("/");
    tabTextarea[id]["fileName"]=words[words.length-1];
    console.log(tabTextarea[id]["fileName"]);
    var name=tabTextarea[id]["fileName"];
    console.log("before")
    obj.innerHTML= name+'<button class="close" type="button" title="Remove this page">×</button>';
    console.log("after");

  });
}

function writeEditorToFile(theFileEntry) {
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var str = tabTextarea[id].getValue();
  console.log(id);
  console.log(str);
  console.log(theFileEntry);
  fs.writeFile(theFileEntry, tabTextarea[id].getValue(), function (err) {
    if (err) {
      console.log("Write failed: " + err);
      return;
    }

    handleDocumentChange(theFileEntry);
    document.getElementById("title").innerHTML=theFileEntry;
    console.log("Write completed.");
  });
}

var onChosenFileToOpen = function(theFileEntry) {
  setFile(theFileEntry, false);
  readFileIntoEditor(theFileEntry);
};

var onChosenFileToSave = function(theFileEntry) {
  setFile(theFileEntry, true);
  writeEditorToFile(theFileEntry);
};

function handleNewButton() {
  if (false) {
    newFile();
    editor.setValue("");
  } else {
    var x = window.screenX + 10;
    var y = window.screenY + 10;
    window.open('main.html', '_blank', 'screenX=' + x + ',screenY=' + y);
  }
}

function handleOpenButton() {
  $("#openFile").trigger("click");
}
function handleCtrls(){
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  fileEntry=tabTextarea[id]["filePath"];
  hasWriteAccess = true;
  console.log(fileEntry);
  writeEditorToFile(fileEntry);
  hasWriteAccess= false ;
}
function handleSaveButton() {
  console.log("I dont know whats happening");
  alert("caller is"+handleSaveButton.caller);
  if (fileEntry && hasWriteAccess) {
    writeEditorToFile(fileEntry);
  } else {
    $("#saveFile").trigger("click");
  }
}

function handleNewTab()
{
  tabID++;
  //$('#tab-list').removeClass("active");
  //$('.nav-tabs li.active').removeClass('active');

  $('#tab-list').append($('<li class='+'"active show"><a href="#' + tabID + '" class="tab show active" data-toggle="tab">Untitled<button class="close" type="button" title="Remove this page">×</button></a></li>'));
  $('#tab-content').append($('<div class=" editor tab-pane in fade" id="' + tabID + '"></div>'));
  //highlighting the latest tab
  //$('#2').parents('li').tab('show');

  console.log("hello");
  var id=tabID;
  console.log(id);
  tabTextarea[tabID] = CodeMirror(
    document.getElementById(id),
    {
      mode: "vertical",
      lineNumbers: true,
      theme: "lesser-dark",
      coverGutterNextToScrollbar: false,
      onCursorActivity: function() {
        tabTextarea[tabID].setLineClass(hlLine, null, null);
        hlLine = tabTextarea[tabID].setLineClass(tabTextarea[tabID].getCursor().line, null, "activeline");
        tabTextarea[tabID].matchHighlight("CodeMirror-matchhighlight");
      },
      extraKeys: {
        "Ctrl-S": function(instance) { handleCtrls()},
        "'{'": function(cm) { cm.bracketComplete(cm, '{'); },
        "'('": function(cm) { cm.bracketComplete(cm, '('); },
        "'['": function(cm) { cm.bracketComplete(cm, '['); },
        "Ctrl-N": function(instance) {handleNewTab()},
        "Ctrl-Space": "autocomplete"
      }
    });
    tabTextarea[tabID]["fileName"]="Untitled";
    tabTextarea[tabID]["filePath"]="Null";
    newFile();
    var containerWidth = window.innerWidth-20;
    var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;

    var scrollerElement = tabTextarea[tabID].getScrollerElement();
    scrollerElement.style.width = containerWidth + 'px';
    scrollerElement.style.height = containerHeight + 'px';

    tabTextarea[tabID].refresh();
    var hlLine = tabTextarea[tabID].setLineClass(0, "activeline");
}
function createChart()
{
  console.log(memory);
  var jsonRectangles = [
      {"tag": "buf",  "x_axis": 10, "y_axis": 10, "height": 50, "width":50, "color" : "green" },
      { "x_axis": 10, "y_axis": 70, "height": 50, "width":100, "color" : "green" },
      { "x_axis": 160, "y_axis": 40, "height":100, "width":20, "color" : "purple" },
      { "x_axis": 800, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];

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
                          .domain([0,max_x+20])
                          .range([0,max_x+20])
  var yaxisScale = d3.scaleLinear()
                          .domain([0,max_y+20])
                          .range([0,max_y+20]);

  var xAxisGroup = svgContainer.append("g")
                                .attr("transform","translate(200,160)")
                                .call(d3.axisTop(axisScale));
  //xAxisGroup.selectAll("g")
  //console.log(d3.selectAll(".mynode").filter(_conditions_).attr("cx"));

  xAxisGroup.selectAll("g").each( function(d, i){
      console.log( d3.select(this).attr("transform") );
  });

  var yAxisGroup  =svgContainer.append("g")
                                .attr("transform","translate(200,160)")
                                .call(d3.axisLeft(yaxisScale));

  var rectangles = xAxisGroup.selectAll("rect")
                               .data(jsonRectangles)
                               .enter()
                               .append("rect");
  /*var rectangles1 = yAxisGroup.selectAll("rect")
                              .data(jsonRectangles)
                              .enter()
                              .append("rect");*/
  var rectangleAttributes = rectangles
                            .attr("x", function (d) { return d.x_axis; })
                            .attr("width", function (d) { return d.width; })
                            .style("fill", function(d) { return d.color; })
                            .attr("y",function(d) { return (d.y_axis); })
                            .attr("height", function (d) { return d.height; });

}

function handleCompileButton(){

    console.log(compilerObj);
    var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
    console.log(tabTextarea[id]["filePath"]);
    try{
      var res = compilerObj.compile([tabTextarea[id]["filePath"]]);
      //  console.log("RESULT", res.ctx.mem);
      memory= res.ctx.mem;
      console.log(memory);
      var w = window.open("memory.html");
      w.myvariable = memory;

    }catch(e)
    {
      console.log(e, e.stack);
      console.log(global.vtbuild);
      var errorlen=global.vtbuild.errors.length;
      var warnlen=global.vtbuild.warnings.length;
      var info=global.vtbuild.info;
      var el=document.getElementById("analysis");
      el.style.display="none";
      el.innerHTML="";
      console.log(el);
      var i;
      if(errorlen){
        var errordiv = document.createElement("div");
        errordiv.id="errordiv";
        el.append(errordiv);
        for(i=0;i<errorlen;i++)
        {
          errordiv.innerHTML +="<br>"+global.vtbuild.errors[i].text;
        }
      }
      if (warnlen){
        var warningdiv =document.createElement("div");
        warningdiv.id="warningdiv";
        el.append(warningdiv);
        for(i=0;i<warnlen;i++)
        {
          warndiv.innerHTML += "<br>"+global.vtbuild.warnings[i].text;
        }
      }
      console.log(el);
      el.style.display="block";
      resize();

      console.log("completed")

    }


}
function initWindowMenu(){
  file = new gui.Menu({ 'type': 'menubar' });
  file.append(new gui.MenuItem({
        label:'New',
        click: function(){
          handleNewTab();
        }
  }));
  file.append(new gui.MenuItem({
      label:'Open',
      click: function (){
        handleOpenButton();
      }
  }));
  file.append(new gui.MenuItem({
      label :'Save',
      click:function (){
        handleSaveButton();
      }
  }));
  file.append(new gui.MenuItem({
      label :'Analyse',
      click:function(){
      window.open('chart.html', '_blank');
      }
  }));
  file.append(new gui.MenuItem({
      label :'Compile',
      click:function(){
        handleCompileButton();
      }
  }))
  gui.Window.get().menu= file;
}

function initContextMenu() {
  menu = new gui.Menu();
  menu.append(new gui.MenuItem({
    label: 'Copy',
    click: function() {
      var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
      clipboard.set(tabTextarea[id].getSelection());
    }
  }));
  menu.append(new gui.MenuItem({
    label: 'Cut',
    click: function() {
      var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
      clipboard.set(tabTextarea[id].getSelection());
      tabTextarea[id].replaceSelection('');
    }
  }));
  menu.append(new gui.MenuItem({
    label: 'Paste',
    click: function() {
      var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
      tabTextarea[id].replaceSelection(clipboard.get());
    }
  }));
  menu.append(new gui.MenuItem({
    label: 'info',
    click: function(){

      var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
      console.log(id);
      var editor=tabTextarea[id];
      console.log(tabTextarea[id].getSelection());

      //console.log(editor);
      var sel = tabTextarea[id].getSelection();
      var el=document.getElementById("analysis");
      var flag=0;
      for(var i=0;i<modules.length;i++)
      {
        if(modules[i].name==sel)
        {
          flag=1;
          console.log(modules[i].timeAnalysis);
          el.innerHTML=" "+modules[i].timeAnalysis+"<br>"+modules[i].powerAnalysis+"<br>"+modules[i].text;
        }
        el.style.display="block";
      }
      if(!flag)
      {
        el.innerHTML="no info available";
      }
      var containerWidth = window.innerWidth-20;
      var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;

      var scrollerElement = editor.getScrollerElement();
      scrollerElement.style.width = containerWidth + 'px';
      scrollerElement.style.height = containerHeight + 'px';

      tabTextarea[id].refresh();

    }
  }));
  window.addEventListener('contextmenu',
                                  function(ev) {
    ev.preventDefault();
    menu.popup(ev.x, ev.y);
    return false;

  });

    document.getElementById('c').addEventListener('dblclick',
                                                                function(ev){

    var el=document.getElementById("analysis");
    el.style.display="none";
    var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  //  var container = document.getElementById(id);
    var containerWidth = window.innerWidth-20;
    var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;

    var scrollerElement = tabTextarea[id].getScrollerElement();
    scrollerElement.style.width = containerWidth + 'px';
    scrollerElement.style.height = containerHeight + 'px';

    tabTextarea[id].refresh();

    return false;
  });
}


onload = function() {
  initContextMenu();
  initWindowMenu();

  $("#saveFile").change(function(evt) {
    onChosenFileToSave($(this).val());
  });
  $("#openFile").change(function(evt) {
    onChosenFileToOpen($(this).val());
  });

  CodeMirror.commands.autocomplete = function(cm) {
    CodeMirror.simpleHint(cm, CodeMirror.javascriptHint);
  }

  editor = CodeMirror(
    document.getElementById("1"),
    {
      mode: "vertical",
      lineNumbers: true,
      theme: "lesser-dark",
      onCursorActivity: function() {
        editor.setLineClass(hlLine, null, null);
        hlLine = editor.setLineClass(editor.getCursor().line, null, "activeline");
        editor.matchHighlight("CodeMirror-matchhighlight");
      },
      extraKeys: {
        "Ctrl-S": function(instance) { handleCtrls()},
         "'{'": function(cm) { cm.bracketComplete(cm, '{'); },
				"'('": function(cm) { cm.bracketComplete(cm, '('); },
        "'['": function(cm) { cm.bracketComplete(cm, '['); },
        "Ctrl-N": function(instance) {handleNewTab()},
        "Ctrl-Space": "autocomplete"

      }
    });
    tabTextarea[1]=editor;
    tabTextarea[1]["fileName"]="Untitled";
    tabTextarea[1]["filePath"]="Null";
    var editordiv= document.getElementById("c");
    var infodiv=document.createElement("div");
    infodiv.id="analysis";
    editordiv.append(infodiv);
    var hlLine = editor.setLineClass(0, "activeline");
    newFile();
    onresize();
    gui.Window.get().show();
};
function resize()
{
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var containerWidth = window.innerWidth-30;
  var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;
  console.log("resized");
  console.log(id);
  var scrollerElement = tabTextarea[id].getScrollerElement();
  scrollerElement.style.width = containerWidth + 'px';
  scrollerElement.style.height = containerHeight + 'px';
  tabTextarea[id].refresh();

}
onresize = function() {

  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var containerWidth = window.innerWidth-30;
  var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;

  var scrollerElement = tabTextarea[id].getScrollerElement();
  scrollerElement.style.width = containerWidth + 'px';
  scrollerElement.style.height = containerHeight + 'px';
  tabTextarea[id].refresh();
}
