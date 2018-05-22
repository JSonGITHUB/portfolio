const clearContent = () => {
    if (document.getElementById("resume")) { 
        document.getElementById("resume").style.opacity = 1;
        document.getElementById("resume").innerHTML = "";
    }
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementsByName('container').scrollTop = 0;
    document.getElementById('resume').scrollTop = 0;
    document.getElementById("resume").className += " mobile";
    
}