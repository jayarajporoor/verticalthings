var newButton, openButton, saveButton,compileButton;
var editor;
var menu;
var fileEntry;
var hasWriteAccess;
tabTextarea = [[],[]];
tabID=1;

var gui = require("nw.gui");
var fs = require("fs");
var deb= nw.Window.get().showDevTools();
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

function handleDocumentChange(title) {
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var mode = "vertical";
  var modeName = "Vertical";
  if (title) {
    title = title.match(/[^/]+$/)[0];
    document.getElementById("title").innerHTML = title;
    document.title = title;
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
  console.log(id);
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
    var name=tabTextarea[tabID[1]]["fileName"];
    $(this).html(name+'<button class="close" type="button" title="Remove this page">×</button>');

  });
}

function writeEditorToFile(theFileEntry) {
  var id=document.getElementsByClassName('editor tab-pane in fade active show')[0].id;
  var str = tabTextarea[id].getValue();
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

function handleSaveButton() {
  if (fileEntry && hasWriteAccess) {
    writeEditorToFile(fileEntry);
  } else {
    $("#saveFile").trigger("click");
  }
}

function handleNewTab()
{
  tabID++;
  $('#tab-list').append($('<li><a href="#' + tabID + '" class="tab" data-toggle="tab">Untitled<button class="close" type="button" title="Remove this page">×</button></a></li>'));
  $('#tab-content').append($('<div class=" editor tab-pane in fade" id="' + tabID + '"></div>'));

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
        "Cmd-S": function(instance) { handleSaveButton() },
        "Ctrl-S": function(instance) { handleSaveButton() },
        "'{'": function(cm) { cm.bracketComplete(cm, '{'); },
        "'('": function(cm) { cm.bracketComplete(cm, '('); },
        "'['": function(cm) { cm.bracketComplete(cm, '['); },
        "Ctrl-N": function(instance) {handleNewTab()},
        "Ctrl-Space": "autocomplete"
      }
    });
    tabTextarea[tabID]["fileName"]="Untitled";
    newFile();
    var containerWidth = window.innerWidth-20;
    var containerHeight = window.innerHeight-document.getElementById("analysis").offsetHeight-20;

    var scrollerElement = tabTextarea[tabID].getScrollerElement();
    scrollerElement.style.width = containerWidth + 'px';
    scrollerElement.style.height = containerHeight + 'px';

    tabTextarea[tabID].refresh();
    var hlLine = tabTextarea[tabID].setLineClass(0, "activeline");
}

function initWindowMenu(){
  file = new gui.Menu({ 'type': 'menubar' });
  file.append(new gui.MenuItem({
        label:'NewFile',
        click: function(){
          handleNewTab();
        }
  }));
  file.append(new gui.MenuItem({
      label:'OpenFile',
      click: function (){
        handleOpenButton();
      }
  }));
  file.append(new gui.MenuItem({
      label :'SaveFile',
      click:function (){
        handleSaveButton();
      }
  }));
  file.append(new gui.MenuItem({
      label :'Analyse',
      click:function(){
      window.open('chart.html', '_blank');
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
          el.innerHTML=modules[i].timeAnalysis+'\n'+modules[i].powerAnalysis+ modules[i].text;

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
  /*
  newButton = document.getElementById("new");
  openButton = document.getElementById("open");
  saveButton = document.getElementById("save");
  compileButton = document.getElementById("compile");


  newButton.addEventListener("click", handleNewButton);
  openButton.addEventListener("click", handleOpenButton);
  saveButton.addEventListener("click", handleSaveButton);
  */

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
        "Cmd-S": function(instance) { handleSaveButton() },
        "Ctrl-S": function(instance) { handleSaveButton() },
        "'{'": function(cm) { cm.bracketComplete(cm, '{'); },
				"'('": function(cm) { cm.bracketComplete(cm, '('); },
        "'['": function(cm) { cm.bracketComplete(cm, '['); },
        "Ctrl-N": function(instance) {handleNewTab()},
        "Ctrl-Space": "autocomplete"

      }
    });
    tabTextarea[1]=editor;
    tabTextarea[1]["fileName"]="Untitled";
    var editordiv= document.getElementById("c");
    var infodiv=document.createElement("div");
    infodiv.id="analysis";
    editordiv.append(infodiv);
    var hlLine = editor.setLineClass(0, "activeline");
    var tabsBar = document.getElementById("tab-list");
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
  var scrollerElement = tabTextarea[id] .getScrollerElement();
  scrollerElement.style.width = containerWidth + 'px';
  scrollerElement.style.height = containerHeight + 'px';

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
