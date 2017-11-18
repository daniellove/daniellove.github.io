$noInstructions = true
// Delete if the button goes straight to the modules window i.e. no pathways/topics window
var $courseTop = {
	'Maths': {
		image: 'Maths',
		text: '',
	},
	'English': {
		image: 'English',
		text: '',
	},
	'Science': {
		image: 'Science',
		text: '',
	},
	'Languages': {
		image: 'Languages',
		text: '',
	},
}

//	'Pathways' OR 'Topics' OR 'Modules'
// var $tabType = 'Modules'
var $tabType = 'Topics'
// var $tabType = 'Modules'

var $alwaysUnlocked = [
]

var $modules = {
	// Each module is grouped by the module code - note: circle image names to match the code
	// groups: used to identify the layer the module sits under. If there is no $moduleTopLevel then groups has no effect
	MXO2031: {
		groups: ['Maths',],
		title: 'Sequences and series 1',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151101/View',
	},

	MXO2032: {
		groups: ['Maths',],
		title: 'Sequences and series 2',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151111/View',
	},

	MXO2042: {
		groups: ['Maths',],
		title: 'Trigonometry 2',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151119/View',
	},

	MXO2051: {
		groups: ['Maths',],
		title: 'Networking',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151125/View',
	},
	// INSTRUCTIONS FROM WRITER: ENO2010 and ENO2011 to be omitted from the landing page
	// ENO2010: {
	// 	groups: ['Internal',],
	// 	title: 'The Outsider',
	// 	blurb: '',
	// 	link: 'https://tekura.desire2learn.com/d2l/le/content/11809/viewContent/140583/View',
	// },
	ENO2010: {
		groups: ['English',],
		title: 'The Outsider',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151014/View',
	},

	ENO2020: {
		groups: ['English',],
		title: 'Fish Skin Suit',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151039/View',
	},

	ENO2047: {
		groups: ['English',],
		title: 'Macbeth',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151029/View',
	},


	ENO2961: {
		groups: ['English',],
		title: 'Formal Interview',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/151050/View',
	},
	
	MAO104: {
		groups: ['Languages',],
		title: 'Time, Days and Months',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150735/View',
	},

	MAO201: {
		groups: ['Languages',],
		title: 'Seasons and Weather',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150746/View',
	},

	GRO1005: {
		groups: ['Languages',],
		title: 'My Daily Routine',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150773/View',
	},

	SPO303: {
		groups: ['Languages',],
		title: 'Un Intercambio',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150803/View',
	},

	SCO302: {
		groups: ['Science',],
		title: 'Journey of Germs',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150902/View',
	},

	SCO403: {
		groups: ['Science',],
		title: 'Body Odyssey',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150918/View',
	},

	SCO409: {
		groups: ['Science',],
		title: 'Get the Picture',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150934/View',
	},
	
	SCO502: {
		groups: ['Science',],
		title: 'Deep Space',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11266/viewContent/150952/View',
	},

	
}