let btn = document.getElementById("changecolor")
let div = document.getElementById("colorfuldiv")
let colorname = document.getElementById("color")

var color = '';

function rendercolor(){
  var letters = '0123456789ABCDEF';
    var color1 ="#"
    for (var i = 0; i < 6; i++) {
      color1 += letters[Math.floor(Math.random() * 16)];
    }
     
    return color1;
  
}

btn.addEventListener("click", function(){
    color = rendercolor()
    colorname.innerHTML = color
    div.style.backgroundColor = color
    color = "#"
  console.log(color)
})