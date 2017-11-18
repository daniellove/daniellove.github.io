$needToKnowGeneric = [
	button = {
		text: 'Welcome to '+$course
	},
	button = {
		text: 'Qualifications',
		activator: 'quals',
		menu: {
			item1: 'Gaining qualifications at Te Kura',
			item2: 'National Certificate of Educational Achievement (NCEA)',
			item3: 'Literacy and Numeracy requirements',
			item4: 'Endorsement',
			item5: 'NZQA fees',
			item6: 'National Certificates',
			item7: 'University Entrance',
			item8: 'Authentic learning',
			item9: 'Vocational pathways',
			item10: 'STAR'
		},
		content: getQualificationsContent()
	},
	button = {
		text: 'Your study',
		activator: 'study',
		menu: {
			item1: 'Organising your study',
			item2: 'Time commitment',
			item3: 'Timetable',
			item4: 'Pace of learning',
			item5: 'Return of work',
			item6: 'Queries about your work'
		},
		content: getStudyContent()
	},
	button = {
		text: 'Assessment information',
		activator: 'assess',
		menu: {
			item1: 'Standards',
			item2: 'Authenticity',
			item3: 'Assessment',
			item4: 'Internal assessment',
			item5: 'External assessment',
			item6: 'Exams',
			item7: 'Derived grades',
			item8: 'Appeals',
			item9: 'Your results/achievements'
		},
		content: getAssessmentContent()
	}	
]

