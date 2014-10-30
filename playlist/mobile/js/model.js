"use strict";

var model={
	
	getCollection : function(callback){
		// connection au socket
		this.socket = io.connect('http://macbook-maraboutee.local:3000');
		// emit un event getCollection
		this.socket.emit('getCollection');
		// écoute un event collection et récupère le json du server.
		this.socket.on('collection',function(tracks){
			// on renvoie les tracks au controller.
			callback.call(this,tracks);
		});	
	}
	
	
}