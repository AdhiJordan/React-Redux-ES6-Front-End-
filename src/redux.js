import redux from 'redux'


var stateDefault = {
	name: '',
	persons: []
};

var reducer = (state = stateDefault, actions) => {

		switch (actions.type) {
			case 'CHANGE_NAME': 
			return {
				...state,
				name: actions.name
			};

			default: 
				return state;
		}
};


var store = redux.createStore(reducer); 


store.dispatch ({
	type: 'CHANGE_NAME',
	name: 'adhithya'
});

console.log('name is changed to', store.getState()); 