function getQualificationsContent() {
	var $content = {
		item1: [
			'<p>Under the New Zealand Qualifications Framework (NZQF), it is possible to build a programme of learning so that credits attained can contribute to more than one qualification. At Te Kura, we offer the NCEA certificates at Levels 1, 2 and 3, as well as other national certificates, so it is possible for students to work towards more than one qualification at the same time.</p>',
		].join(""),

		item2: [
			'<p>To gain <b>NCEA Level 1</b>, you must have 80 credits.</p>',
			'<p>These credits can be made up of unit standards and achievement standards at any level, including a <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/" target="_blank">literacy and numeracy requirement.</a></p>',
			'<p>To gain <b>NCEA Level 2</b>, you must have 80 credits:</p>',
			'<ul>',
				'<li>60 of these must be from standards at Level 2 or above.</li>',
				'<li>20 credits at Level 1 or above may have already been counted for Level 1 and still count towards a Level 2 certificate.</li>',
			'</ul>',
			'<p>You must also meet the <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/" target="_blank">NCEA Level 1 literacy and numeracy requirements.</a></p>',
			'<p>To gain <b>NCEA Level 3</b>, you must have 80 credits:</p>',
			'<ul>',
				'<li>60 of these must be from standards at Level 3 or above.</li>',
				'<li>20 credits at Level 2 or above may have already been counted for Level 2 and still count towards a Level 3 certificate.</li>',
			'</ul>',
			'<p>You must also meet the <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/" target="_blank">NCEA Level 1 literacy and numeracy requirements</a>.</p>',
		].join(""),

		item3: [
			'<p>Standards offered at Te Kura that count towards literacy and numeracy requirements are identified in the <a href="http://www.tekura.school.nz/subjects-and-courses/search-courses" target="_blank">course descriptions information</a>.</p>',
			'<br>',
			'<ul>',
				'<li><b>Literacy</b> &ndash; either a minimum 10 credits through a package of <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/literacy-and-numeracy-unit-standards/" target="_blank">three literacy unit standards</a> or a minimum of 10 credits through <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/lit-num-subjects/" target="_blank">specified achievement standards</a>.<br><br></li>',
				'<li><b>Numeracy</b> &ndash; either a minimum 10 credits through a package of <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/literacy-and-numeracy-unit-standards/" target="_blank">three numeracy unit standards</a> or a minimum of 10 credits through <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/lit-num-subjects/" target="_blank">specified achievement standards</a>.</li>',
			'</ul>',
		].join(""),

		item4: [
			'<h3>Course endorsement</h3>',
			'<p>Students will gain course endorsement with merit if, in a calendar year, they gain 14 or more credits at merit and/or excellence in a course.</p>',
			'<p>They will gain course endorsement with excellence if, in a calendar year, they gain 14 or more credits at excellence in a course.</p>',
			'<p>These 14 credits must include at least 3 credits from externally assessed standards and at least 3 credits from internally assessed standards in that course.</p>',
			'<p>Some courses offer only externally assessed or internally assessed standards, and are therefore not eligible for endorsement. Check if your course offers <a href="http://www.tekura.school.nz/subjects-and-courses/search-courses" target="_blank">course endorsement</a> in the course description information.</p>',
			'<h3>Certificate endorsement</h3>',
			'<p>You can gain NCEA certificates endorsed with merit or excellence. An NCEA certificate endorsed with merit is awarded if you gain 50 credits at merit level (or a mix of merit and excellence). A NCEA certificate endorsed with excellence is awarded if you gain 50 credits at excellence level.</p>',
		].join(""),

		item5: [
			'<p>Students undertaking courses that offer assessment standards (both internally assessed and externally assessed) towards NCEA, will have to pay an annual NZQA fee of $76.70. Students may be eligible for financial assistance that will reduce the fee to $20. Payments made after 1 December each year may incur an additional NZQA late fee of $50. Complete your <a href="http://www.tekura.school.nz/student-toolkit/ncea-registration" target="_blank">NCEA Payment and Registration online</a>.</p>',
		].join(""),

		item6: [
			'<p>Credits gained towards NCEA are automatically counted towards National Certificates by NZQA. Te Kura offers a wide range of National Certificates, some of which are completed through partnerships such as Gateway, trades academies and work placements.</p>',
			'<h3>Gateway</h3>',
			'<p>For students aged 16&ndash;19 years, Gateway is a structured, work-based learning programme in an industry of your choice. You can gain work-based credits while also working towards NCEA, for one term or longer.</p>',
			'<p>Contact <a href="mailto:kathryn.smith@tekura.school.nz">kathryn.smith@tekura.school.nz</a>.</p>',
			'<h3>Trades academy</h3>',
			'<p>A one or two year programme for students aged 16–19 years.</p>',
			'<p>Huarahi is our Trades Academy supported by partnerships with tertiary providers across New Zealand. You work with them and Te Kura so you can gain industry standards towards a National Certificate and NCEA Level 2.</p>',
			'<p>Places are limited but we want to hear from you if you are keen to be part of the Trades Academy. Look on our website and email <a href="mailto:huarahi@tekura.school.nz">huarahi@tekura.school.nz</a>.</p>',
		].join(""),

		item7: [
			'<p>To be awarded University Entrance you must have:</p>',

			'<h3>NCEA Level 3</h3>',
			'<br>',
			'<ul>',
				'<li>60 credits at level 3 or above plus 20 credits from level 2 or above</li>',
				'<li>Level 1 literacy and numeracy requirements must also be met</li>',
			'</ul>',
			'<p>Three of your level 3 subjects must be on the Approved Subjects list so you can also meet the UE requirement of a minimum 14 credits in each of your three approved subjects.</p>',
			'<p>Any remaining credits from level 3 or higher to gain NCEA Level 3 can come from any field, subfield or domain. This means credits from unit standards based subjects, such as Level 3 Legal Studies, will contribute to UE through this requirement.</p>',
			
			'<h3>Approved subjects</h3>',
			'<p>42 credits from three subjects at level 3 made up of:</p>',
			'<ul>',
				'<li>A minimum 14 credits in each <a href="http://www.nzqa.govt.nz/qualifications-standards/awards/university-entrance/approved-subjects/" target="_blank">approved subject</a> from specified achievement standards</li>',
			'</ul>',

			'<h3>UE literacy</h3>',
			'<br>',
			'<ul>',
				'<li>10 credits (5 in reading and 5 in writing) at level 2 or higher from <a href="http://www.nzqa.govt.nz/qualifications-standards/awards/university-entrance/literacy-requirements/" target="_blank">specified standards</a>. Check if your course offers any of these UE literacy reading or writing standards in the <a href="http://www.tekura.school.nz/subjects-and-courses/search-courses" target="_blank">course descriptions information</a>.</li>',
			'</ul>',
			'<p>(For standards that meet both reading and writing requirements, it is possible to split the standard to fulfil the literacy requirement. For example, Art History 3.1(91482) can contribute 2 credits to the reading requirement and 2 credits to the writing requirement.)</p>',

			'<h3>UE numeracy</h3>',
			'<br>',
			'<ul>',
				'<li>10 credits at Level 1 or higher from <a href="http://www.nzqa.govt.nz/qualifications-standards/qualifications/ncea/subjects/literacy-and-numeracy/level-1-requirements/lit-num-subjects/" target="_blank">specified achievement standards</a>, or from all three specified numeracy unit standards (26623. 26626 and 26627 - all three required). Check if your course offers any of these UE numeracy standards in the <a href="http://www.tekura.school.nz/subjects-and-courses/search-courses" target="_blank">course descriptions information</a>.</li>',
			'</ul>',
			'<h3>Discretionary and provisional entrance</h3>',
			'<p>In some cases you may gain entrance to university using other results.</p>',
			'<p>For information, consult the university liaison person, or go to the website of the <a href="http://www.universitiesnz.ac.nz/studying-in-nz/domestic#DiscretionaryEntrance" target="_blank">New Zealand Vice-Chancellors&rsquo; Committee</a>.</p>',
		].join(""),

		item8: [
			'<p>As a year 11&ndash;13 student at Te Kura, you will have the opportunity to participate in authentic learning.</p>',
			'<p>Authentic learning at Te Kura is an approach to learning that focuses on your passions and goals for life beyond school. It uses these as the basis for a learning plan that is unique to you.</p>',
			'<p>You&rsquo;ll have the chance to work alongside adults in your field of interest and to build knowledge, understanding and skills in that area, as well as working towards a relevant qualification.</p>',
			'<p>You may also have the opportunity to work with other students online and face to face.</p>',
		].join(""),

		item9: [
			'<p>NCEA Level 2 is the foundation for success in further education and the world of work. Vocational pathways provide ways to help students see how their learning and achievement will be valued in the workplace and the types of study options and job opportunities available.</p>',
			'<p style="width:300px;">Students can work towards achieving NCEA Level 2 endorsed in one of six vocational pathways:</p>',
			'<br>',
			'<ul style="position: relative;">',
				'<li>Primary Industries.</li>',
				'<li>Construction and Infrastructure.</li>',
				'<li>Manufacturing and Technology.</li>',
				'<li>Social and Community Services.</li>',
				'<li>Services Industries.</li>',
				'<li>Creative Industries.</li>',
				'<img style="position:absolute;top:-110px;right:0;" src="https://tekura.desire2learn.com/shared/masterTemplates/images/NCEA/vocational-pathways.gif">',
			'</ul>',
			'<p>Students can access their <b>Vocational Profile</b> from the NZQA website. The Vocational Profile is a visual graph which will show learner achievement against the different Vocational Pathways.</p>',
			'<p>To be granted a <b>Vocational Pathway Award</b> in a particular sector you must achieve: </p>',
			'<ul>',
			'<li>NCEA Level 2 which includes literacy (10 credits) and numeracy (10 credits) at level 1 or above; and <br><br></li>',
			'<li>60 level 2 credits from the Recommended Assessment Standards (RAS) for a particular Vocational Pathways sector, including 20 Level 2 credits from Sector-Related Standards for the same sector e.g. Primary Industries you need 60 level 2 credits from the RAS which includes 20 level 2 credits from the Primary Industries Sector Related Standard.</li>',
			'</ul>',
			'<p>For more information about Vocational Pathways refer to: </p>',
			'<ul>',
				'<li><a href="http://youthguarantee.net.nz/vocational-pathways/" target="_blank">http://youthguarantee.net.nz/vocational-pathways/</a></li>',
				'<li><a href="http://www.nzqa.govt.nz/qualifications-standards/awards/vocational-pathways/" target="_blank">www.nzqa.govt.nz/qualifications-standards/awards/vocational-pathways/</a></li>',
			'<p></p>',
		].join(""),

		item10: [
			'<p>STAR taster courses are offered through polytechnics and private training organisations.<br /><br />Talk to your learning advisor about opportunities in your area, look on our website or email <a href="mailto:christopher.berentson@tekura.school.nz">christopher.berentson@tekura.school.nz</a>.</p>'
		].join(""),

	}
	return $content
}

