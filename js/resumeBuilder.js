/* bio json  */

var bio = {
	name : 'Ismael Jimenez',
    role : 'Software Developer',
    contacts : [{
          mobile: '+(506) 6051 1105',
          email: 'isma@ismapro.com',
          github: 'ismaproco',
          twitter: '@ismapro',
          location: 'Costa Rica'
          }],
    welcomeMessage: 'This is my Application Development Portfolio',
    skills: ['C#','Javascript','jQuery', 'Ajax', 'SharePoint'],
    biopic: 'http:\/\/0.gravatar.com\/avatar\/7d3897f5713a28822379455a744a95b5',
    display: function() {

    }
}

/* education json */
var education = {
	schools: [{
		name: 'Universidad Piloto de Colombia',
		location: 'Bogota, Colombia',
		degree: 'Bachelor´s Systems Engineer',
		majors: 'Software Development',
		dates: 2011,
		url: 'http://www.unipiloto.edu.co/'
	}],
	onlineCourses: [{
        title: 'Frontend Web Development',
        school: 'Team Three House',
        date: 2014,
        url: 'https://teamtreehouse.com/'
	}],
	display: function(){

	}
}

/* work json*/

var work = {
	 jobs: [{
		employer: 'Intertec International',
		title: 'Web Developer',
		location: 'Costa Rica',
		dates: '12/12/2012',
		description: 'Work as a Vendor for Wells Fargo Bank, at the Information Security Area, as SharePoint Developer for internal projects.The projects include, create business dashboard for the managers, build intelligent forms using jQuery and InfoPath, Administration of Lists and Libraries data, and maintaining the Teams environment.',		
	 },
	 {
		employer: 'SharePoint Support Engineer', 
		title: 'Quintec',
		location: 'Colombia',
		dates: '02/01/2011-12/01/2012',
		description: 'Build new characteristics and client based solutions for SharePoint 2010 enterprise sites and also bring support to current installations, some of the tools that have been created are auction sites with HTML5 and CSS3 combined with SharePoint Master Pages, to bring live results to the contestants, also was part of the team for the BI dashboard for the ETB (Primary Bogotá Telephone Company) in Bogotá Colombia.',		
	 },
	 {
		employer: 'Software Developer' ,
		title: 'Rolsoft',
		location: 'Colombia',
		dates: '12/01/2008-01/01/2011',
		description: 'Java and .NET Web developer, working with technologies as ASP.NET 2.0 and greater, WCF and Winforms, using the latest Microsoft Practices and Good Data Base practices, focusing in the use of SQL Server 2005, SQL Server 2008, and SQL Server Compact Edition.',
	 }],
	 display: function () {

	 }
}

/* projects json */

var projects = {
	projects: [{
		title: 'Ismapro Blog',
        dates: '11/01/2011',
        description: 'Build the intranet for Vetra consulting, using SharePoint 2010',
        images: ['https://ismapro.files.wordpress.com/2015/01/ismapro-blog.png']
    },
    {
    	title: 'deberia ser festivo android app',
    	dates: '02/02/2013',
    	description: 'Images application of the Tumblr blog "deberia ser festivo" deberiaserfestivo.com',
    	images: ['https://lh4.ggpht.com/VK94Bpr0v6cNkxsESZamiLtouKOwjbAyNtWzHWibtgQ4bDPQ_OfzhbPTKC1-1XP04hk=h900-rw']
    }],
    display: function(){

    }
}


/*
	HEADER SECTIONS
*/

/* header title */
$("#header").prepend( HTMLheaderName.replace("%data%", bio.name) + 
						HTMLheaderRole.replace("%data%", bio.role) );

/* header contacts */
bio.contacts.map(function(value){
	Object.keys(value).map(function(key){
		$('#topContacts').append( HTMLcontactGeneric.replace( '%contact%',key )
						.replace( '%data%' , value[key] ) );
	});
})

/* header image and welcome message */
$('#header').append( HTMLbioPic.replace( '%data%', bio.biopic ) );
$('#header').append( HTMLWelcomeMsg.replace( '%data%', bio.welcomeMessage ) );

/* header Skill section */
$('#header').append( HTMLskillsStart );	

bio.skills.map( function( skill ){
	$('#skills').append( HTMLskills.replace( '%data%', skill ) );
});

/*
	WORK EXPERIENCE SECTION
*/




/*
	PROJECTS SECTION
*/

/*
	EDUCATION SECTION
*/