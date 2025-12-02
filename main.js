const time = document.getElementById("time");
const start = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const reset = document.getElementById("reset");
const lab = document.getElementById("lab");
const labs = document.getElementById("labs");

let seconds = 0;
let timer = null;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;
    return `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
}


start.addEventListener("click", () => {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;
        time.textContent = formatTime(seconds);
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        stopBtn.textContent = "Resume";
    } else {
        timer = setInterval(() => {
            seconds++;
            time.textContent = formatTime(seconds);
        }, 1000);
        stopBtn.textContent = "Stop";
    }
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    labs.innerHTML='';
    time.textContent = formatTime(seconds);
});

lab.addEventListener("click",()=>{
    if (timer !== null) {
        const li=document.createElement('li')
        li.textContent=time.textContent;
        labs.appendChild(li)
    }
})
