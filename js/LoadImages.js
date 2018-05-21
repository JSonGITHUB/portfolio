//interactive.forEach((img, i) => getImage(img))

async function getImage(path, img) {
    let image = await loadImage(path, img);
    let load = await addImg(image.src);
}

function loadImage(path, url) {

    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = () => { resolve(image) };
        image.onerror = () => { reject(new Error('Could not load image at "assets/290/"' + path + url)) };
        image.src = path + url;
    });

}

let addImg = (src) => {

    return new Promise((resolve,reject) => {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("class", "interactive");
        imgElement.src = src;
        document.getElementById("resume").appendChild(imgElement);
    });

}