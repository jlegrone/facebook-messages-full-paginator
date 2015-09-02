// This part of the script triggers when page is done loading

$(document).on('mouseenter focus', '.messagesContent', function(){
	$(this).attr('data-reactid', '');
});

$(document).on('mouseenter focus', 'a[href^="/messages/"]', function(){
	$(this).unbind( "click" ).bind('click', function(e){
		window.history.pushState($(this).attr('href'), '', $(this).attr('href'));
		window.history.go(0);
	});
});