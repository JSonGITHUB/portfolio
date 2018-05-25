const app = (() => {
    let privateData;
    let hasFlash = false;
    const content = document.getElementById("content");

    let element;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }
    const getAppData = (async ()  => {
        let response = await (fetch('assets/data/data.json')
            .then(response => response.json())
            .then(data => privateData = data)
            .then(data => app.resume())
            .catch(error => console.log('error: ', error.message))
        )
    })();
    return {
        navigation: () => privateData.navigation.selections,
        resume: () => {
            app.analytics('/resume');
            privateData.resume.content.forEach((eachLine, i) => content.innerHTML += eachLine.line);
        },
        mobile: () => {
            app.analytics('/mobile');
            app.getImages("mobileImage", "assets/mobile/", privateData.mobile.images, 0);
        },
        interactive: () => {
            app.analytics('/web');
            //app.getImages("interactive", "assets/290/", privateData.interactive.images, 0);
            app.getSomething("interactive", "assets/290/", privateData.interactive.images, 0);
            app.getLazy(".interactive");
        },
        advertising: () => {
            app.analytics('/advertising');
            if (hasFlash) { app.banners() } else { app.videos() }
        },
        banners: () => {
            privateData.advertising.banners.forEach((banner, i) => {
                element = document.createElement("object");
                element.id="banner"+i; 
                element.style.width=banner.width+"px"; 
                element.style.height=banner.height+"px"; 
                element.data="assets/banners/" + banner.file;
               if (banner.height < banner.width) { element.className = "ad" }
               content.appendChild(element);
            })
        },
        videos: () => {
            let videoElement;
            privateData.advertising.videos.forEach((video, i) => {
                content.innerHTML += "<video id='vid" + i +
                "' class='ad' loop preload='none' width='" + video.width +
                "' height='" + video.height + "' poster='assets/banners/"+video.poster+"'>"+
                    "<source src='assets/banners/" + video.file + "' type='video/mp4'>" +
                    "Your browser does not support the video tag." +
               "</video>" +
                "<button id='button" + i + 
                "' type='button' class='btn btn-default btn-lg videoButton play' onclick='app.playPause(this, " +
                i +")'>" +
                "</button>";
/*
                videoElement = document.createElement("video");
                videoElement.id="vid" + i;
                videoElement.loop = true;
                videoElement.className = "ad";
                videoElement.preload = "none";
                videoElement.style.width = video.width;
                videoElement.style.height = video.height;
                videoElement.poster = "assets/banners/" + video.poster;
                content.appendChild(videoElement);
                element = document.createElement("source");
                element.src = "assets/banners/" + video.file;
                element.type = "video/mp4";
                videoElement.appendChild(element);
                videoElement.innerHTML += "Your browser does not support HTML5 video." ;
                element = document.createElement("button");
                element.id = "button"+i;
                element.onclick = function() { app.playPause(this, i) };
                element.type="button";
                element.className="btn btn-default btn-lg videoButton play";
                content.appendChild(element);
*/
            })
        },
        playPause: (btn, id) => {
            let all = document.getElementsByTagName("video");
            let buttons = document.getElementsByTagName("button");
            let playButton;
            let myVideo = document.getElementById("vid" + id);
            if (myVideo.paused) {
//                app.analytics('/advertising/'+id);
                Array.prototype.forEach.call(all, function (video) { 
                    video.pause();
                })
                Array.prototype.forEach.call(buttons, function (button) {
                    button.className = button.className.replace("pause", "play");
                })
                btn.className = btn.className.replace("play", "pause");
                if (content.offsetWidth < 700) { myVideo.style.height = "auto" }
                myVideo.play();
            } else {
                myVideo.pause();
                btn.className = btn.className.replace("pause", "play");
            }
             
            btn.blur(); 
        },
        html5: () => {
            app.analytics('/applications');
            app.getImages("mobileImage", "portfolio/", privateData.html5.images, 0);
        },
        clearContent: () => {
            content.innerHTML = "";
            content.style.opacity = 1;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            content.scrollTop = 0;
            content.className += " mobile";
        },
        toggleNav: () => {
            const navigation = document.getElementsByTagName('nav')[0];
            const menuClose = document.getElementById('menuClose');
            const menu = document.getElementById('menu');
            if (navigation.className == 'animate display') {
                navigation.className = 'animate';
                navigation.innerHTML = "";
                menuClose.className = "animate hide";
                menu.className = "animate show";
                document.body.className = document.body.className.replace("noscroll", "");
            } else {
                navigation.className = 'animate display';
                app.navigation().forEach((eachPage, i) => {
                    navigation.innerHTML +=
                    "<button type='button' class='btn btn-default btn-lg' onclick='" + 
                        eachPage.function + "'>"+
                        eachPage.page +
                    "</button><br>";
/*
                    element = document.createElement("button");
                    element.id = "button"+i;
                    element.type="button";
                    element.onclick = function() { eachPage.function };
                    element.className="btn btn-default btn-lg";
                    element.innerHTML = eachPage.page;
                    navigation.appendChild(element);
*/
                })
                document.body.className += "noscroll";
                menu.className = "animate hide";
                menuClose.className = "animate show";
            }
        },///////////////////
        getSomething: (css, path, imgArray, index) => {
            imgArray.forEach((eachItem, i) => {
                let url = path + eachItem.image;
                //return new Promise((resolve,reject) => {
                    //let image = new Image();
                    //image.onload = () => resolve(image);
                    //image.onerror = () => { reject(new Error('Could not load image at ' + url)) };
                    //image.src = url;
                    let imgElement = document.createElement("img");
                    imgElement.setAttribute("class", "js-lazy-image, " + css);
                    imgElement.setAttribute("alt", "Lazy");
                    imgElement.setAttribute("data-src", url); 
                    //<img alt="Lazy" class="js-lazy-image" data-src="/location/of/my/image.jpg" />
                    //imgElement.src = url;
                    content.appendChild(imgElement);
                //});
            })
        },/////////////////
        getImages: (css, path, imgArray, index) => {
            getImage(css, path, imgArray, index);
            async function getImage(css, path, imgArray, index) {
                let image = await loadImage(css, path, imgArray, index);
                if (index<(imgArray.length-1)){
                    getImage(css, path, imgArray, (index+1))
                }
            }
            function loadImage(css, path, imgArray, index) {
                let url = path + imgArray[index].image;
                //return new Promise((resolve,reject) => {
                    //let image = new Image();
                    //image.onload = () => resolve(image);
                    //image.onerror = () => { reject(new Error('Could not load image at ' + url)) };
                    //image.src = url;
                    let imgElement = document.createElement("img");
                    imgElement.setAttribute("class", "js-lazy-image");
                    imgElement.setAttribute("alt", "Lazy");
                    imgElement.setAttribute("data-src", url); 
                    //<img alt="Lazy" class="js-lazy-image" data-src="/location/of/my/image.jpg" />
                    //imgElement.src = url;
                    content.appendChild(imgElement);
                //});
            }
        },
        getLazy: (css) => {
            ////////////////
            const images = document.querySelectorAll(css);
            const config = {
                // If the image gets within 50px in the Y axis, start the download.
                rootMargin: '50px 0px',
                threshold: 0.01
            };
            let imageCount = images.length;
            let observer;
            // If we don't have support for intersection observer, loads the images immediately
            if (!('IntersectionObserver' in window)) {
                loadImagesImmediately(images);
            } else {
                // It is supported, load the images
                observer = new IntersectionObserver(onIntersection, config);
            
                // foreach() is not supported in IE
                for (let i = 0; i < images.length; i++) { 
                    let image = images[i];
                    if (image.classList.contains('js-lazy-image--handled')) {
                        continue;
                    }
                
                    observer.observe(image);
                }
            }
            /**
             * Fetchs the image for the given URL
             * @param {string} url 
             */
            function fetchImage(url) {
                console.log("fetchImage("+url+")");
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.src = url;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            }
            /**
             * Preloads the image
             * @param {object} image 
             */
            function preloadImage(image) {
                const src = image.dataset.src;
                if (!src) {
                return;
                }
            
                return fetchImage(src).then(() => { applyImage(image, src); });
            }
            /**
             * Load all of the images immediately
             * @param {NodeListOf<Element>} images 
             */
            function loadImagesImmediately(images) {
                console.log("loadImagesImmediately("+images.length+")");
                // foreach() is not supported in IE
                for (let i = 0; i < images.length; i++) { 
                let image = images[i];
                preloadImage(image);
                }
            }
            /**
             * Disconnect the observer
             */
            function disconnect() {
                if (!observer) {
                return;
                }
            
                observer.disconnect();
            }
            /**
             * On intersection
             * @param {array} entries 
             */
            function onIntersection(entries) {
                // Disconnect if we've already loaded all of the images
                if (imageCount === 0) {
                observer.disconnect();
                }
            
                // Loop through the entries
                for (let i = 0; i < entries.length; i++) { 
                let entry = entries[i];
                // Are we in viewport?
                if (entry.intersectionRatio > 0) {
                    imageCount--;
            
                    // Stop watching and load the image
                    observer.unobserve(entry.target);
                    preloadImage(entry.target);
                }
                }
            }
            /**
             * Apply the image
             * @param {object} img 
             * @param {string} src 
             */
            function applyImage(img, src) {
                // Prevent this from being lazy loaded a second time.
                img.classList.add('js-lazy-image--handled');
                img.src = src;
                img.classList.add('fade-in');
            }
        },
        analytics: (tag) => {
            content.style.opacity = 0;
            ga('set', 'page', tag);
            ga('send', 'pageview');
            app.clearContent();
            if (tag == '/resume') { content.className = "resume animate";
            } else { content.className += " mobile"; }
            content.style.opacity = 1;
        },
        data: () => privateData
    };
})();
document.getElementById('menuClose').className = "hide";