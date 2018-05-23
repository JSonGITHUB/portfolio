function getVideos(css, path, videoArray, index) {
    clearContent();
    getVideo(css, path, videoArray, index);
}

async function getVideo(css, path, videoArray, index) {
    let video = loadBanner(css, path, videoArray, index);    
}

function loadVideo(css, path, videoArray, index) {

    let url = path + videoArray[index].file;

    document.getElementById("resume").innerHTML += "<video id='vid" + index +
        "' class='ad' loop preload='none' width='" + videoArray[index].width +
        "' height='" + videoArray[index].height + "'>"+
            "<source src='assets/banners/" + videoArray[index].file + "' type='video/mp4'>" +
            "Your browser does not support the video tag." +
       "</video>" +
        "<button id='button" + index + 
        "' type='button' class='btn btn-default btn-lg videoButton play' onclick='playPause(this, " +
        index +")'>" +
        "</button>";
    
    if (index<(videoArray.length-1)) {
        getVideo(css, path, videoArrayArray, (index+1));
    }

}