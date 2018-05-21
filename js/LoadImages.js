//interactive.forEach((img, i) => getImage(img))

async function getImage(css, path, imgArray, index) {
    let image = await loadImage(css, path, imgArray, index);
    let load = await addImg(css, image.src);
}

function loadImage(css, path, imgArray, index) {

    let url = path + imgArray[index];

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