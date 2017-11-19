// Delete if the button goes straight to the modules window i.e. no pathways/topics window
var $courseTop = {
	'Endorsement': {
		image: 'Endorsement',
		text: 'A full NCEA programme with the opportunity to gain endorsement with Merit or Excellence.<br><br>This course offers internal and external standards.',
	},
	'Internal': {
		image: 'Internal',
		text: 'An internal standards course with a focus on gaining 16 credits, including literacy (5 reading and 5 writing credits) with internal standards only.',
	},
	'Literacy': {
		image: 'Literacy',
		text: 'A combination of internal Unit and Achievement Standards that develop communication skills in a practical context.',
	},
}

//	'Pathways' OR 'Topics' OR 'Modules'
// var $tabType = 'Pathways'
// var $tabType = 'Topics'
var $tabType = 'Modules'

var $alwaysUnlocked = [
]

var $modules = {
	// Each module is grouped by the module code - note: circle image names to match the code
	// groups: used to identify the layer the module sits under. If there is no $moduleTopLevel then groups has no effect
	MAO3001: {
		groups: ['Internal'],
		title: 'Ng&amacr; &Amacr;huatanga K&omacr;rero',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11896/viewContent/122726/View',
	},
	MAO3002: {
		groups: ['Internal'],
		title: 'Ng&amacr; &Amacr;huatanga Whakarongo',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11896/viewContent/122773/View',
	},
	MAO3003: {
		groups: ['Internal'],
		title: 'Ng&amacr; Waihanga Tuhinga',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11896/viewContent/122817/View',
	},
	MAO3004: {
		groups: ['Internal'],
		title: 'He Mahi Whakang&umacr;ng&umacr;',
		blurb: '',
		link: 'https://tekura.desire2learn.com/d2l/le/content/11896/viewContent/122857/View',
	},
}