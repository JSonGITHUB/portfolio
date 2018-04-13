var resume = "<span class='title'>WEB APPLICATION DEVELOPER</span><br><br>" +
	"Web Application and Website Developer able to produce a seamless interactive experience for the end user by applying visual sense and technical skills. Creative thinker with a track record of integrating new web technologies. Effective at building relationships at all levels within an organization. Successful collaborating with a team of designers and developers and owning projects.<br><br><br>" +
	"<span class='title'>TECHNOLOGIES/CONCEPTS/PROCESS</span><br><br>" +
	"HTML5, CSS, JavaScript, VanillaJS, Web Applications, AJAX, XML, Local Storage, eCommerce, eLearning, Decision Support, Simulation, Product Support, UI, UX, Web Analytics, Social Media, Sharing, Playlists, Shopping Cart Development, Agile/Scrum, Mobile, Responsive, Prototyping, Code Architecture, Feature Specs, GPS, Sensors, Accelerometer, Embedded, Source Control, Testing, Test Scripting, Feedback Analysis, Optimization, GitHub, Teamwork, Slack, Microsoft Office, SharePoint, Dreamweaver, Photoshop, Excel, Perforce, Jira, Illustrator, Quicktime, InDesign, Premiere and Final Cut Pro<br><br><br>" +
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