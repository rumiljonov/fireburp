"use strict";

async function rewriteUserAgentHeader(e) {
  var containerHeader = Object({"name": "fireburp", "value": e.cookieStoreId});  
  
  await browser.contextualIdentities.get(e.cookieStoreId).then(
  	function(identity){
  		containerHeader.value = identity.name;
  	}
  )
  
  e.requestHeaders.push(containerHeader);
  
  return {requestHeaders: e.requestHeaders};
}


browser.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgentHeader,
                                          {urls: ["<all_urls>"]},
                                          ["blocking", "requestHeaders"]);


