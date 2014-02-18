var Contact = Backbone.Model.extend({
	defaults:{
		name: 'sparky',
		phone: '999-9999',
		avatar: 'http://dogswiki.wikispaces.com/file/view/dalmatian.jpg/347843330/317x357/dalmatian.jpg',
		bio: 'woof'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact
})