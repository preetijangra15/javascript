let count = 0

function increment(){
    count+=1;
    document.getElementById("counter").innerText=count
}
let string= count
function savestring(){
    string = string +"-"+count
    document.getElementById("save-string").innerText=string
}