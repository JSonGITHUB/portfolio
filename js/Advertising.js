function showAdvertising() {
    var vids = ["DC815X290Blabac.mov", "DC_PJ728X90a.mov", "DC_Dompirre300X100Link.mov", "trice.mov", "DCSkate_Dompierre600X200.mov", "DC_PJ160X600a.mov", "DC_240X400KOV.mov", "DC_300X100KOV.mov", "728X90.mov", "DC_300X250KOV.mov", "728X90_2.mov", "DC_corey160X600.mov", "DC_Jayke728X90.mov", "728x90_pj.mov"];
    var ads = ["DC815X290Blabac.swf", "trice.swf", "DCSkate_Dompierre600X200.swf", "DC_PJ160X600a.swf", "DC_PJ728X90a.swf", "DC_300X100KOV.swf", "728X90.swf", "DC_300X250KOV.swf", "728X90_2.swf", "DC_Jayke728X90.swf", "728x90_pj.swf", "DC_corey160X600.swf", "SP09App.swf"];
    var adsTop = ["-300px", "-390px", "-300px", "0px", "-500px", "-300px", "-300px", "-300px", "-510px", "-300px", "-300px", "0px", "-300px"];
    var adsWidth = ["815px", "auto", "600px", "160px", "728px", "300px", "728px", "300px", "728px", "728px", "728px", "160px", "auto"];
    var adsHeight = ["290px", "200px", "200px", "600[x", "90px", "100px", "90px", "250px", "90px", "90px", "90px", "600px", "auto"];
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").className += " mobile";
    var hasFlash = false;
    var x=0;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }
    if (hasFlash) {
        for (x=0;x < ads.length; x++) {
            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                    "<object class='ad' width='"+adsWidth[x]+"' height='"+adsHeight[x]+"' data='assets/banners/" + ads[x] + "'></object>";
        }
    } else {
        for (x=0;x < vids.length; x++) {

            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +

            "<video class='ad' width='400'controls>" +
                "<source src='assets/banners/" + vids[x] + "' type='video/mp4'>" +
                "Your browser does not support HTML5 video." +
            "</video>";
                    
        }   
    }                                         
    //document.getElementById("resume").className = "mobile";
    document.getElementById("resume").style.opacity = 1;
}