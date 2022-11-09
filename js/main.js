function Weather() {
    /**const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e9c432700fmsh8294d9b436f8c52p1d391ejsne71d8560d169',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    */
    //fetch('http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&APPID=66bf147b8deac0e9d449ef2b67c0dd0f')
    fetch('http://api.weatherunlocked.com/api/current/41.38879,2.15899?app_id=5b4f1a91&app_key=4a047c7a225ad23c1a810e038a396596')
        .then(function (response) { return response.json(); })
        .then(function (response) { return renderWeather(response); })["catch"](function (err) { return console.error(err); });
    function renderWeather(data) {
        //Find the container where we attach everything to
        var maindiv = document.getElementById('icon_weather');
        var joketold = document.getElementById('text_weather');
        //Create all necessary elements
        //Grab data and insert it into created elements
        //Append everything to main container
        if (maindiv && joketold) {
            maindiv.src = "../drawables/" + data.wx_icon;
            maindiv.append();
            joketold.innerText = data.temp_c;
        }
    }
}
var reportAcudits = [];
var arr = [];
function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    }).then(function (response) { return response.json(); })
        .then(function (data) { return renderQuotes(data); });
}
function renderQuotes(data) {
    var f = [data];
    //Find the container where we attach everything to
    var maindiv = document.getElementById('jokeText');
    var joketold = document.getElementById('joketold');
    var jokedicha = document.getElementById('joketold2');
    if (joketold) {
        joketold.remove();
        getJoke2();
        return 0;
    }
    if (jokedicha) {
        jokedicha.remove();
    }
    //Create all necessary elements
    var p = document.createElement('p');
    //Grab data and insert it into created elements
    p.innerHTML = f[0].joke;
    p.id = 'joketold';
    p.className = "mx-5 mx-md-0";
    //Append everything to main container
    if (maindiv) {
        maindiv.append(p);
    }
}
function getJoke2() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single", {}).then(function (response) { return response.json(); })
        .then(function (data) { return renderQuotes2(data); });
}
function renderQuotes2(data) {
    var f = [data];
    //Find the container where we attach everything to
    var maindiv = document.getElementById('jokeText');
    var joketold = document.getElementById('joketold2');
    if (joketold) {
        joketold.remove();
    }
    //Create all necessary elements
    var p = document.createElement('p');
    //Grab data and insert it into created elements
    p.innerHTML = f[0].joke;
    p.id = 'joketold2';
    p.className = "mx-5 mx-md-0";
    //Append everything to main container
    if (maindiv) {
        maindiv.append(p);
    }
}
function reportJoke(number) {
    var joketold = document.getElementById('joketold');
    var joketolded = document.getElementById('joketold2');
    var d = new Date;
    if (joketold) {
        var a1 = {
            joke: joketold.innerText,
            resultado: number,
            date: d.toISOString()
        };
        arr.push(a1);
        console.log(arr);
        getJoke();
    }
    if (joketolded) {
        var a1 = {
            joke: joketolded.innerText,
            resultado: number,
            date: d.toISOString()
        };
        arr.push(a1);
        console.log(arr);
        getJoke();
    }
    if (!joketold && !joketolded) {
        alert("Aprieta el boton de siguiente chiste para lograr una valoración...");
    }
}
function fetch_dom() {
    getJoke();
}
