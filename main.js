
const time = document.getElementById("time");
const start = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 0;
let timer = null;
function formatTime(sec){
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;
    return `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
}

start.onclick = () => {
    if(timer !== null) return; 

    timer = setInterval(() => {
        seconds++;
        time.innerHTML = formatTime(seconds);
    }, 1000);
};

stopBtn.onclick = () => {
    if(timer !== null){ 
        clearInterval(timer);
        timer = null;
        stopBtn.textContent = "Resume";
    } else {
        timer = setInterval(()=>{
            seconds++;
            time.innerHTML = formatTime(seconds);
        },1000);
        stopBtn.textContent = "Stop";
    }
};

reset.onclick = () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    time.innerHTML = formatTime(seconds);
};
