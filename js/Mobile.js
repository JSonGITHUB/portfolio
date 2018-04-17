function showMobile() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "<image class='mobileImage' src='assets/mobile/MainMenu.png'>" +
            "<image class='mobileImage' src='assets/mobile/CourseSelection.png'>" +
            "<image class='mobileImage' src='assets/mobile/ScoreCard.png'>" +
            "<image class='mobileImage' src='assets/mobile/ProView.png'>" +
            "<image class='mobileImage' src='assets/mobile/Landscape.png'>";
    document.getElementById("resume").className = "mobile";
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;
}