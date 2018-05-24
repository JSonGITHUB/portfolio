const showMobile = () =>  {
    ga('set', 'page', '/mobile');
    ga('send', 'pageview');
    (async () => await getAppData()
		.then(data => getImages("mobileImage", "assets/mobile/", data.mobile.images, 0))
		.catch(error => console.log('error: ', error.message))
    )();
    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
}