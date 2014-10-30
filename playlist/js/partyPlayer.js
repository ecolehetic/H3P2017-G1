"use strict";

var partyPlayer={
	init : function(){
		model.getPlaylist(function(tracks){
			for(var i in tracks){ 
				UI.render(tracks[i],function(li){
					
				});
			}
		});
	}
	
}
partyPlayer.init();