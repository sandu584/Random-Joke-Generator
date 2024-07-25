const button = document.querySelector('#button');
const h3 = document.querySelector('#h3');
const h2 = document.querySelector('#h2');

button.addEventListener('click', () => {
    h3.innerHTML = h2.innerHTML = "Loading..."
    fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then(res => res.json())
        .then(res => {
            h3.innerHTML = res.setup;
            h2.innerHTML = res.punchline;
        })
        .catch(err => {
            document.write("Oops! Something went wrong!")
            console.log(err);
        })
});