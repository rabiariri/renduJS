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

        const avantages = document.getElementById("avantages-container");

        data.avantagesClients.forEach((avantage, index) => {

            const texteavantages = document.createElement("div");
            texteavantages.classList.add("avantage-card");

            const havantages = document.createElement("h3");
            havantages.textContent = `Avantage ${index + 1}`;

            const pavantages = document.createElement("p");
            pavantages.textContent = avantage;

            texteavantages.appendChild(havantages);
            texteavantages.appendChild(pavantages);

            avantages.appendChild(texteavantages);

        });

        const produits = document.getElementById("products-container");

        data.produits.forEach(produit => {
            const texteproduits = document.createElement("div");
            texteproduits.classList.add("product-card");

            const imgproduits = document.createElement("img");
            imgproduits.src = produit["image-url"];
            imgproduits.alt = produit.nom;

            const hproduits = document.createElement("h3");
            hproduits.textContent = produit.nom;

            const pproduits = document.createElement("p");
            pproduits.textContent = produit.description;

            texteproduits.appendChild(imgproduits);
            texteproduits.appendChild(hproduits);
            texteproduits.appendChild(pproduits);

            produits.appendChild(texteproduits);
        });

        const services = document.getElementById("services-container");

        data.services.forEach(service => {
            const texteservices = document.createElement("div");
            texteservices.classList.add("service-card");

            const hservice = document.createElement("h3");
            hservice.textContent = service.nom;

            const pservice = document.createElement("p");
            pservice.textContent = service.description;

            texteservices.appendChild(hservice);
            texteservices.appendChild(pservice);

            services.appendChild(texteservices);
        });

            const temoignages = document.getElementById("temoignages-container");

            data.temoignages.forEach(vouch => {

                const textetemoignages = document.createElement("div");
                textetemoignages.classList.add("temoignage-card");

                const htemoignage = document.createElement("h3");
                htemoignage.textContent = vouch.prenom;

                const p1temoignage = document.createElement("p");
                p1temoignage.textContent = vouch.typeExperience;

                const p2temoignage = document.createElement("p");
                p2temoignage.textContent = `Note: ${vouch.note}/5`;

                const p3temoignage = document.createElement("p");
                p3temoignage.textContent = vouch.commentaire;

                textetemoignages.appendChild(htemoignage);
                textetemoignages.appendChild(p1temoignage);
                textetemoignages.appendChild(p2temoignage);
                textetemoignages.appendChild(p3temoignage);

                temoignages.appendChild(textetemoignages);

            });

    })
    .catch(function (error) {
        console.error("Erreur lors de la récupération des données :", error);
    });
