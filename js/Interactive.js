//function showInteractive() {
const showInteractive = () => {
    ga('set', 'page', '/web');
    ga('send', 'pageview');
    var interactive = ["agentsOfChange.jpg", "airNstyleMoto.jpg", "airNStyleShoe.jpg", "ausTour2.jpg", "auto1.jpg", "auto3.jpg", "auto4.jpg", "auto6.jpg", "auto7.jpg", "chicane.jpg", "dirtIntro.jpg", "dirtHome.jpg", "dirtGallery.jpg", "dirtNav.jpg", "dirtShoes.jpg", "dirtVideo.jpg", "fFactory.jpg", "dyrdekProduct.jpg", "dyrdekProduct2.jpg", "dyrdekShoe.jpg", "FA09Mens.jpg", "FA09Womens.jpg", "footwearArchive.jpg", "footwearArchive2.jpg", "footwearArchiveMenu.jpg", "footwearArchiveZoom.jpg", "gumball05Pphotos.jpg", "gumball05Shoe.jpg", "HO09Womens.jpg", "hatsArchive.jpg", "HO09Fleece.jpg", "HO09Footwear.jpg", "HO09Hats.jpg", "HO09Knits.jpg", "HO09Sandals.jpg", "HO09Tees.jpg", "homeArchive.jpg",  "lipton.jpg", "lemarNDauley.jpg", "lifestyle.jpg", "more1.jpg", "more2.jpg", "more3.jpg", "more4.jpg", "moreVideo.jpg","moto5.jpg", "moto.jpg", "moto2.jpg", "moto3.jpg", "Picture5.jpg", "Picture7.jpg", "Picture6.jpg", "Picture3.jpg", "Picture8.jpg", "smithGallery.jpg", "Picture9.jpg", "Picture11.jpg", "Picture12.jpg", "Picture13.jpg", "jk7VR.jpg", "Picture14.jpg", "Picture15.jpg", "Picture16.jpg", "Picture17.jpg", "Picture28.jpg", "Picture29.jpg", "Picture30.jpg", "Picture31.jpg", "Picture32.jpg", "Picture33.jpg", "Picture36.jpg", "Picture37.jpg", "Picture38.jpg", "Picture39.jpg",  "Picture42.jpg", "Picture43.jpg", "Picture44.jpg", "Picture45.jpg", "Picture47.jpg", "Picture48.jpg", "Picture50.jpg", "Picture52.jpg", "Picture53.jpg", "Picture54.jpg", "Picture55.jpg", "Picture56.jpg", "Picture57.jpg", "Picture58.jpg", "Picture59.jpg", "Picture60.jpg", "Picture61.jpg", "Picture63.jpg", "Picture64.jpg", "Picture65.jpg", "Picture66.jpg", "Picture67.jpg", "Picture68.jpg", "Picture69.jpg", "Picture70.jpg", "Picture71.jpg", "Picture72.jpg", "Picture73.jpg", "Picture74.jpg", "Picture75.jpg", "Picture76.jpg", "Picture77.jpg", "Picture78.jpg", "Picture79.jpg", "Picture80.jpg", "Picture81.jpg", "Picture82.jpg", "Picture83.jpg", "Picture84.jpg", "Picture85.jpg", "Picture87.jpg", "Picture88.jpg", "Picture89.jpg", "Picture90.jpg", "Picture91.jpg", "Picture92.jpg", "Picture93.jpg", "boardHKDWI10.jpg", "boardMenu.jpg", "Picture94.jpg", "Picture95.jpg", "Picture96.jpg", "Picture97.jpg", "Picture98.jpg", "Picture99.jpg", "Picture100.jpg", "Picture102.jpg", "Picture103.jpg", "Picture105.jpg", "Picture108.jpg", "Picture109.jpg", "Picture110.jpg", "Picture111.jpg", "Picture112.jpg", "Picture113.jpg", "Picture114.jpg", "Picture115.jpg", "Picture116.jpg", "Picture117.jpg", "Picture119.jpg", "Picture120.jpg", "Picture121.jpg", "Picture122.jpg", "Picture123.jpg", "Picture124.jpg", "Picture125.jpg", "Picture126.jpg", "Picture127.jpg", "2094_2.jpg", "2094_3.jpg", "2094.jpg", "Picture128.jpg", "Picture129.jpg", "Picture130.jpg", "Picture131.jpg", "dudeCruiseAbout.jpg", "Picture132.jpg", "Picture133.jpg", "Picture134.jpg", "retail.jpg", "sandalsArchive.jpg", "skateFeature2.jpg", "skateSignature18.jpg", "skateSignature19.jpg", "skateSignature20.jpg", "skateSignature21.jpg", "skateSignature22.jpg", "snowFeature.jpg", "snowMore.jpg", "sug.jpg", "sug1.jpg", "sugToy.jpg", "surr.jpg", "surr2.jpg",  "teamDway.jpg", "teamJosh.jpg", "teamworksMotoPodcast.jpg", "teamworksMotoVideo.jpg", "teesArchive.jpg", "xGames.jpg", "xGames2.jpg", "xGames3.jpg", "xGames4.jpg"];
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
/*
    for (var x=0;x < interactive.length; x++) {
        document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                                                            "<image class='interactive' src='assets/290/" + interactive[x] + "'>";
    }

    interactive.forEach((img, i) => loadImage(img))
        .then((img) => loadImage(img))
        .catch((error) => console.log('Could not load image at ' + error.message))
*/
    
    //interactive.forEach(async (img, i) => await getImage("assets/290/", img));
    
    getImage("interactive", "assets/290/", interactive, 0);

    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
    
}