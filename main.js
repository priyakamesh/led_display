console.log("Hello")

document.getElementById("getString").focus()

const parseStr = () =>{
  var str = document.getElementById("getString").value
  var parsedStr = str.replace(/[0-9]/g, '').replace(/\W/g,'');
  document.getElementById("outputString").innerHTML = parsedStr.toUpperCase()
}

document.getElementById("button").addEventListener("click",function(e){
  e.preventDefault();
  parseStr()
})
