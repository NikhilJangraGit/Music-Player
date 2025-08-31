let play = document.getElementById("play");
let pause = document.getElementById("pause");
let audio = document.getElementById("audio");

let progress= document.getElementById("progress");
audio.onloadeddata = ()=>{
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}
play.addEventListener("click",()=>{
        audio.play();
        play.style.display="none";
        pause.style.display="block";
});
pause.addEventListener("click",()=>{
    audio.pause();
    play.style.display="block";
    pause.style.display="none";
});

setInterval(()=>{
            progress.value=audio.currentTime;
        },500);
progress.onchange=()=>{
    audio.play();
    audio.currentTime=progress.value;
    play.style.display="none";
    pause.style.display="block";
}
