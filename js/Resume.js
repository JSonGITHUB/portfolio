const showResume = () => {
	try {
		ga('set', 'page', '/resume');
    	ga('send', 'pageview');
	} catch(err) {
	}
	clearContent();
	(async () => await getAppData()
		.then(data => data.resume.content.forEach((eachLine, i) => 
			document.getElementById("resume").innerHTML += eachLine.line))
		.catch(error => console.log('error: ', error.message))
	)();
	document.getElementById("resume").className = "resume animate";
	document.getElementById("resume").style.opacity = 1;
}