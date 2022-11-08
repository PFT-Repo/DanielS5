function getJoke(){
    console.log("llego a entar en getJoke");
    fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json"
  }
}).then((response) => response.json())
    .then((data) => renderQuotes(data));

}

function renderQuotes(data){
    let f = [data];
    console.log(data);
    console.log("llego a entar en Render");
//Find the container where we attach everything to
    const maindiv = document.getElementById('jokeText');
    const joketold = document.getElementById('joketold');
    if(joketold)
    {
        joketold.remove();
    }
    console.log(maindiv?.innerHTML);
//Create all necessary elements
    const p = document.createElement('p');
//Grab data and insert it into created elements
    console.log(f[0].joke);
    p.innerHTML = f[0].joke;
    p.id = 'joketold';
//Append everything to main container
    if (maindiv) {
        maindiv.append(p);
        }
 }
function fetch_dom(){
    console.log("llego a entar en fetch_dom");
getJoke();
}