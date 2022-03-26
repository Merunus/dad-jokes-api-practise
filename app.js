const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")

jokeBtn.addEventListener("click", generateJoke)



async function generateJoke() {
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

   const res = await fetch("https://icanhazdadjoke.com/", config)
   const data = await res.json()
    jokeEl.innerHTML = data.joke


}
generateJoke();




// 1 Method
// fetch("https://icanhazdadjoke.com", config)
// .then(response => response.json())
// .then((data) => {
//     jokeEl.innerHTML = data.joke
// });

// const jokeEl = document.getElementById("joke")
// const jokeBtn = document.getElementById("joke-btn")

// jokeBtn.addEventListener("click", generateJoke)



// async function generateJoke() {
//     const config = {
//         headers: {
//             "Accept": "application/json"
//         }
//     }

//    const res = await fetch("https://icanhazdadjoke.com", config)
//    const data = await res.json()
//     jokeEl.innerHTML = data.joke


// }
// generateJoke();

// // 1 Method
// // fetch("https://icanhazdadjoke.com", config)
// // .then(response => response.json())
// // .then((data) => {
// //     jokeEl.innerHTML = data.joke
// // });