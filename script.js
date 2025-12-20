const apiUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        textBanner(data);
        displayAvantages(data);
        displayProducts(data);
        displayServices(data);
        displayTemoignages(data);
    })
    .catch(error => console.error(error));

function textBanner(data) {
    const banner = document.getElementById("banner");
    const box = document.createElement("div");
    box.classList.add("text-banner");
    const h1 = document.createElement("h1");
    h1.textContent = data.nomCommercial;
    const p = document.createElement("p");
    p.textContent = data.phraseAccroche;
    const btn = document.createElement("button");
    btn.textContent = data.texteAppelAction;
    box.append(h1, p, btn);
    banner.appendChild(box);
}

function displayAvantages(data) {
    const container = document.querySelector(".avantages-container");
    data.avantagesClients.forEach((avantage, index) => {
        const card = document.createElement("div");
        card.classList.add("avantage-card");
        const h3 = document.createElement("h3");
        h3.textContent = `Avantage ${index + 1}`;
        const p = document.createElement("p");
        p.textContent = avantage;
        card.append(h3, p);
        container.appendChild(card);
    });
}

function displayProducts(data) {
    const container = document.querySelector(".products-container");
    const images = [
        "pexels-franki-frank-30461317.jpg",
        "pexels-nietjuhart-2014693.jpg",
        "pexels-pixabay-461431.jpg",
        "pexels-anh-nguyen-517648218-35286343.jpg",
        "pexels-karola-g-5237735.jpg"
    ];
    data.produits.forEach((produit, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        const img = document.createElement("img");
        img.src = images[index];
        img.alt = produit.nom;
        const h3 = document.createElement("h3");
        h3.textContent = produit.nom;
        const p = document.createElement("p");
        p.textContent = produit.description;
        card.append(img, h3, p);
        container.appendChild(card);
    });
}

function displayServices(data) {
    const container = document.querySelector(".services-container");
    data.services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service-card");
        const h3 = document.createElement("h3");
        h3.textContent = service.nom;
        const p = document.createElement("p");
        p.textContent = service.description;
        card.append(h3, p);
        container.appendChild(card);
    });
}

function displayTemoignages(data) {
    const container = document.querySelector(".temoignages-container");
    data.temoignages.forEach(temoignage => {
        const card = document.createElement("div");
        card.classList.add("temoignage-card");
        const note = document.createElement("p");
        note.classList.add("temoignage-note");
        note.textContent = `Note: ${temoignage.note} / 5`;
        const commentaire = document.createElement("p");
        commentaire.classList.add("temoignage-commentaire");
        commentaire.textContent = `"${temoignage.commentaire}"`;
        const prenom = document.createElement("p");
        prenom.classList.add("temoignage-prenom");
        prenom.textContent = temoignage.prenom;
        const experience = document.createElement("p");
        experience.classList.add("temoignage-experience");
        experience.textContent = temoignage.typeExperience;
        card.append(note, commentaire, prenom, experience);
        container.appendChild(card);
    });
}
