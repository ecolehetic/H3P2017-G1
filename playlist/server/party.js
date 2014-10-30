var party={
	init : function(){
		// create socket
		this.io = require('socket.io').listen(3000);
		
		this.playlist =[];
		// écoute un event connection lorsqu'un script ouvre un socket
		this.io.on('connection',this.listen);
	},
	
	listen : function(socket){ 
		// écoute un event getCollection
			socket.on('getCollection',function(){
				// récupère le json
				var collection = require('./collection.json');
				//émet un event collection en passant le json.
				socket.emit('collection',collection);
			});
			
			socket.on('add',function(datas){
				party.playlist.push(datas);
				console.log(party.playlist); 
				socket.emit('added');
			});
			
	}
	
};
party.init();












