const getAppData = async ()  => {
    let response = await (fetch('assets/data/data.json')
        .then(response => response.json())
        .catch(error => console.log('error: ', error.message))
    )
    return response
}
document.getElementById('menuClose').className = "hide";
showResume();