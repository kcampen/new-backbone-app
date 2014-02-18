console.log('whats up');

$(document).ready(function(){
	
	//start the app
	window.contacts = new ContactsCollection(data)

	contacts.each(function(contact){

		new ListView({model: contact});
	})

});

	