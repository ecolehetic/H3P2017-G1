'use strict';

var video=document.getElementById('video');
var button=document.getElementById('button');
video.load();
button.classList.add('loading');

video.addEventListener('canplaythrough',playPause,false);
window.addEventListener('click',playPause,false);
video.addEventListener('timeupdate',playProgress,false);

function playPause(e){
	button.classList.remove('loading');
	if(video.paused){
		video.play();
		button.classList.add('off');
	}
	else{
		video.pause();
		button.classList.remove('off');
	}
}

function playProgress(){
	var self=this;
	var progress=self.currentTime*100/self.duration;
	document.querySelector('.progress').style.width=progress+'%';
}
















