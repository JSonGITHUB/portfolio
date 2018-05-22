//interactive.forEach((img, i) => (img))

function getImages(css, path, imgArray, index) {
    clearContent();
    getImage(css, path, imgArray, index);
}

async function getImage(css, path, imgArray, index) {

    let image = await loadImage(css, path, imgArray, index);
    let load = await addImg(css, image.src);
    
}

function loadImage(css, path, imgArray, index) {

    let url = path + imgArray[index].image;

    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = () => { 
            resolve(image)
            if (index<(imgArray.length-1)) {
                getImage(css, path, imgArray, (index+1));
            }
        };
        image.onerror = () => { reject(new Error('Could not load image at ' + url)) };
        image.src = url;
    });

}

let addImg = (css, src) => {

    return new Promise((resolve,reject) => {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("class", css);
        imgElement.src = src;
        document.getElementById("resume").appendChild(imgElement);
    });

}

////////////////
function getBanners(css, path, bannerArray, index) {
    clearContent();
    getBanner(css, path, bannerArray, index);
}

function getBanner(css, path, bannerArray, index) {
    let banner = loadBanner(css, path, bannerArray, index);    
}

function loadBanner(css, path, bannerArray, index) {

    let url = path + bannerArray[index].file;

    if (bannerArray[index].height > bannerArray[index].width || bannerArray[index].width <= 300 || bannerArray[index].width == "auto") {
        document.getElementById("resume").innerHTML += "<object width='" +
                        bannerArray[index].width + "px' height='" +
                        bannerArray[index].height+"px' data='assets/banners/" + 
                        bannerArray[index].file + 
                        "'></object>";
    } else {
        document.getElementById("resume").innerHTML += "<object class='ad' width='" +
                        bannerArray[index].width + "' height='" + 
                        bannerArray[index].height + "' data='assets/banners/" + 
                        bannerArray[index].file + 
                        "'></object>";
    }
    
    if (index<(bannerArray.length-1)) {
        getBanner(css, path, bannerArray, (index+1));
    }

}
//////////////////////
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
        "' height='" + videoArray[index].height + "' src='assets/banners/" + 
        videoArray[index].file + 
            "' type='video/mp4'>" +
            "Your browser does not support HTML5 video." +
        "</video>" +
        "<button id='button" + index + 
        "' type='button' class='btn btn-default btn-lg videoButton play' onclick='playPause(this, " +
        index +")'>" +
        "</button>";
    
    if (index<(videoArray.length-1)) {
        getVideo(css, path, videoArrayArray, (index+1));
    }

}