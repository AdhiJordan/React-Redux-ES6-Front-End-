var $ = require('jquery');

module.exports = {
	setPersons: function (persons) {
		if($.isArray(persons)) {
			localStorage.setItem('persons', JSON.srtingify(persons));
			return persons;
		}
	},


	getPersons: function () {
		var stringPersons = localStorage.getItem('persons');
		var persons: []; 
		try {
			persons = JSON.parse(stringPersons);
		} catch (e) {

		}


		if($.isArray(persons)) {
			return persons;

		}
		else {
			return [];
		}
	}
};