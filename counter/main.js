const inc = document.getElementById("increment")
let reset  = document.getElementById("reset")
let dec = document.getElementById("decrement")

let num = 0

inc.addEventListener("click", function(){
    num+=1;
    number.innerHTML = num;
    console.log(num)
})
reset.addEventListener("click", function(){
    num = 0;
    number.innerHTML = num;
})

dec.addEventListener("click", function(){
    num -= 1;
    number.innerHTML = num;
})