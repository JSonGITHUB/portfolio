function showMobile() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "<image class='mobileImage' class='mobileImage' src='assets/mobile/uProMX.png'>" +
            "<image class='mobileImage' src='assets/mobile/uProMX_0.png'>" +
            "<image class='mobileImage' src='assets/mobile/uProMX_1.png'>" +
            "<image class='mobileImage' src='assets/mobile/uProMX_2.png'>";
    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
}