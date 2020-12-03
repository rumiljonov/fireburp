"use strict";

// checked format - [cookieStoreId1, cookieStoreId2, cookieStoreId3]

var storage = {};

async function updateStorageData() {
  await browser.storage.local.get().then(
    function(result) {
      if (!result.checked) {
        browser.storage.local.set({checked: [] });
        storage.checked = [];
      }
      else {
        storage.checked = result.checked;
      }
      browser.contextualIdentities.query({}).then(
        function(identities){
          storage.containers = identities;
        }
      );
    } 
  )
  return;
}



async function addContainerHeader(e) {
  var containerHeader = Object({"name": "fireburp", "value": ""});  
  
  await updateStorageData();
  if (!storage.checked.includes(e.cookieStoreId)) {
    return {requestHeaders: e.requestHeaders};
  }

  await browser.contextualIdentities.get(e.cookieStoreId).then(
  	function(identity){
  		containerHeader.value = [identity.color].join(';'); //[identity.name, identity.color].join(';');
  	}
  )
  
  e.requestHeaders.push(containerHeader);
  
  return {requestHeaders: e.requestHeaders};
}


browser.webRequest.onBeforeSendHeaders.addListener(addContainerHeader,
                                          {urls: ["<all_urls>"]},
                                          ["blocking", "requestHeaders"]);