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
            app.insertNav();
            privateData.resume.content.forEach((eachLine, i) => content.innerHTML += eachLine.line);
            content.innerHTML += `<br><br>Width: ${window.innerWidth}`;
        },
        mobile: () => {
            let ua = navigator.userAgent.toLowerCase();
            app.analytics('/mobile');
            app.insertNav();
            if (ua.indexOf('safari') != -1) { 
                if (ua.indexOf('chrome') > -1) {
                    app.getImages("mobileImage", "assets/mobile/", privateData.mobile.images, 0);
                    app.getLazy(".mobileImage");
                } else {
                    app.getImagesSafari("mobileImage", "assets/mobile/", privateData.mobile.images, 0);
                }
            } else {
                app.getImages("mobileImage", "assets/mobile/", privateData.mobile.images, 0);
                app.getLazy(".mobileImage");
            }
        },
        interactive: () => {
            let ua = navigator.userAgent.toLowerCase();
            app.analytics('/web');
            app.insertNav();
            if (ua.indexOf('safari') != -1) { 
                if (ua.indexOf('chrome') > -1) {
                    app.getImages("interactive", "assets/290/", privateData.interactive.images, 0);
                    app.getLazy(".interactive");
                } else {
                    app.getImagesSafari("interactive", "assets/290/", privateData.interactive.images, 0);
                }
            } else {
                app.getImages("interactive", "assets/290/", privateData.interactive.images, 0);
                app.getLazy(".interactive");
            }
        },
        advertising: () => {
            app.analytics('/advertising');
            app.insertNav();
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
            })
        },
        insertNav: () => {
            if (!document.getElementById("navSpacer")) {
                content.innerHTML += "<div class='nav mb-3'><div id='navSpacer'></div>"+
//                    "<div id='backgroundToggler' onclick='app.toggleBackground()'>*</div>"+
                    "<div id='fontIncreaser' onclick='app.increaseFontSize()'>+</div>"+
                    "<div id='fontDecreaser' onclick='app.decreaseFontSize()'>-</div>"+
                    //"<img id='moon' class='lightIcon' onclick='app.toggleBackground()' src='./assets/moonBlack.png' alt='light' height='15' width='15' />"+
                    "<div id='darkModeToggle' class='ml-20'>"+
                        "<label class='switch'>"+
                            "<input type='checkbox' checked onclick='app.toggleBackground()'>"+
                            "<span class='slider round'></span>"+
                        "</label>"+
                    "</div>"+
                    //"<img id='sun' class='lightIcon' src='./assets/sunBlack.png' onclick='app.toggleBackground()' alt='light' height='15' width='15' />"+
                "</div>";
            }
        },
        padding: 0,
        fontSize: 12,
        line_height: 25,
        addFontSize: () => app.fontSize = app.fontSize+2,
        minusFontSize: () => app.fontSize = app.fontSize-2,
        addLineHeight: () => app.line_height = app.line_height+2,
        minusLineHeight: () => app.line_height = app.line_height-2,
        addPadding: () => app.padding = app.padding+1,
        minusPadding: () => app.padding = app.padding-1,
        increaseFontSize: () => {
            if ((window.innerWidth >= 400 && app.fontSize < 42) || (window.innerWidth < 400 && app.fontSize < 20)) {
                app.addFontSize();
                app.addPadding();
                app.addLineHeight();
                app.updateFontSize();
            }
        },
        decreaseFontSize: () => { 
            if (app.fontSize > 10) {
                app.minusFontSize();
                app.minusPadding();
                app.minusLineHeight();
                app.updateFontSize();
            }
        },
        toggleBackground: () => {
            const root = document.documentElement;
            //const sun = document.getElementById("sun");
            //const moon = document.getElementById("moon");
            const content = document.body;
            let color = content.style.color;
            const light = "rgb(250, 250, 250)";
            const dark = "rgb(0, 0, 0)";
            color = (color === light) ? dark : light;
            let background = content.style.backgroundColor;
            background = (background === dark) ? light : dark;
            //moon.src = (background === dark) ? './assets/moonWhite.png' : './assets/moonBlack.png';
            //sun.src = (background === dark) ? './assets/sunWhite.png' : './assets/sunBlack.png';
            content.style.color = color;
            content.style.backgroundColor = background;
            root.style.setProperty('--videoButtonBackground', background);
            root.style.setProperty('--videoButtonColor', color);
            root.style.setProperty('--play', (background == "rgb(0, 0, 0)") ? 'url(/portfolio/assets/icons/playInvert.png)' : 'url(/portfolio/assets/icons/play.png)');
            root.style.setProperty('--pause', (background == "rgb(0, 0, 0)") ? 'url(/portfolio/assets/icons/pauseInvert.png)' : 'url(/portfolio/assets/icons/pause.png)');
        },
        updateFontSize: () => {
            document.getElementById("content").style.fontSize = app.fontSize + 'px';
            document.getElementById("content").style.lineHeight = app.line_height + 'px';
            document.getElementById("darkModeToggle").style.paddingTop = app.padding + 'px';
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
        eCommerce: () => {
            app.analytics('/ecommerce');
            app.insertNav();
            let ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1) { 
                if (ua.indexOf('chrome') > -1) {
                    app.getImages("interactive", "portfolio/", privateData.eCommerce.images, 0);
                    app.getLazy(".interactive");
                } else {            
                    app.getImagesSafari("interactive", "portfolio/", privateData.eCommerce.images, 0);
                }
            } else {
                app.getImages("interactive", "portfolio/", privateData.eCommerce.images, 0);
                app.getLazy(".interactive");
            }
        },
        html5: () => {
            app.analytics('/applications');
            app.insertNav();
            let ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1) { 
                if (ua.indexOf('chrome') > -1) {
                    app.getImages("mobileImage", "portfolio/", privateData.html5.images, 0);
                    app.getLazy(".mobileImage");
                } else {            
                    app.getImagesSafari("mobileImage", "portfolio/", privateData.html5.images, 0);
                }
            } else {
                app.getImages("mobileImage", "portfolio/", privateData.html5.images, 0);
                app.getLazy(".mobileImage");
            }
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
                })
                document.body.className += "noscroll";
                menu.className = "animate hide";
                menuClose.className = "animate show";
            }
        },
        getImages: (css, path, imgArray, index) => {
            imgArray.forEach((eachItem, i) => {
                let url = path + eachItem.image;
                    let imgElement = document.createElement("img");
                    imgElement.style.opacity = 0;
                    imgElement.setAttribute("class", "js-lazy-image, " + css);
                    imgElement.setAttribute("data-src", url); 
                    content.appendChild(imgElement);
            })
        },
        getImagesSafari: (css, path, imgArray, index) => {
/*
            imgArray.forEach((eachItem, i) => {
                let url = path + eachItem.image;
                    let imgElement = document.createElement("img");
                    imgElement.setAttribute("class", css);
                    imgElement.src = url; 
                    content.appendChild(imgElement);
            })
*/
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
                    content.appendChild(imgElement);
                });
            }
        },
        getLazy: (css) => {
            const images = document.querySelectorAll(css);
            // If the image gets within 50px in the Y axis, start the download.
            const config = { rootMargin: '50px 0px', threshold: 0.01 };
            let imageCount = images.length;
            let observer;
            if (!('IntersectionObserver' in window)) {
//                loadImagesImmediately(images);
            } else {
                observer = new IntersectionObserver(onIntersection, config);
                images.forEach((eachImage, i) => {
                    if (!eachImage.classList.contains('js-lazy-image--handled')) {
                        observer.observe(eachImage);
                    }
                })
            }
            let fetchImage = (url) => {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.src = url;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            }
            //Preloads the image @param {object} image 
            let preloadImage = (image) => {
                const src = image.dataset.src;
                if (!src) { return }
                return fetchImage(src).then(() => { applyImage(image, src) });
            }
            //Load all of the images immediately @param {NodeListOf<Element>} images 
            let loadImagesImmediately  = (images) => {
                images.forEach((eachImage, i) => { preloadImage(eachImage) })
            }
            //Disconnect the observer
            let disconnect = () => {
                if (!observer) { return }
                observer.disconnect();
            }
            //On intersection @param {array} entries
            function onIntersection(entries) {
                // Disconnect if we've already loaded all of the images
                if (imageCount === 0) { observer.disconnect() }
                entries.forEach((eachEntry, i) => {
                    // Are we in viewport?
                    if (eachEntry.intersectionRatio > 0) {
                        imageCount--;
                        // Stop watching and load the image
                        observer.unobserve(eachEntry.target);
                        preloadImage(eachEntry.target);
                    }
                })
            }
            //Apply the image @param {object} img @param {string} src 
            let applyImage = (img, src) => {
                img.classList.add('js-lazy-image--handled');
                img.src = src;
                img.style.opacity = 1;
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
