"use strict";

var model={
	
	load : function(params){
		return new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = ensureReadiness;
			function ensureReadiness() {
					if(xhr.readyState === 4) { 
						if(xhr.status==200){
							resolve(xhr);
						}
						else{
							reject();
						}
					}
			}
			xhr.open('GET', params.url, true);
			xhr.responseType = params.type||'text';
			xhr.send('');
		});
	},
	
	init : function(callback){
		for (var i in localStorage){
			callback.call(this,JSON.parse(localStorage.getItem(i)));
		} 
	},
	
	add : function(card,callback){
		localStorage.setItem(card.date,JSON.stringify(card));
		var key=localStorage.getItem(card.date);
		if(key){  
			callback.call(this);
		}
	},
	delete : function(key,callback){
		localStorage.removeItem(key);
		if(!localStorage.getItem(key)){
			callback.call(this);
		}
	},
	
	getUserLocation : function(callback){
		var self=this;
		navigator.geolocation.getCurrentPosition(
			function(pos){
				var userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};
				callback.call(this,userPos); 
			},
			function(){
				self.load({url:'js/pos.json',type:'json'}).then(
					function(xhr){
						var userPos={
							lat:xhr.response.coords.latitude,
							lng:xhr.response.coords.longitude};
						callback.call(this,userPos);
					},
					function(){
						// traitement de l'erreur xhr;
					}
				);
			},
			{enableHighAccuracy:true}
		);
	},
	
	
		
}









