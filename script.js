let play = document.getElementById("play");
let pause = document.getElementById("pause");
let audio = document.getElementById("audio");
audio.onloadedmetadata = ()=>{
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}
play.addEventListener("click",()=>{
        audio.play();
    setInterval(()=>{
            progress.value=audio.currentTime;
        },500);
        play.style.display="none";
        pause.style.display="block";
});
pause.addEventListener("click",()=>{
    audio.pause();
    play.style.display="block";
    pause.style.display="none";
});

let progress= document.getElementById("progress");


progress.onchange=()=>{
    audio.play();
    setInterval(()=>{
            progress.value=audio.currentTime;
        },500);
    audio.currentTime=progress.value;
    play.style.display="none";
    pause.style.display="block";

}


