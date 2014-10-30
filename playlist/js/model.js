"use strict";

var model={
	
	getPlaylist : function(callback){
		this.io = io.connect('http://macbook-maraboutee.local:3000');
		this.io.emit('getPlaylist');
		this.io.on('playlist',function(tracks){
			callback.call(this,tracks);
		});
	},
	
	listen : function(callback){
		this.io.on('added',function(track){
			callback.call(this,track);
		});
	}
	
	
}












