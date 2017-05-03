
//initializing an array
var array = [];


function getInput() {
   var input = document.getElementById('input').value.toUpperCase();
   // var output = document.getElementById("output")
    // output.value = "";
    var output = '';
    for (var i = 0; i < input.length; i++) {

      output += input[i].charCodeAt(0) + " ";

   }
   array = output.split(" ")
   array.pop()
   console.log("array",array);
   var result = array.map((num) =>{
    if(num > 31) {
      return String.fromCharCode(parseInt(num))
    }

   })
   document.getElementById("output").innerHTML = result.join("")




// draw letters using canvas, now only A letter is drawn.
  var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = "white";
   ctx.fillRect(0, 0, 1200, 160);
   ctx.fillStyle = "white";
   ctx.font = "40px Georgia";
   var input1 = typeof input
   console.log("input",input1);
   ctx.fillText(input, 75,100)
    ctx.textAlign = "center";

    for(var i = 10; i <= 160; i=i+10) {

      ctx.moveTo(0, i);
      ctx.lineTo(1200,i);
      ctx.stroke();
    }
    for(var i = 10; i <= 1200; i=i+10) {

      ctx.moveTo(i, 0);
      ctx.lineTo(i,160);
      ctx.stroke();
    }
    ctx.fillStyle = 'blue';

       ctx.fillRect(0,0,10,10)
       ctx.fillRect(10,0,10,10)
       ctx.fillRect(20,0,10,10)
       ctx.fillRect(0,10,10,10)
       ctx.fillRect(0,20,10,10)
       ctx.fillRect(0,30,10,10)
       ctx.fillRect(20,10,10,10)
       ctx.fillRect(20,20,10,10)
       ctx.fillRect(20,30,10,10)
       ctx.fillRect(10,20,10,10)

   var imgData = ctx.getImageData(0,0,30,40);
   console.log("imgData",imgData);
}
