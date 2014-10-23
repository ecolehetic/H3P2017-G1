"use strict";


var card={};
var addCard=document.getElementById('addCard');
addCard.addEventListener('submit',getCard,false);
document.getElementById('addLocation').addEventListener('click',addLocation,false);

model.init(function(card){
	UI.render(card);
});

function getCard (e) {
	e.preventDefault();
  var name=document.querySelector("input[name='name']").value;
  var date=document.querySelector("input[name='date']").value;
  if(!name){return;}
	var cardDate=!date?new Date().getTime():new Date(date).getTime();
	card.name=name;
	card.date=cardDate;
	model.add(card,function(){
		console.log('item recorded');
		UI.render(card);
	});
}

function deleteCard (e) {
	e.preventDefault();
	var self=this;
	var key=self.getAttribute('data-key');
	if(!key){return;}
	model.delete(key,function(){
		UI.delete(self);
	});

}


function addLocation(e){
	e.preventDefault();
	navigator.geolocation.getCurrentPosition(
		function(pos){
			var userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};
			drawMap(userPos);
			console.log(userPos); 
		},
		function(){
			var userPos={lat:48.857713,lng:2.347271};
			drawMap(userPos);
		},
		{enableHighAccuracy:true}
	);
	
}
function drawMap(userPos){
	var centered=new google.maps.LatLng(userPos.lat,userPos.lng);
	var settings={
		zoom:17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center:centered
	}
	new google.maps.Map(document.querySelector('#map > div'),settings);
	document.getElementById('map').classList.toggle('on');
}


















