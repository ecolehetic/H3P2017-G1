"use strict";

var model={
	
	getCollection : function(callback){
		// connection au socket
		this.socket = io.connect('http://macbook-maraboutee.local:3000');
		// emit un event getCollection
		this.socket.emit('getCollection');
		// écoute un event collection et récupère le msg du server.
		this.socket.on('collection',function(msg){
			console.log(msg); 
		});
		//callback.call(this,tracks);
	}
	
	
}