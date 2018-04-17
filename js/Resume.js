var resume = "(760) 402-5646<br>" +
	"<a href='https://www.linkedin.com/in/johnsantucci'><span style='font-size: 12px'>www.linkedin.com/in/johnsantucci</span></a><br>" +
	"jhnsntcc@gmail.com<br><br>" +
	"<span class='title'>FRONT END DEVELOPER</span><br>" +
	"Web Application and Website Developer able to produce a seamless interactive experience for the end user by applying visual sense and technical skills. Creative thinker with a track record of integrating new web technologies. Effective at building relationships at all levels within an organization. Successful collaborating with a team of designers and developers and owning projects.<br><br><br>" +

	"<span class='title'>TECHNOLOGIES</span><br>" +
	"HTML5, JavaScript, CSS, AJAX, XML, jQuery, REST, Web Applications, Local Storage, Web Analytics, eCommerce, GPS, Sensors, Accelerometer, GitHub, Grunt, Teamwork, Slack, Microsoft Office, SharePoint, Dreamweaver, Photoshop, Premiere, Excel, Perforce and Jira<br><br><br>" +

	"<span class='title'>CONCEPTS</span><br>" +
	"Single Page Application Development, Progressive Web Apps, VanillaJS, Decision Support, Simulation, Product Support, UI, UX, Social Media, Sharing, Playlists, Shopping Cart Development, Mobile, Responsive, Prototyping, Code Architecture, Feature Specs, eLearning, Embedded, MVC, MVP, Source Control and Testing<br><br><br>" +

	"<span class='title'>PROCESS</span><br>" +
	"Test Driven Development, Test Scripting, Feedback Analysis, Optimization and Agile/Scrum<br><br><br>" +

	"<span class='title'>PROFESSIONAL EXPERIENCE<br><br>" +
	"CareFusion</span>, San Diego, CA<br>" +
	"<span class='title'>Application Developer</span><br>" +
	"<i>2012 – 2017</i><br><br>" +
	"Developed web applications and games for product support and simulation, decision support and learning.<br>" +
	"<ul>" +
		"<li>Contributed to an efficient workflow by utilizing interpersonal, organizational and communication skills to accept direction, provide feedback, document and analyze stakeholder requests and feature specs, architect logic and data, provide test scripts and the content update process as well as present and explain technical information.</li>" +
		"<li>Accelerated project development and facilitated discussions by rapidly developing functional prototypes.</li>" +
		"<li>Collaborated with artists, designers and programmers to develop a cohesive and manageable UI.</li>" +
		"<li>Designed, developed, implemented, optimized, debugged, updated and tested reusable code libraries, UI systems and functionality using </li>" +
		"<li>object oriented programming practices, common design patterns, HTML5, CSS and Javascript.</li>" +
		"<li>Developed web applications, game user interfaces and mini-games in a multi-developer environment.</li>" +
		"<li>Mentored and coached others on the team.</li>" +
	"</ul>" +
	"<br><br>" +
	"<span class='title'>Callaway Golf</span>, Carlsbad, CA<br>" +
	"<span class='title'>Flash Actionscript Programmer</span><br>" +
	"<i>2010 - 2012</i><br><br>" +
	"Developed and maintained a mobile golf application for the uPro mx+ with touch interface and gps.<br>" +
	"<ul>" +
		"<li>Developed new features from concept and design to prototype and completion.</li>" +
		"<li>Re-architected pre-existing code with optimization solutions.</li>" +
		"<li>Evolved application by meeting with various teams in a collaborative environment.</li>" +
		"<li>Resolved issues by conducting field tests and analyzing user feedback.</li>" +
	"</ul>" +
	"<br><br>" +
	"<span class='title'>DC Shoes</span>, Vista, CA<br>" +
	"<span class='title'>Flash Web Developer</span><br>" +
	"<i>2001 - 2009</i><br><br>" +
	"Developed and maintained DCSHOES.COM to support global marketing campaigns across all brand categories including athlete profiles and team updates.<br>" +
	"<ul>" +
		"<li>Developed websites supporting Rob & Big, Rob Dyrdek's Fantasy Factory and Travis Pastrana's Nitro Circus.</li>" +
		"<li>Developed websites supporting all product lines with 5 yearly seasonal updates and P2P integration.</li>" +
		"<li>Developed banner ads supporting seasonal marketing initiatives.</li>" +
		"<li>Developed RSS Feeds for video podcasts across all brand categories reaching and maintaining top 10 status in the iTunes store.</li>" +
		"<li>Implemented and maintained all web analytics.</li>" +
	"</ul>" +
	"<br><br>" +
	"<span class='title'>EDUCATION</span><br><br>" +
	"Bachelor of Science, Computer Information Systems<br>" +
	"Dowling College, Oakdale, NY<br>";
	
function showResume() {
	document.getElementById("resume").className = document.getElementById("resume").className.replace(" ad", "");
	document.getElementById("resume").style.opacity = 0;
	document.getElementById("resume").innerHTML = resume;
	document.getElementById("resume").className = "resume animate";
	document.getElementById("resume").style.opacity = 1;
}