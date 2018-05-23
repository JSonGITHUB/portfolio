function showAdvertising() {
    ga('set', 'page', '/advertising');
    ga('send', 'pageview');
    var banners = [
        {file: "DC815X290Blabac.swf", width: 815, height: 290},
        {file: "trice.swf", width: "auto", height: 150},
        {file: "DCSkate_Dompierre600X200.swf", width: 600, height: 160},
        {file: "728X90.swf", width: 728, height: 90},
        {file: "728X90_2.swf", width: 728, height: 79},
        {file: "DC_Jayke728X90.swf", width: 728, height: 90},
        {file: "728x90_pj.swf", width: 728, height: 90},
        {file: "DC_corey160X600.swf", width: 108, height: 720}
    ];
    var videos = [
        {file: "DC720Blabac.mov", width: 700, height: 226},
        {file: "DC_Dompirre720Link.mov", width: 700, height: 158},
        {file: "trice720.mov", width: 420, height: 198},
        {file: "720.mov", width: 700, height: 80},
        {file: "720_2.mov", width: 700, height: 80},
        {file: "DC_Jayke720.mov", width: 704, height: 78},
        {file: "720_pj.mov", width: 700, height: 78},
        {file: "DC_corey720.mov", width: 94, height: 347}
    ];
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").className += " mobile";
    var hasFlash = false;
    var x=0;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }
    if (hasFlash) {
        for (x=0;x < banners.length; x++) {
            if (banners[x].height > banners[x].width || banners[x].width <= 300 || banners[x].width == "auto") {
                document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                "<object width='"+banners[x].width+"px' height='"+banners[x].height+"px' data='assets/banners/" + banners[x].file + "'></object>";
            } else {
                document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                "<object class='ad' width='"+banners[x].width+"' height='"+banners[x].height+"' data='assets/banners/" + banners[x].file + "'></object>";
            }
        }
    } else {
        for (x=0;x < videos.length; x++) {

            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +

            "<video id='vid"+x+"' class='ad' loop preload='none' width='"+videos[x].width+"' height='"+videos[x].height+"'>" +
                "<source src='assets/banners/" + videos[x].file + "' type='video/mp4'>" +
                "Your browser does not support HTML5 video." +
            "</video>" +
            "<button id='button"+x+"' type='button' class='btn btn-default btn-lg videoButton play' onclick='playPause(this, "+x+")'>" +
            "</button>";
            
        }  
        //document.getElementById("vid0").autoplay='autoplay';
        //document.getElementById("button0").className = document.getElementById("button0").className.replace("videoButtonPlay", "videoButtonPause");
    }                                         
    //document.getElementById("resume").className = "mobile";
    document.getElementById("resume").style.opacity = 1;
}

function playPause(btn, id) {
    var all = document.getElementsByTagName("video");
    var playButton;
    var myVideo = document.getElementById("vid" + id);
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