const showAdvertising = () => {
    ga('set', 'page', '/advertising');
    ga('send', 'pageview');
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").className += " mobile";
    let hasFlash = false;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }
    hasFlash = false;
    if (hasFlash) {
        (async () => await getAppData()
            .then(data => {
                data.advertising.banners.forEach((banner, i) => {
                    if (banner.height > banner.width || banner.width <= 300 || banner.width == "auto") {
                        document.getElementById("resume").innerHTML += "<object width='" +
                            banner.width + "px' height='" + banner.height + "px' data='assets/banners/" +
                            banner.file + "'></object>";
                    } else {
                        document.getElementById("resume").innerHTML += "<object class='ad' width='" +
                        banner.width + "' height='" + banner.height + "' data='assets/banners/" + 
                        banner.file + "'></object>";
                    }
                })
                  
            })
            .catch(error => console.log('error: ', error.message))
        )();
    } else {
        (async () => await getAppData()
            .then(data => {
                data.advertising.videos.forEach((video, i) => {
                    document.getElementById("resume").innerHTML += "<video id='vid" + i +
                        "' class='ad' loop preload='none' width='" + video.width +
                        "' height='" + video.height + "' poster='assets/banners/" +
                        video.poster + "'>" +
                        "<source src='assets/banners/" + video.file + "' type='video/mp4'>" +
                        "Your browser does not support HTML5 video." +
                    "</video>" +
                    "<button id='button" + i +
                    "' type='button' class='btn btn-default btn-lg videoButton play' onclick='playPause(this, " + i + ")'>" +
                    "</button>";
                })
            })
            .catch(error => console.log('error: ', error.message))
        )(); 
    }                                         
    document.getElementById("resume").style.opacity = 1;
}

const playPause = (btn, id) => {
    let all = document.getElementsByTagName("video");
    let buttons = document.getElementsByTagName("button");
    let playButton;
    let myVideo = document.getElementById("vid" + id);
    if (myVideo.paused) {
        ga('set', 'page', '/advertising/'+id);
        ga('send', 'pageview');
        Array.prototype.forEach.call(all, function (video) { 
            video.pause();
        })
        Array.prototype.forEach.call(buttons, function (button) {
            button.className = button.className.replace("pause", "play");
        })
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