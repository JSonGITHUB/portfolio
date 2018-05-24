const toggleNav = () => {
    if (document.getElementsByTagName('nav')[0].className == 'animate display') {
        document.getElementsByTagName('nav')[0].className = 'animate';
        document.getElementsByTagName('nav')[0].innerHTML = "";
        document.getElementById('menuClose').className = "animate hide";
        document.getElementById('menu').className = "animate show";
        document.body.className = document.body.className.replace("noscroll", "");
    } else {
        document.getElementsByTagName('nav')[0].className = 'animate display';
        (async () => await getAppData()
            .then(data => data.navigation.selections.forEach((eachPage, i) => 
                document.getElementsByTagName('nav')[0].innerHTML += 
                    "<button type='button' class='btn btn-default btn-lg' onclick='" + eachPage.function + "'>"+
                        eachPage.page +
                    "</button><br>"))
            .catch(error => console.log('error: ', error.message))
        )()
        document.body.className += "noscroll";
        document.getElementById('menu').className = "animate hide";
        document.getElementById('menuClose').className = "animate show";
    }
}