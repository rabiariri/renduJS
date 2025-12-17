const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // CODE QUI S'EXECUTE EN PRENANT LES INFORMATIONS DU JSON
        textBanner(data);

    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération des données :", error);
    });

function textBanner(data) {
    const banner = document.getElementById("banner");

    // CREATION TEXTE BANNIERE
    const textCenterBanner = document.createElement("div");
    textCenterBanner.classList.add("text-banner");

    const titleBanner = document.createElement("h1");
    titleBanner.textContent = data.nomCommercial;

    const paraBanner = document.createElement("p");
    paraBanner.textContent = data.phraseAccroche;

    const btnBanner = document.createElement("button");
    btnBanner.textContent = data.texteAppelAction;

    // AFFILIATION DU CONTENU CREE A LA DIV CREEE
    textCenterBanner.appendChild(titleBanner);
    textCenterBanner.appendChild(paraBanner);
    textCenterBanner.appendChild(btnBanner);

    // AFFICHAGE TEXTE BANNIERE EN RELIANT LA DIV A LA VARIABLE HTML
    banner.appendChild(textCenterBanner);
}