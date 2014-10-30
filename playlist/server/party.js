var party={
	init : function(){
		this.io = require('socket.io').listen(8080);
		this.io.on('connection',this.listen);
	},
	
	listen : function(socket){ 
			
	}
	
};
party.init();