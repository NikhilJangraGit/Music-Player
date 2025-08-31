let play = document.getElementById("play");
let pause = document.getElementById("pause");
let audio = document.getElementById("audio");
audio.onloadedmetadata = ()=>{
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}
play.addEventListener("click",()=>{
        audio.play();
        play.style.display="none";
        pause.style.display="block";
});
if(pause.style.display=="block"){
    audio.play();
}  
pause.addEventListener("click",()=>{
    audio.pause();
    play.style.display="block";
    pause.style.display="none";
});

let progress= document.getElementById("progress");

if (audio.play()) {
        setInterval(()=>{
            progress.value=audio.currentTime;
        },500);
        play.style.display="none";
        pause.style.display="block";
}
progress.onchange=()=>{
    audio.play();
    audio.currentTime=progress.value;
    play.style.display="none";
    pause.style.display="block";

}

