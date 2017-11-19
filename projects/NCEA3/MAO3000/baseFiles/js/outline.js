//	There are two types of outlines - both use the same standards structire but they have different top levels
//	$outlineFull: if the outline is broken up into categories
//	$outlinePartial: if there is only one set of internals and externals for the course


//---------- SYNTAX - FULL OUTLINE ----------//
//	var $outlineFull = [
//		catergory = { 					// Copy this block (lines 7-16) for additional categories
//			title: 					,	// The title to appear in the circle and at the top of its window
//			internalStandards: [
//				STANDARDS INFO
//			],
//			externalStandards: [
//				STANDARDS INFO
//			]
//		},
//	]
//---------- END OF SYNTAX - FULL OUTLINE ----------//


//---------- SYNTAX - PARTIAL/SINGLE OUTLINE ----------//
//	var $outlinePartial = {
//		internalStandards: [
//			STANDARDS INFO
//		],
//		externalStandards: [
//			STANDARDS INFO
//		]
//	}
//---------- END OF SYNTAX - PARTIAL/SINGLE OUTLINE ----------//


//---------- SYNTAX - STANDARDS INFO ----------//
//	internalStandards: [		// or externalStandards - remove if they are not needed
//		standard = {			// Copy this block (lines 33-45) for additional standards
//			number:			,	// e.g. US000/AS000
//			description:	,
//			credits:		,	// e.g. '4 credits'
//			subheading:		,	// Text to display below header once clicked
//			modules:[{			// Modules related to this standard
//				code:		,	// e.g. EN1001
//				title:		,	// Module title
//			},{					// Copy this block (lines 18-20) for additional modules
//				code:		,
//				title:		,
//			}]
//		},
//	],
//---------- END OF SYNTAX - STANDARDS INFO ----------//
$outlinePartial = {
	internalStandards: [
		standard = {
			number: 'AS91650',
			description: 'Whakarongo kia m&#333;hio ki te reo M&#257;ori o te ao wh&#257;nui',
			credits: '4 credits',
			subheading: 'You will need to complete the following modules to achieve this standard:',
			modules: [{
				code: 'MAO3001',
				title: 'Ng&#257; &#256;huatanga K&#333;rero'
			},{
				code: 'MAO3002',
				title: 'Ng&#257; &#256;huatanga Whakarongo'
			},{
				code: 'MAO3003',
				title: 'Ng&#257; Waihanga Tuhinga'
			}]
		},
		standard = {
			number: 'AS91651',
			description: 'K&#333;rero kia whakamahi i te reo M&#257;ori o te ao wh&#257;nui',
			credits: '6 credits',
			subheading: 'You will need to complete the following modules to achieve this standard:',
			modules: [{
				code: 'MAO3001',
				title: 'Ng&#257; &#256;huatanga K&#333;rero'
			},{
				code: 'MAO3002',
				title: 'Ng&#257; &#256;huatanga Whakarongo'
			},{
				code: 'MAO3003',
				title: 'Ng&#257; Waihanga Tuhinga'
			}]
		},
		standard = {
			number: 'AS91654',
			description: 'Waihanga tuhinga whai take i te reo M&#257;ori o te ao wh&#257;nui',
			credits: '6 credits',
			subheading: 'You will need to complete the following modules to achieve this standard:',
			modules: [{
				code: 'MAO3001',
				title: 'Ng&#257; &#256;huatanga K&#333;rero'
			},{
				code: 'MAO3002',
				title: 'Ng&#257; &#256;huatanga Whakarongo'
			},{
				code: 'MAO3003',
				title: 'Ng&#257; Waihanga Tuhinga'
			}]
		},
	],
	externalStandards: [
		standard = {
			number: 'AS91652',
			description: 'P&#257;nui kia m&#333;hio ki te reo M&#257;ori o te ao wh&#257;nui',
			credits: '6 credits',
			subheading: 'You will need to complete the following module to achieve this standard:',
			modules: [{
				code: 'MAO3004',
				title: 'He Mahi Whakang&#363;ng&#363;'
			}]
		},
		standard = {
			number: 'AS91653',
			description: 'Tuhi i te reo M&#257;ori o te ao wh&#257;nui',
			credits: '6 credits',
			subheading: 'You will need to complete the following module to achieve this standard:',
			modules: [{
				code: 'MAO3004',
				title: 'He Mahi Whakang&#363;ng&#363;'
			}]
		},
	]
}