function showMobile() {
    ga('set', 'page', '/mobile');
    ga('send', 'pageview');
    const mobile = ["uProMX.png", "uProMX_0.png", "uProMX_1.png", "uProMX_2.png"]
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
//    mobile.forEach(async (img, i) => await getImage("assets/mobile/", img));
        getImage("mobileImage", "assets/mobile/", mobile, 0);
//    document.getElementById("resume").innerHTML = "<image class='mobileImage' src='assets/mobile/uProMX.png'>" +
//            "<image class='mobileImage' src='assets/mobile/uProMX_0.png'>" +
//            "<image class='mobileImage' src='assets/mobile/uProMX_1.png'>" +
//            "<image class='mobileImage' src='assets/mobile/uProMX_2.png'>";
    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
}