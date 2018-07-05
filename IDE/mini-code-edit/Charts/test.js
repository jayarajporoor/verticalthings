var deb= nw.Window.get().showDevTools();

var table = document.getElementById("table");

console.log(table);
/*
for(var i=0;i<50;i++)
{
  var row = table.insertRow(0);
  row.insertCell(0);
  row.cells[0].innerHTML="HELL0";
}


var SerialPort = require('serialport');
var serialPort = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
});

console.log("serialPort is on");
var serial_buf = [];
const MAX_SERIAL_BUF = 50;
serialPort.on('data', function (data) {
	var textChunk = data.toString('utf8');

    console.log('Data:',textChunk);
    serial_buf.unshift(textChunk);
    if(serial_buf.length > MAX_SERIAL_BUF){
      serial_buf.pop();
    }
});

function reload()
{
  for(var i=0;i<$('#myTable tr').length;i++)
  {
      cell.innerHtml= serial_buf[i];
  }
}
setInterval(reload, 5000);
*/
