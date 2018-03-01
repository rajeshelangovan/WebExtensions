// To create a context menu
browser.contextMenus.create({
	title:"Flipkart",
	id:"flipkart",
	contexts:["selection"]

});


browser.contextMenus.create({
	title:"Amazon",
	id:"amz",
	contexts:["selection"]

});

// Function to create a context menu

browser.contextMenus.onClicked.addListener(onclicked);

// Function call

function onclicked(info,tab){
		
	
	var idGet = info.menuItemId; // To get the id of the particular context menu which is selected
	
	if(info != null && info.hasOwnProperty('menuItemId') ){
		
		// Condtion to check the selected context menu is flipkart
		if(idGet === "flipkart"){
		var flipkartid = "https://www.flipkart.com/search?q="+info.selectionText;
		browser.tabs.create({url:flipkartid});
		}
		
	// Condtion to check the selected context menu is flipkart

	if(idGet === "amz"){
		var Amazon = " https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="+info.selectionText;
		browser.tabs.create({url:Amazon});
		}

	}

}