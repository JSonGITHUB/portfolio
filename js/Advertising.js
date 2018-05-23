function showAdvertising() {
    ga('set', 'page', '/advertising');
    ga('send', 'pageview');

    document.getElementById("resume").className += " mobile";
    let hasFlash = false;
    let x=0;

    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }
    hasFlash = false;
    if (hasFlash) {

        (async () => await getAppData()
            .then(data => getBanners("ad", "assets/banners/", data.advertising.banners, 0))
            .catch(error => console.log('error: ', error.message))
        )();

    } else {

        (async () => await getAppData()
            .then(data => getVideos("ad", "assets/banners/", data.advertising.videos, 0))
            .catch(error => console.log('error: ', error.message))
        )();

    }                                         

    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;

}

function playPause(btn, id) {
    const all = document.getElementsByTagName("video");
    let playButton;
    let myVideo = document.getElementById("vid" + id);
    if (myVideo.paused) {
        ga('set', 'page', '/advertising/'+id);
        ga('send', 'pageview');
        for (var i=0, max=all.length; i < max; i++) {
            all[i].pause();
            playButton = document.getElementById("button" + i);
            playButton.className = playButton.className.replace("pause", "play");
        }
        btn.className = btn.className.replace("play", "pause");
        if (document.getElementById("resume").offsetWidth < 700) {
            myVideo.style.height = "auto";
        }
        myVideo.play();
    } else {
        myVideo.pause();
        btn.className = btn.className.replace("pause", "play");
    }
    btn.blur();
}