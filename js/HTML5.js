const showHTML5 = () => {
    ga('set', 'page', '/applications');
    ga('send', 'pageview');
    (async () => await getAppData()
		.then(data => getImages("mobileImage", "portfolio/", data.html5.images, 0))
		.catch(error => console.log('error: ', error.message))
    )();
    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
}