function getStudyContent() {
	var $content = {
		item1: [
			'<p>We all learn differently. Think about which learning style works best for you so you can make the most of your strengths. Some students look for variety in their day and work on several subjects. Others prefer to concentrate on one subject or one topic for a whole day and really get into it.<br /><br />You can choose what suits you best, although you need to make sure you cover all the learning areas of your programme. You can&rsquo;t just do the ones you enjoy the most!</p>'
		].join(""),

		item2: [
			'<p>Students enrolling in a one year NCEA course should aim to achieve 18&ndash;20 credits. This requires about 200 hours of student study time. It is important to take advice from your teacher, learning advisor and/or student support staff so that you choose a balanced programme of learning which matches your aspirations and abilities.<br /><br />Each module indicates how many study hours it is likely to require. For example, a module may take approximately 10 hours of work to complete at the normal pace, representing about two weeks of work at five hours per week. <br /><br />If you are to achieve at Excellence level, it is likely that you will have to study substantially more than the suggested guideline.</p>',
			  '<p class="bullet-intro">Before deciding on the pace of learning, ask yourself the following:</p>',
			  '<ul>',
			  '<li>How much time can I set aside for study each week?</li>',
			  '<li>Will I be attempting both externally and internally assessed standards?</li>',
			  '<li>Will I be able to keep a steady pace of five hours of study each week?</li>',
			  '<li>Do I intend to sit the external examination at the end of the year?</li>',
			  '<li>Do I need specific external or internal credits for next year&rsquo;s study or work?</li>',
			  '</ul>',
			  '</p>',
		].join(""),

		item3: [
			'<p>Drawing up a timetable will help get you organised and it can be amended as you move through your studies and see what suits your needs.</p>'
		].join(""),

		item4: [
			'<h3>Normal pace of learning</h3>',
			  '<p>This means completing three to four modules each term so that you complete the course before the external examination at the end of the school year.</p>',
			  '<h3>Flexible pace of learning</h3>',
			  '<p>If you have less than a year because you start later or need to finish earlier, you can decide the pace at which you work. You could still complete the whole course by devoting more time and effort to it.</p>',
		].join(""),

		item5: [
			'<p>Getting your study underway is very important. Your first return of work should be two to three weeks after you received your initial work. If you have any issues returning your work within this time, please contact your subject teacher.</p>',
		].join(""),

		item6: [
			'<p>It is important to contact your teacher if you have any queries about your work.<br /><br />Please have your ID number, module code and the activity or question number when you contact your teacher.</p>',
		].join(""),

	}
	return $content
}

