function getJoke() {
    console.log("llego a entar en getJoke");
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    }).then(function (response) { return response.json(); })
        .then(function (data) { return renderQuotes(data); });
}
function renderQuotes(data) {
    var f = [data];
    console.log(data);
    console.log("llego a entar en Render");
    //Find the container where we attach everything to
    var maindiv = document.getElementById('jokeText');
    var joketold = document.getElementById('joketold');
    if (joketold) {
        joketold.remove();
    }
    console.log(maindiv === null || maindiv === void 0 ? void 0 : maindiv.innerHTML);
    //Create all necessary elements
    var p = document.createElement('p');
    //Grab data and insert it into created elements
    console.log(f[0].joke);
    p.innerHTML = f[0].joke;
    p.id = 'joketold';
    //Append everything to main container
    if (maindiv) {
        maindiv.append(p);
    }
}
function fetch_dom() {
    console.log("llego a entar en fetch_dom");
    getJoke();
}
