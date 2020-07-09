var player = document.querySelector('.player');
var progress = document.querySelector('.progress');
var video=document.querySelector('.myvideos');
var progresBar = document.querySelector('.progress__box');
var playing = document.querySelector('.play');
var speeds = document.querySelectorAll('.speed');
var ranges = document.querySelectorAll('.playing__range');
var screen=document.querySelector('.screen');

video.addEventListener('click',handlePlaying);
playing.addEventListener('click', handlePlaying);

function handlePlaying(){
    if(video.paused){
        video.play();
        playing.innerHTML="| |";
        // handleProgres();
    }else{
        video.pause();
        playing.innerHTML = "▶️";
    }
}
// Speed 10s back and 25s forward
speeds.forEach(speed=>speed.addEventListener('click',handleSpeed));
function handleSpeed(){
    video.currentTime+=parseFloat(this.dataset.skip);
    video.play();
}
// volume and playbackRate set
ranges.forEach(range=>range.addEventListener('click',handleRanges));
function handleRanges(){
    video[this.name]=this.value;    
}

// update Progress bar
video.addEventListener('timeupdate',handleProgres);
function handleProgres(){   
let currentTime=video.currentTime;
let duration=video.duration;
let progress = (currentTime / duration) * 100;
  document.querySelector('.progress__bar').style.flexBasis=`${progress}%`;   
}
// Add full Screen mode
screen.addEventListener('click',fullScreenMode);
function fullScreenMode(){
 video.classList.toggle('fullscreen');
 player.classList.toggle('fullscreen');
 progresBar.classList.toggle('fullscreen');
 progress.classList.toggle('fullscreen');
 
    
}