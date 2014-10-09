'use strict';

var video=document.getElementById('video');
var button=document.getElementById('button');
var pB=document.getElementById('progressBar');

video.load();
button.classList.add('loading');

video.addEventListener('canplaythrough',playPause,false);
window.addEventListener('click',playPause,false);
video.addEventListener('timeupdate',playProgress,false);
pB.addEventListener('click',setVideoTime,false);

function playPause(e){
	if(e.type=='canplaythrough'){
		video.removeEventListener('canplaythrough',playPause,false);
	}
	console.log(e); 
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

function setVideoTime(e){
	e.stopPropagation();
	console.log(e); 
	video.currentTime=e.offsetX*video.duration/this.offsetWidth;
}
















