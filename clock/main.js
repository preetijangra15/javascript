function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let zone = "AM";

    if(h > 12){
        h = h - 12;
        zone = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + zone;

   document.getElementById("clock").innerText = time; 
   console.log(time);
   let t = setTimeout(function(){ currentTime() }, 1000);
}

showTime();