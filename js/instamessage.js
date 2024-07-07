function sendToinsta(){
	let instaid = "abhin__c";

	let name = document.getElementById('Name').value;
	let message = document.getElementById('Message').value;

	var url = "https://ig.me/m/" + instaid + "?text="
	+ "Name : " +name+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}