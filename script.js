const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        textBanner(data);
        displayAvantages(data);
        displayProducts(data);
        displayServices(data);
        displayTemoignages(data);
    })
    .catch(function(error) {
        console.error("Erreur lors de la récupération des données :", error);
    });

function textBanner(data) {
    const banner = document.getElementById("banner");

    const textBannerDiv = document.createElement("div");
    textBannerDiv.className = "text-banner";

    const title = document.createElement("h1");
    title.textContent = data.nomCommercial;

    const para = document.createElement("p");
    para.textContent = data.phraseAccroche;

    const button = document.createElement("button");
    button.textContent = data.texteAppelAction;

    textBannerDiv.appendChild(title);
    textBannerDiv.appendChild(para);
    textBannerDiv.appendChild(button);

    banner.appendChild(textBannerDiv);
}

function displayAvantages(data) {
    const container = document.getElementById("avantages").getElementsByClassName("avantages-container")[0];

    for (let i = 0; i < data.avantagesClients.length; i++) {
        const card = document.createElement("div");
        card.className = "avantage-card";

        const h3 = document.createElement("h3");
        h3.textContent = "Avantage " + (i + 1);

        const p = document.createElement("p");
        p.textContent = data.avantagesClients[i];

        card.appendChild(h3);
        card.appendChild(p);
        container.appendChild(card);
    }
}

function displayProducts(data) {
    const container = document.getElementById("products").getElementsByClassName("products-container")[0];

    const images = [
        "pexels-franki-frank-30461317.jpg",
        "pexels-nietjuhart-2014693.jpg",
        "pexels-pixabay-461431.jpg",
        "pexels-anh-nguyen-517648218-35286343.jpg",
        "pexels-karola-g-5237735.jpg"
    ];

    for (let i = 0; i < data.produits.length; i++) {
        const produit = data.produits[i];

        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = images[i];
        img.alt = produit.nom;

        const h3 = document.createElement("h3");
        h3.textContent = produit.nom;

        const p = document.createElement("p");
        p.textContent = produit.description;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);
        container.appendChild(card);
    }
}

function displayServices(data) {
    const container = document.getElementById("services").getElementsByClassName("services-container")[0];

    for (let i = 0; i < data.services.length; i++) {
        const service = data.services[i];

        const card = document.createElement("div");
        card.className = "service-card";

        const h3 = document.createElement("h3");
        h3.textContent = service.nom;

        const p = document.createElement("p");
        p.textContent = service.description;

        card.appendChild(h3);
        card.appendChild(p);
        container.appendChild(card);
    }
}

function displayTemoignages(data) {
    const container = document.getElementById("temoignages").getElementsByClassName("temoignages-container")[0];

    for (let i = 0; i < data.temoignages.length; i++) {
        const temoignage = data.temoignages[i];

        const card = document.createElement("div");
        card.className = "temoignage-card";

        const note = document.createElement("p");
        note.className = "temoignage-note";
        note.textContent = "Note: " + temoignage.note + " / 5";

        const commentaire = document.createElement("p");
        commentaire.className = "temoignage-commentaire";
        commentaire.textContent = '"' + temoignage.commentaire + '"';

        const prenom = document.createElement("p");
        prenom.className = "temoignage-prenom";
        prenom.textContent = temoignage.prenom;

        const experience = document.createElement("p");
        experience.className = "temoignage-experience";
        experience.textContent = temoignage.typeExperience;

        card.appendChild(note);
        card.appendChild(commentaire);
        card.appendChild(prenom);
        card.appendChild(experience);
        container.appendChild(card);
    }
}
