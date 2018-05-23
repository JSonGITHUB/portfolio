let getImages = (css, path, imgArray, index) => {
    clearContent();
    getImage(css, path, imgArray, index);
    async function getImage(css, path, imgArray, index) {
        let image = await loadImage(css, path, imgArray, index);
        if (index<(imgArray.length-1)){getImage(css, path, imgArray, (index+1))}
    }
    function loadImage(css, path, imgArray, index) {
        let url = path + imgArray[index].image;
        return new Promise((resolve,reject) => {
            let image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => { reject(new Error('Could not load image at ' + url)) };
            image.src = url;
            let imgElement = document.createElement("img");
            imgElement.setAttribute("class", css);
            imgElement.src = url;
            document.getElementById("resume").appendChild(imgElement);
        });
    }
}