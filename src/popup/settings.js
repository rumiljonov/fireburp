 
// { name: "Personal", icon: "fingerprint", iconUrl: "resource://usercontext-content/fingerprint.svg", color: "blue", colorCode: "#37adff", cookieStoreId: "firefox-container-1" }

function renderPage(_containers, _checked) {
	var tbl = document.getElementById("containers");
	_containers.forEach((c) => {
		var template = `
		<tr>
		<td><font color="${c.colorCode}">${c.name}</font></td> 
		<td> 
			<label class="switch"> 
			  <input class=checkbox _color="${c.colorCode}" cookie="${c.cookieStoreId}" type="checkbox" ${_checked.includes(c.cookieStoreId)? 'checked' : '' }> 
			  <span class="slider round"></span>
			</label>
		</td> 
		</tr>`;
		tbl.tBodies[0].innerHTML += template;

	})	
	var checkbox_list = document.getElementsByClassName("checkbox");
	Array.from(checkbox_list).forEach((checkbox_elem) => {
		checkbox_elem.onchange = checkboxAction;
	})
}

async function checkboxAction(elem){
	var cookieStoreId = this.getAttribute("cookie");
	if (this.checked) {
		checked.push(cookieStoreId);
		//this.nextSibling.nextSibling.style.backgroundColor = this.getAttribute("_color");
	}
	else {
		checked = checked.filter(function(e){ return e != cookieStoreId});
		//this.nextSibling.nextSibling.style.backgroundColor = this.getAttribute("#ccc");
	}	
	browser.storage.local.set({checked: checked });
	
	
}


var containers;
var checked;
browser.contextualIdentities.query({}).then(
	function(containers_list){
		containers = containers_list;
		browser.storage.local.get("checked").then(
			function(items){
				if (items.checked) {
					checked = items.checked;
				}
				else {
					checked = []
				}
				renderPage(containers, checked);
			}
		);
	}
);



