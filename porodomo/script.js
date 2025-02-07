//timer setting
let offset=1;
let workTime=1500;
let breakTime=300;

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
        if(isBreak) time=breakTime+offset;
        else time=workTime;
        playAlarm();
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
restart.addEventListener("click", async ()=>{
    clearInterval(inter);
    if(isBreak) time=breakTime;
    else time=workTime;
    setTime(time);
    isStopped=true;
    startStop.textContent="Start";
    restart.classList.add("spinspin");
    await sleep(1000);
    restart.classList.remove("spinspin");
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

//switch work break display active color
let workDisplay=document.querySelector(".work");
let breakDisplay=document.querySelector(".break");
function switchWorkBreakDisplay(isBreak){
    if(isBreak===true){
        console.log("Break");
        breakDisplay.classList.add("display-active");
        workDisplay.classList.remove("display-active");
    }else{
        console.log("Work");
        workDisplay.classList.add("display-active");
        breakDisplay.classList.remove("display-active");
    }
}

//alarm player module
function playAlarm(){
    let audio=new Audio("/porodomo/asset/alarm.mp3");
    audio.play();
}

//redability functions
function toggle(value){
    return !value;
}
function isEnd(){
    return (time===0);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}