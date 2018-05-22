//function showInteractive() {
const showInteractive = () => {
    ga('set', 'page', '/web');
    ga('send', 'pageview');
    
    (async () => await getAppData()
		.then(data => getImages("interactive", "assets/290/", data.interactive.images, 0))
		.catch(error => console.log('error: ', error.message))
    )();

    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
    
}