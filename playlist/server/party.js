var party={
	init : function(){
		// create socket
		this.io = require('socket.io').listen(3000);
		// écoute un event connection lorsqu'un script ouvre un socket
		this.io.on('connection',this.listen);
	},
	
	listen : function(socket){ 
		// écoute un event getCollection
			socket.on('getCollection',function(){
				//émet un event collection en passant un msg.
				socket.emit('collection','Hello World!');
			});
	}
	
};
party.init();