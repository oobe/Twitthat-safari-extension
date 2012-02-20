((function () {
	
	if (safari.self.hasInjected)
		return;
		
	// Check if web content is a iframe, if in a iframe, just return
	if (window.top !== window) {
   		console.log("I'm a iframe.");
   		return;
	}

	safari.self.hasInjected = true;
	safari.self.addEventListener("message", function (anEvent) {
	
		switch (anEvent.name) {
			
			case "tt-didRequestPost": {
			
				var theURL = anEvent.message.theURL;
				var theTitle = anEvent.message.theTitle;
				var twitThatUrl = "http://twitthat.com/go?url="+theURL+"&title="+theTitle;
				
				TwitThatPop=window.open(twitThatUrl,"TwitThatPop","width=600,height=500,location=no,status=no,scrollbars=no,resizable=no,dependent=yes");
				setTimeout("TwitThatPop.focus()",100);

				break;
			}
			
			default: {
				break;
			}
			
		}
	
	}, false);

})());