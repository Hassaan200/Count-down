

var newYear  = new Date("November 8, 2024 23:59:59").getTime();
function countdown(){
    var currentdate = new Date().getTime();
    var timeleft = newYear - currentdate;
    var  hours =  Math.floor((timeleft/(1000*60*60)));
    var  minutes =  Math.floor((timeleft%(1000*60*60)) / (1000*60));
    var  seconds =   Math.floor((timeleft%(1000*60)) / 1000);

   document.getElementById("CountDown").innerHTML= `<span>${hours} h:</span> <span>${minutes} m:</span> <span>${seconds} s</span>`

   if (timeleft < 0) {
    document.getElementById("countdown").innerHTML = "Offer Expired";
}
else{
    setTimeout(countdown, 1000);
}
}
countdown();


