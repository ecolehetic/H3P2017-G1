'use strict';

var video=document.getElementById('video');
var button=document.getElementById('button');
var progressBar=document.getElementById('progressBar');

video.load();
button.classList.add('loading');

video.addEventListener('canplaythrough',playPause,false);
window.addEventListener('click',playPause,false);
video.addEventListener('ended',playPause,false);
video.addEventListener('timeupdate',playProgress,false);
video.addEventListener('progress',bufferProgress,false);
progressBar.addEventListener('click',setTime,false);

function playPause (e){
	console.log(e.currentTarget);
	if(e.type=="canplaythrough"){
		video.removeEventListener('canplaythrough',playPause,false);
	}
	button.classList.remove('loading');
	if(video.paused){
		video.play();
		button.classList.add('off');
	}else{
		if(video.ended){
			video.currentTime=0;
			video.play();
		}
		else{
			video.pause();
			button.classList.remove('off');
		}
	}
}

function playProgress (){
	var progressW=this.currentTime*100/this.duration;
	document.querySelector('.progress').style.width=progressW+'%';
}
function bufferProgress () {
	/*var i=this.buffered.length;
	console.log(i);*/
	var bufferW=this.buffered.end(0)*100/this.duration;
	document.querySelector('.buffer').style.width=bufferW+'%';
}
function setTime (e) {
	console.log(e.currentTarget); 
	e.stopPropagation();
	//this==e.currentTarget
	video.currentTime=e.offsetX*video.duration/this.offsetWidth;
}
