//timer setting
let offset=1;
let workTime=3;
let breakTime=5;

//init values
let time=workTime;
let isStopped=true;
let isBreak=false;
let inter=0;

//timer + start and stop module
let startStop=document.querySelector(".startStop");
startStop.addEventListener("click", ()=>{
    isStopped=toggle(isStopped);
    if(isStopped===true){
        startStop.textContent="Start";
        clearInterval(inter);
    }else{
        startStop.textContent="Pause";
        inter=setInterval(runTimer, 1000);
    }
});

//running timer module
function runTimer(){
    if(isEnd()){
        isBreak=!isBreak;
        if(isBreak) time=breakTime;
        else time=workTime;
        switchWorkBreakDisplay(isBreak);
    }
    countDown();
}
function countDown(){
    time--;
    setTime(time);
    
}

//reset module
let restart=document.querySelector(".restart");
restart.addEventListener("click", ()=>{
    clearInterval(inter);
    if(isBreak) time=breakTime;
    else time=workTime;
    setTime(time);
    isStopped=true;
    startStop.textContent="Start";
});

//time display modifyer
let minute=document.querySelector(".minute");
let second=document.querySelector(".second");
function setTime(time){
    let minuteValue=Math.floor(Number(time/60));
    minuteValue=minuteValue.toString();
    minute.textContent=minuteValue.padStart(2, "0");
    let secondValue=Math.floor(Number(time%60));
    secondValue=secondValue.toString();
    second.textContent=secondValue.padStart(2, "0");
}

let workDisplay=document.querySelector(".work");
let breakDisplay=document.querySelector(".break");
function switchWorkBreakDisplay(isBreak){
    if(isBreak===true){
        console.log("Break");
        breakDisplay.style.backgroundColor="white !important";
        breakDisplay.style.color="black !important";
        workDisplay.style.backgroundColor="black !important";
        workDisplay.style.color="white !important";
    }else{
        console.log("Work");
        workDisplay.style.backgroundColor="white !important";
        workDisplay.style.color="black !important";
        breakDisplay.style.backgroundColor="black !important";
        breakDisplay.style.color="white !important";
    }
}

//redability functions
function toggle(value){
    return !value;
}
function isEnd(){
    return (time===0);
}