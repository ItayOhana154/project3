function searching() {
    let info = document.getElementById('person');
    let search = document.getElementById('search');
    
    let human = server.get(search.value);

    info.innerHTML = '';

    for (const key in human) {
        info.innerHTML += key + ': ' + human[key] +"<br>";
    }
};