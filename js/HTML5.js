/* 
function showHTML5() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").innerHTML = '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="FrontEndDevApp/irn.html" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML + 
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="IRN/irn.html" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="DecisionSupport/imagingAppDark.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="ES_App_Mobile/ES_Training.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="VideoDirectory/html5/courseLocal.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
    '<iframe class="HTML5" height="'+(window.innerHeight-200)+'" src="XBT/html5/courseLocal.html" frameborder="0" scrolling="auto" allowfullscreen></iframe>';
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").className = "html5";
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;		
}
*/
function showHTML5() {
    ga('set', 'page', '/applications');
    ga('send', 'pageview');
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";

    const html5 = ["CarefusionVideoStrategy.png", "DecisionSupport_Flex.png", "ES_Flex.png", "IRN_Flex.png", "OR_Implementation.png", "OR_Specialized.png", "OR_Workflow.png"];

//    html5.forEach(async (img, i) => await getImage("portfolio/", img));
    getImage("mobileImage", "portfolio/", html5, 0);
//    document.getElementById("resume").innerHTML = "<image class='mobileImage' src='portfolio/CarefusionVideoStrategy.png'>" +
//        "<image class='mobileImage' src='portfolio/DecisionSupport_Flex.png'>" +
//        "<image class='mobileImage' src='portfolio/ES_Flex.png'>" +
//        "<image class='mobileImage' src='portfolio/IRN_Flex.png'>" +
//        "<image class='mobileImage' src='portfolio/OR_Implementation.png'>" +
//        "<image class='mobileImage' src='portfolio/OR_Specialized.png'>" +
//        "<image class='mobileImage' src='portfolio/OR_Workflow.png'>";

    document.getElementById("resume").className += " mobile";
    document.getElementById("resume").style.opacity = 1;
}