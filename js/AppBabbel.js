'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = function () {
    var privateData = void 0;
    var hasFlash = false;
    var content = document.getElementById("content");
    var element = void 0;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch (exception) {
        hasFlash = 'undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash'];
    }
    var getAppData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('assets/data/data.json').then(function (response) {
                            return response.json();
                        }).then(function (data) {
                            return privateData = data;
                        }).then(function (data) {
                            return app.resume();
                        }).catch(function (error) {
                            return console.log('error: ', error.message);
                        });

                    case 2:
                        response = _context.sent;

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }))();
    return {
        navigation: function navigation() {
            return privateData.navigation.selections;
        },
        resume: function resume() {
            app.analytics('/resume');
            privateData.resume.content.forEach(function (eachLine, i) {
                return content.innerHTML += eachLine.line;
            });
        },
        mobile: function mobile() {
            var ua = navigator.userAgent.toLowerCase();
            app.analytics('/mobile');
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
        interactive: function interactive() {
            var ua = navigator.userAgent.toLowerCase();
            app.analytics('/web');
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
        advertising: function advertising() {
            app.analytics('/advertising');
            if (hasFlash) {
                app.banners();
            } else {
                app.videos();
            }
        },
        banners: function banners() {
            privateData.advertising.banners.forEach(function (banner, i) {
                element = document.createElement("object");
                element.id = "banner" + i;
                element.style.width = banner.width + "px";
                element.style.height = banner.height + "px";
                element.data = "assets/banners/" + banner.file;
                if (banner.height < banner.width) {
                    element.className = "ad";
                }
                content.appendChild(element);
            });
        },
        videos: function videos() {
            var videoElement = void 0;
            privateData.advertising.videos.forEach(function (video, i) {
                content.innerHTML += "<video id='vid" + i + "' class='ad' loop preload='none' width='" + video.width + "' height='" + video.height + "' poster='assets/banners/" + video.poster + "'>" + "<source src='assets/banners/" + video.file + "' type='video/mp4'>" + "Your browser does not support the video tag." + "</video>" + "<button id='button" + i + "' type='button' class='btn btn-default btn-lg videoButton play' onclick='app.playPause(this, " + i + ")'>" + "</button>";
            });
        },
        playPause: function playPause(btn, id) {
            var all = document.getElementsByTagName("video");
            var buttons = document.getElementsByTagName("button");
            var playButton = void 0;
            var myVideo = document.getElementById("vid" + id);
            if (myVideo.paused) {
                //                app.analytics('/advertising/'+id);
                Array.prototype.forEach.call(all, function (video) {
                    video.pause();
                });
                Array.prototype.forEach.call(buttons, function (button) {
                    button.className = button.className.replace("pause", "play");
                });
                btn.className = btn.className.replace("play", "pause");
                if (content.offsetWidth < 700) {
                    myVideo.style.height = "auto";
                }
                myVideo.play();
            } else {
                myVideo.pause();
                btn.className = btn.className.replace("pause", "play");
            }

            btn.blur();
        },
        eCommerce: function eCommerce() {
            app.analytics('/eCommerce');
            var ua = navigator.userAgent.toLowerCase();
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
        html5: function html5() {
            app.analytics('/applications');
            var ua = navigator.userAgent.toLowerCase();
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
        clearContent: function clearContent() {
            content.innerHTML = "";
            content.style.opacity = 1;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            content.scrollTop = 0;
            content.className += " mobile";
        },
        toggleNav: function toggleNav() {
            var navigation = document.getElementsByTagName('nav')[0];
            var menuClose = document.getElementById('menuClose');
            var menu = document.getElementById('menu');
            if (navigation.className == 'animate display') {
                navigation.className = 'animate';
                navigation.innerHTML = "";
                menuClose.className = "animate hide";
                menu.className = "animate show";
                document.body.className = document.body.className.replace("noscroll", "");
            } else {
                navigation.className = 'animate display';
                app.navigation().forEach(function (eachPage, i) {
                    navigation.innerHTML += "<button type='button' class='btn btn-default btn-lg' onclick='" + eachPage.function + "'>" + eachPage.page + "</button><br>";
                });
                document.body.className += "noscroll";
                menu.className = "animate hide";
                menuClose.className = "animate show";
            }
        },
        getImages: function getImages(css, path, imgArray, index) {
            imgArray.forEach(function (eachItem, i) {
                var url = path + eachItem.image;
                var imgElement = document.createElement("img");
                imgElement.style.opacity = 0;
                imgElement.setAttribute("class", "js-lazy-image, " + css);
                imgElement.setAttribute("data-src", url);
                content.appendChild(imgElement);
            });
        },
        getImagesSafari: function getImagesSafari(css, path, imgArray, index) {
            var getImage = function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(css, path, imgArray, index) {
                    var image;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return loadImage(css, path, imgArray, index);

                                case 2:
                                    image = _context2.sent;

                                    if (index < imgArray.length - 1) {
                                        getImage(css, path, imgArray, index + 1);
                                    }

                                case 4:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                return function getImage(_x, _x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                };
            }();

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

            function loadImage(css, path, imgArray, index) {
                var url = path + imgArray[index].image;
                return new Promise(function (resolve, reject) {
                    var image = new Image();
                    image.onload = function () {
                        return resolve(image);
                    };
                    image.onerror = function () {
                        reject(new Error('Could not load image at ' + url));
                    };
                    image.src = url;
                    var imgElement = document.createElement("img");
                    imgElement.setAttribute("class", css);
                    imgElement.src = url;
                    content.appendChild(imgElement);
                });
            }
        },
        getLazy: function getLazy(css) {
            var images = document.querySelectorAll(css);
            // If the image gets within 50px in the Y axis, start the download.
            var config = { rootMargin: '50px 0px', threshold: 0.01 };
            var imageCount = images.length;
            var observer = void 0;
            if (!('IntersectionObserver' in window)) {
                //                loadImagesImmediately(images);
            } else {
                observer = new IntersectionObserver(onIntersection, config);
                images.forEach(function (eachImage, i) {
                    if (!eachImage.classList.contains('js-lazy-image--handled')) {
                        observer.observe(eachImage);
                    }
                });
            }
            var fetchImage = function fetchImage(url) {
                return new Promise(function (resolve, reject) {
                    var image = new Image();
                    image.src = url;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            };
            //Preloads the image @param {object} image 
            var preloadImage = function preloadImage(image) {
                var src = image.dataset.src;
                if (!src) {
                    return;
                }
                return fetchImage(src).then(function () {
                    applyImage(image, src);
                });
            };
            //Load all of the images immediately @param {NodeListOf<Element>} images 
            var loadImagesImmediately = function loadImagesImmediately(images) {
                images.forEach(function (eachImage, i) {
                    preloadImage(eachImage);
                });
            };
            //Disconnect the observer
            var disconnect = function disconnect() {
                if (!observer) {
                    return;
                }
                observer.disconnect();
            };
            //On intersection @param {array} entries
            function onIntersection(entries) {
                // Disconnect if we've already loaded all of the images
                if (imageCount === 0) {
                    observer.disconnect();
                }
                entries.forEach(function (eachEntry, i) {
                    // Are we in viewport?
                    if (eachEntry.intersectionRatio > 0) {
                        imageCount--;
                        // Stop watching and load the image
                        observer.unobserve(eachEntry.target);
                        preloadImage(eachEntry.target);
                    }
                });
            }
            //Apply the image @param {object} img @param {string} src 
            var applyImage = function applyImage(img, src) {
                img.classList.add('js-lazy-image--handled');
                img.src = src;
                img.style.opacity = 1;
            };
        },
        analytics: function analytics(tag) {
            content.style.opacity = 0;
            ga('set', 'page', tag);
            ga('send', 'pageview');
            app.clearContent();
            if (tag == '/resume') {
                content.className = "resume animate";
            } else {
                content.className += " mobile";
            }
            content.style.opacity = 1;
        },
        data: function data() {
            return privateData;
        }
    };
}();
document.getElementById('menuClose').className = "hide";
