'use strict';

$(document).ready(function(){
var ws = new WebSocket('ws://138.197.119.120:8080/websocket');
ws.onopen = function(){
console.log('connected to websocket');
};
ws.onmessage = function(msg){
	var resp = JSON.parse(msg.data);
    $('#messages')
      .append($('<li>')
      .append($('<span class="message">').text(resp.message)));
};
ws.onerror = function(err){
console.log(err);
};
ws.onclose = function(){
console.log('closed');
};

$('form').submit(function(){
 	var $this = $(this);
    // ws.onopen = function() {
    //   console.log('sent message: %s', $('#m').val());
    // };
    var word =$('#m').val();
    var msg = { event:'submit',message:word}
    //ws.send($('#m').val());
    ws.send( JSON.stringify(msg) );
    $('#m').val('');
             
    return 'test';
  });
});


{ 
    "type":"message",
    "text":"sldfkjskf",
    "success":true,
}
    




