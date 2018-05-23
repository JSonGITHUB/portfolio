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