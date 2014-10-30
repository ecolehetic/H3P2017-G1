"use strict";

var partyPlayer={

	
	init : function(){
		var self=this;
		this.player = document.getElementById('player');
		model.getPlaylist(function(tracks){
			for(var i in tracks){ 
				self.render(tracks[i]);
			}
			model.listen(function(track){
				self.render(track);
			});
		});
	},
	
	render : function(track){
		UI.render(track,function(li){
			li.addEventListener('click',partyPlayer.playTrack,false);
		});
	},
	
	playTrack : function(e){
		e.preventDefault();
		var track=this.getAttribute('data-tracksrc');
		partyPlayer.player.pause();
		partyPlayer.player.setAttribute('src',track);
		partyPlayer.player.load();
		partyPlayer.player.play();
		UI.togglePlaying(this);		
	}	
}
partyPlayer.init();












