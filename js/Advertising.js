function showAdvertising() {
    var ads = ["DC815X290Blabac.swf", "trice.swf", "DCSkate_Dompierre600X200.swf", "DC_PJ160X600a.swf", "DC_PJ728X90a.swf", "DC_300X100KOV.swf", "728X90.swf", "DC_300X250KOV.swf", "728X90_2.swf", "DC_Jayke728X90.swf", "728x90_pj.swf", "DC_corey160X600.swf", "SP09App.swf"];
    var adsTop = ["-300px", "-390px", "-300px", "0px", "-500px", "-300px", "-300px", "-300px", "-510px", "-300px", "-300px", "0px", "-300px"];
    var adsWidth = ["815px", "auto", "600px", "160px", "728px", "300px", "728px", "300px", "728px", "728px", "728px", "160px", "auto"];
    var adsHeight = ["290px", "200px", "200px", "600[x", "90px", "100px", "90px", "250px", "90px", "90px", "90px", "600px", "auto"];
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    for (var x=0;x < ads.length; x++) {
       // if (x>3 && x<7) {
        document.getElementById("resume").className += " ad";
            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
               // "<div id='adContainer"+x+"' class='interactiveContainer'>" +
                    "<object width='"+adsWidth[x]+"' height='"+adsHeight[x]+"' data='assets/banners/" + ads[x] + "'></object>"; /* +
                    "<object width='"+adsWidth[x+1]+"' height='"+adsHeight[x+1]+"' data='assets/banners/" + ads[x+1] + "'></object><br>" +
                    "<object width='"+adsWidth[x+2]+"' height='"+adsHeight[x+2]+"' data='assets/banners/" + ads[x+2] + "'></object>" +
                "</div>";
            document.getElementById("adContainer"+x).style.top = adsTop[x];
            document.getElementById("adContainer"+x).style.position = "relative";
            x++
            x++
            x++
        } else if (x>7 && x<11) {
            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                "<div id='adContainer"+x+"' class='interactiveContainer'>" +
                    "<object width='"+adsWidth[x]+"' height='"+adsHeight[x]+"' data='assets/banners/" + ads[x] + "'></object><br>" +
                    "<object width='"+adsWidth[x+1]+"' height='"+adsHeight[x+1]+"' data='assets/banners/" + ads[x+1] + "'></object><br>" +
                    "<object width='"+adsWidth[x+2]+"' height='"+adsHeight[x+2]+"' data='assets/banners/" + ads[x+2] + "'></object>" +
                "</div>";                                                                
            document.getElementById("adContainer"+x).style.top = adsTop[x];
            document.getElementById("adContainer"+x).style.position = "relative";
            x++
            x++
            x++
        } if (x>0 && x<3) {
            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                "<div id='adContainer"+x+"' class='interactiveContainer'>" +
                    "<object width='"+adsWidth[x]+"' height='"+adsHeight[x]+"' data='assets/banners/" + ads[x] + "'></object><br>" +
                    "<object width='"+adsWidth[x+1]+"' height='"+adsHeight[x+1]+"' data='assets/banners/" + ads[x+1] + "'></object>" +
                "</div>";                                               
            document.getElementById("adContainer"+x).style.top = adsTop[x];
            document.getElementById("adContainer"+x).style.position = "relative";
            x++
        } else {
            document.getElementById("resume").innerHTML = document.getElementById("resume").innerHTML +
                "<div id='adContainer"+x+"' class='interactiveContainer'>" +
                    "<object width='"+adsWidth[x]+"' height='"+adsHeight[x]+"' data='assets/banners/" + ads[x] + "'></object>" +
                "</div>";
            document.getElementById("adContainer"+x).style.top = adsTop[x];
            document.getElementById("adContainer"+x).style.position = "relative";
        }
        */
    }                                            
    document.getElementById("resume").className = "mobile";
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;
}