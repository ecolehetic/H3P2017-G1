"use strict";

var model={
	
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
	}
	
		
}









