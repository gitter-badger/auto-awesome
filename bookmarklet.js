javascript:var%20awesome%20=%20function()%20{var%20domId%20=%20$(%27a[style*=left\\:\\%20370px]%27)[0].id;if%20(!domId)%20return;if%20(console)%20{console.log(%27Auto%20awesoming!%20(domId=%27%20+%20domId%20+%20%27)%27);}var%20elem%20=%20$(%27#%27%20+%20domId);if%20(!elem)%20{if%20(console)%20{console.error(%27Unable%20to%20find%20element!%20(domId=%27%20+%20domId%20+%20%27)%27);}return;}var%20evt%20=%20document.createEvent(%22MouseEvents%22);evt.initMouseEvent(%22click%22,%20true,%20true,%20window,%201,%200,%200,%20elem.offset().left,%20elem.offset().top,%20false,%20false,%20false,%20false,%200,%20null);document.getElementById(domId).dispatchEvent(evt);};setInterval(awesome,%2045000);window.alert(%22I%20don%27t%20always%20awesome,%20but%20when%20I%20do,%20I%20do%20it%20automatically.%22);
