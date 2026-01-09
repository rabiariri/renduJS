const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // récuperation dans le dom
        const banniere = document.getElementById("banner");

        // création Text 
        const texteBanniere = document.createElement("div");
        texteBanniere.classList.add("text-banner");

        const hbanniere = document.createElement("h1");
        hbanniere.textContent = data.nomCommercial;

        const pbanniere = document.createElement("p");
        pbanniere.textContent = data.phraseAccroche;

        const btnbanniere = document.createElement("button");
        btnbanniere.textContent = data.texteAppelAction;

        texteBanniere.appendChild(hbanniere);
        texteBanniere.appendChild(pbanniere);
        texteBanniere.appendChild(btnbanniere);

        banniere.appendChild(texteBanniere);
        





    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération des données :", error);
    });