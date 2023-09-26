

window.onload = (event => {
    //Set up random movie API 
    let title;
    let imgUrl;
    
    const movieApiUrl = 'https://moviesdatabase.p.rapidapi.com/titles/random?limit=1&list=most_pop_movies';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f99312822bmsh8b38b945f03e4dbp10bf9djsnc9739cdafee6',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    //get random buttom 
    const randBtn = document.getElementById("randMovie");

    //Select a random movie when user clicks button
    randBtn.addEventListener("click", (event) => {
        const movie = fetch(movieApiUrl, options)
                    .then((res) => res.json())
                    .then(data => {
                        title = data["results"][0]["titleText"]["text"];
                        imgUrl = data["results"][0]["primaryImage"]["url"];
                    }).then(() => {
                        updateMovie();
                    })
    });

    //Update UI for movie title and picture 
    function updateMovie() {
        const mImage = document.getElementById("mImg");
        mImage.setAttribute("src", imgUrl);

        const mTitle = document.getElementById("mtitle");
        mTitle.innerText = title;

        //will add functionality for ways to watch at a later time
        // const watch = document.getElementById("w2w");
        // watch.innerText = "Ways to Watch";
    }
});
