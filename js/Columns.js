function showColumns() {
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").innerHTML = "";
    document.getElementById("resume").innerHTML = "<div id='col1' class='moreThan800'>ONE</div><div id='col2' class='moreThan800'>TWO</div><div id='col3' class='moreThan800'>THREE</div><div id='col4' class='moreThan800'>FOUR</div>";
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("resume").className = "columns";
    document.getElementById("resume").scrollTop = 0;
    document.getElementById("resume").scrollLeft = 0;
    resize();   
}