function getAssessmentContent() {
	var $content = {
		item1: [
			'<p>Standards are the building blocks of national certificates. They describe what a student knows and can do. The standard tells you what to aim for, how well you have to write or speak or do research to get credits. They describe the level of work you need to produce.<br /><br /><span class="bold">There are two different kinds of standards &ndash; <span class="underline">unit standards</span> and <span class="underline">achievement standards</span>. They both count towards national certificates.</span></p>',
			  '<h3>Unit Standard</h3>',
			  '<p>Unit standards are always internally assessed. When these are assessed you will usually either achieve or not yet achieve the standard. There is no exam.<br /><br />Unit standard credits count towards all national certificates, including NCEA.</p>',
			  '<h3>Achievement Standard</h3>',
			  '<p class="bullet-intro">When you attempt an achievement standard, you will get one of the following results:</p>',
			  '<ul>',
			  '<li>Not achieved (N)</li>',
			  '<li>Achieved (A)</li>',
			  '<li>Achieved with merit (M)</li>',
			  '<li>Achieved with excellence (E).</li>',
			  '</ul>',
			  '<h3>Internal achievement standards</h3>',
			  '<p>These are assessed by your subject teacher. Subject teachers know the standards and mark your work against those standards. These assessments are checked by Te Kura and national NZQA moderation.</p>',
			  '<h3>External achievement standards </h3>',
			  '<p>These are assessed at the end of the year under exam conditions or by submission of a portfolio of work such as Visual Art or Technology. NZQA is introducing digital exams and you maybe invited to be part of a trial or pilot. See <a href="http://www.nzqa.govt.nz/audience-pages/students" target="_blank">www.nzqa.govt.nz/audience-pages/students</a>. Students sit exams at exam centres, which can be at any secondary school.</p>',
		].join(""),

		item2: [
			'<p>Authenticity means that students complete and submit work that is their own. When you enrolled at Te Kura you signed a declaration to guarantee that the work you submit is your own work.<br /><br />When you begin a course online you and your supervisor sign an authentication declaration to say you understand the work you submit for the course will be your own and that you will do the work under the required assessment conditions. You upload this declaration to the Authentication dropbox.  Assessments results will not be recorded and sent to NZQA until this declaration has been received.<br /><br />Each time you upload work to an assessment dropbox, in doing so, you are confirming the work submitted is your own. If supervision was required, you also enter the name of your supervisor and their relationship to you in the comments box provided.<br /><br />If you sign a declaration for work that is not your own you will be notified that your assessment for this standard is invalid and given the grade Not Achieved. You may be refused the opportunity to be assessed for this standard.</p>',
		].join(""),

		item3: [
			'<p>Students are required to send in their self-assessed and teacher-assessed work. Teachers return student work with feedback and advice in preparation for NCEA internal and/or external assessments.</p>',
			  '<p>The achievement and unit standards details will be given in the relevant resources. They can also be found by <a href="http://www.nzqa.govt.nz" target="_blank">searching the subject and level</a> in the NZQA website and then finding the relevant standard(s).</p>',
			  '<h3>Internal assessments</h3>',
			  '<p>This is where teachers assess your work. These include:</p>',
			  '<ul>',
			  '<li>closed book tests</li>',
			  '<li>a practical investigation</li>',
			  '<li>writing a scientific report</li>',
			  '<li>presenting a speech</li>',
			  '<li>a research project</li>',
			  '<li>a performance</li>',
			  '<li>a portfolio of evidence.</li>',
			  '</ul>',
			  '<h3>External assessment</h3>',
			  '<p>This is where you sit an exam at the end of the year. Preparation includes a mixture of:</p>',
			  '<ul>',
			  '<li>self marked activities</li>',
			  '<li>auto marked activities</li>',
			  '<li>teacher-marked activities</li>',
			  '<li>Te Kura practice examinations.</li>',
			  '</ul>',
			  '<h3>Special Assessment Conditions</h3>',
			  '<p>The purpose of this is to help you get fair assessment. If you have learning difficulties, motor skill problems, sight or hearing impairment or some other conditions, you may be able to have assistance to help you present your work.<br /><br />Sometimes students may be eligible for a reader, a writer, or a reader/writer. Sometimes they may be granted extra time for an exam. Te Kura has a procedure for helping students who need Special Assessment Conditions for their assessment for both internal and external standards. For more information refer to <a href="http://www.tekura.school.nz/student-toolkit/special-assessment-conditions/" target="_blank">Special Assessment Conditions</a>.<br /><br /><span class="italic">Early on in the year</span>, if you think this situation applies to you, contact your Learning advisor, or the Qualifications Leader.</p>',
		].join(""),

		item4: [
			'<h3>Self-assessment</h3>',
			'<p>Many activities are self-assessed. You&rsquo;ll find an answer guide in each resource. Use these answers to mark your own work and make corrections where necessary.<br /><br />Self-assessment is important as it gives you instant feedback on how well you understand the ideas, concepts or information that have been covered.</p>',
			'<h3>Internal Assessment</h3>',
			'<p>This means that your teacher sets and marks all assessments that count towards credits gained for these standards.</p>',
			  '<h3>Resubmissions for internal assessments</h3>',
			  '<p>Your teacher may offer you one resubmission opportunity. This means you have made errors in your standard assessment activity that you are capable of discovering and correcting by yourself. A resubmission allows you to correct your errors and improve your result.</p>',
			  '<h3>Further assessment opportunities for internal assessments</h3>',
			  '<p>For some standards, you may be able to complete a second assessment called a &lsquo;further assessment opportunity&rsquo;. You should take this opportunity to improve your results.</p>',
		].join(""),

		item5: [
			'<p>External assessment means that an external examiner marks your assessment work. This may be through the NZQA examinations at the end of the year or (for subjects such as Design and Visual Communication, Technology and Art) by submitting a portfolio or project. You will be able to complete practice assessments and Te Kura practice examinations for external standards.</p>',
		].join(""),

		item6: [
			'<h3>National examinations</h3>',
			  '<p>New Zealand-based students sit the NCEA external achievement standard examinations in November/December at a secondary school.<br /><br />If Te Kura is your only school, you will need to make your national qualification entry as part of your <a href="http://www.tekura.school.nz/student-toolkit/ncea-registration" target="_blank">NCEA Payment and Registration process</a> through Te Kura.</p>',
			  '<h3>Scholarship</h3>',
			  '<p>Scholarship is an external examination for top secondary students, usually in Year 13, which provides recognition and monetary reward to top students. Scholarship examines course material that students study in Year 13 related to level 3 standards.<br /><br />However, the skills and understanding required to meet Scholarship criteria are considerably more advanced. Scholarship requires students to demonstrate high-level critical thinking. You must discuss your entry for Scholarship with your subject teachers.<br /><br />For more information on eligibility and a list of scholarship subjects see:<a href="http://www.nzqa.govt.nz/qualifications-standards/awards/new-zealand-scholarship/scholarship-subjects/" target="_blank">http://www.nzqa.govt.nz/qualifications-standards/awards/scholarship/scholarship-subjects/</a>.</p>',
			  '<h3>Te Kura practice examinations</h3>',
			  '<p>If you register for any externally assessed standards to sit an end of year exam you should complete the Te Kura practice examinations. If you register to submit a portfolio for external assessment in any of your subjects you must work towards assembling a portfolio for this. Your teacher is available to help with this.<br /><br />It is important that you complete all practice external assessments and examinations. If for some reason, such as illness, you are unable to sit the NZQA examinations at the end of the year, you will only be eligible for consideration for a derived grade if you have completed the Te Kura practice examinations.</p>',
		].join(""),

		item7: [
			  '<p>If, for any unexpected reason, you are not able to sit your end of year examination, or to submit final work towards an external standard (portfolios or projects), you may be eligible for a derived grade.  Please refer to the <a href="http://www.tekura.school.nz/assets/media/pdf/QUANC-web.pdf" target="_blank">Student guide to National Certificates</a> and contact <a href="mailto:Joanne.Parmenter@tekura.school.nz">Joanne Parmenter</a> as soon as possible to find out more.</p>',
		].join(""),

		item8: [
			'<p>You have the right to query an assessment result if you want further clarification or disagree with the result. If you are still not satisfied, you may appeal. Refer to <a href="http://www.tekura.school.nz/assets/media/pdf/QUANC-web.pdf" target="_blank">Student Guide to National Certificates</a> for more information. You can also appeal any other decisions, procedures or policies about assessments.<br /><br />Contact your teacher or Learning advisor if you wish to appeal. Use this <a href="http://www.tekura.school.nz/assets/media/doc/Student-Assessment-Appeal-Form-.doc" target="_blank">student appeal</a> form.</p>',
		].join(""),

		item9: [
			'<h3>Results online</h3>',
			  '<p>You can check your NCEA results and personal information on the NZQA website.<br /><br />To register on the NZQA website, you will need to go to the website and set your own password. If you have already registered (in a previous year) you will not have to register again.</p>',
			  '<p class="bullet-intro">Please follow these steps:</p>',
			  '<ul>',
			  '<li>Go to <a href="http://www.nzqa.govt.nz/login" target="_blank">www.nzqa.govt.nz/login</a>.</li>',
			  '<li>To register your password, click on &lsquo;Register now&rsquo; under &lsquo;Students & learners&rsquo;.</li>',
			  '<li>Enter your NSN and date of birth (DD/MM/YYYY).</li>',
			  '</ul>',
			  '<p>You will only need to set up your password the first time you visit this web page. Choose a password that you will remember. You will have to use the same password to see your entries and results on the website throughout the year. If you forget your password you can request a new one on the NZQA website.<br /><br />Make sure you check your results regularly during the year to ensure that the internally assessed standards you have achieved are showing. If there is a problem you must contact your subject teacher or learning advisor.<br /><br />When you look at your exam results in January, check them thoroughly. If you believe there is a mistake with your exam results, you can apply for a Reconsideration or Review via your NZQA Student login.</p>',
			  '<h3>Record of achievement</h3>',
			  '<p>This is the official record of all standards and national qualifications and endorsements, University Entrance and Scholarship you have achieved in the previous years of study. Check here for a <a href="http://www.nzqa.govt.nz/assets/qualifications-and-standards/Results/Sample-ROA.pdf" target="_blank">sample Record of Achievement</a>.<br /><br />You can view your Record of Achievement via the <a href="https://secure.nzqa.govt.nz/for-learners/records/login.do" target="_blank">NZQA Learner Login</a> and print a copy, but to receive an official copy of your Record of Achievement, you must order it from NZQA.</p>',
			  '<p class="bullet-intro">Do this:</p>',
			  '<ul>',
			  '<li>online through your <a href="https://secure.nzqa.govt.nz/for-learners/records/login.do" target="_blank">Learner Login</a></li>',
			  '<li>by phone: 0800 697 296</li>',
			  '<li>by sending in a completed <a href="http://www.nzqa.govt.nz/assets/Qualifications-and-standards/Results/roa.pdf" target="_blank">application form</a>.</li>',
			  '</ul>',
			  '<h3>School Results Summary</h3>',
			  '<p>This is an official record of all results you have gained while at senior secondary school. It also shows any national qualifications and endorsements, University Entrance and Scholarship achieved up until the time you left school, as well as a summary of credits by subject and level.</p>',
			  ' <p class="bullet-intro">You can print an unofficial copy of your SRS, anytime, by:</p>',
			  '   <ul>',
			  '   <li>Logging in to the NZQA <a href="https://secure.nzqa.govt.nz/for-learners/records/login.do" target="_blank">Learner login</a></li>',
			  '   <li>Clicking on the pdf icon in the "My School Entries and Results" screen</li>',
			  '   <li>Printing the School Results Summary pdf.</li>',
			  ' </ul>',
			  ' <p>For an official transcript of results, you will need to order your <a href="http://www.nzqa.govt.nz/qualifications-standards/results-2/record-of-achievement/" target="_blank">Record of Achievement</a>.</p>',
		].join(""),

	}
	return $content
}