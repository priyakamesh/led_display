var array = [];
function getInput() {
   var input = document.getElementById('input').value.toUpperCase();
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
    if (input.charAt(0) === "A") {
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

   }
   else{
      alert("Now only letter 'a' will work, working on other alphabets")
   }
   var imgData = ctx.getImageData(0,0,30,40);
   console.log("imgData",imgData);
   var dataUrl = canvas.toDataUrl(imgData.ImageData.data)
   console.log("dataUrl",dataUrl);
}




// function U2A() {
//    var str = document.getElementById("input").value
//    console.log("str",str);
//     var reserved = '';
//     var regexp = \p{L}\p{M}*
//     var code = str.match(regexp);

//     if (code === null) {
//         document.getElementById("output").innerHTML = str;

//     }
//     else {
//     for (var i = 0; i < code.length; i++) {
//         reserved += String.fromCharCode(code[i].replace(regexp, ''));
//         console.log("reserved",reserved);
//     }
//      document.getElementById("output").innerHTML = reserved;
//   }
// }
