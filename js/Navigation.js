const toggleNav = () => {

    const selections = [
        { page: "Resume", function: "showResume()" },
        { page: "Mobile", function: "showMobile()" },
        { page: "Web", function: "showInteractive()" },
        { page: "Advertising", function: "showAdvertising()" },
        { page: "Applications", function: "showHTML5()" }
    ]
        
    if (document.getElementsByTagName('nav')[0].className == 'animate display') {
        document.getElementsByTagName('nav')[0].className = 'animate';
        document.getElementsByTagName('nav')[0].innerHTML = "";
        document.getElementById('menuClose').className = "animate hide";
        document.getElementById('menu').className = "animate show";
        document.body.className = document.body.className.replace("noscroll", "");
    } else {
        document.getElementsByTagName('nav')[0].className = 'animate display';
        selections.forEach((menuItem, i) => {
            document.getElementsByTagName('nav')[0].innerHTML += 
                "<button type='button' class='btn btn-default btn-lg' onclick='"+menuItem.function+"'>"+
                    menuItem.page +
                "</button><br>";
        })

        document.body.className += "noscroll";
        document.getElementById('menu').className = "animate hide";
        document.getElementById('menuClose').className = "animate show";
    }
    
}