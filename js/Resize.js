function resize() {
    var n = 1;    
    if (document.getElementById("col1") && window.innerWidth < 450) {
        for(n=1;n<=4; n++) {
            document.getElementById("col"+n).className = "lessThan400";
        }
    } else if (document.getElementById("col1") && window.innerWidth < 800) {
        for(n=1;n<=4; n++) {
            document.getElementById("col"+n).className = "lessThan800";
        }
    } else {
        for(n=1;n<=4; n++) {
            document.getElementById("col"+n).className = "moreThan800";
        }
    }
}