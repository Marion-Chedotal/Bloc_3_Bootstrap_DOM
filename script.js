
let articleIndex = 1;
let url = 'https://www.tbads.eu/greta/kercode/ajax/?article=1';
$(document).ready(function () {
    function article() {

        /* Partie NEWS 1
         * Récupération des données via le DOM et intégration à l'emplacement "dernières news"*/
        let titleNews = document.querySelector(`#news${articleIndex} h5`);
        let contentNews = document.querySelector(`#news${articleIndex} p`);
        let keywordsNews = document.querySelector(`#news${articleIndex} .p2`);

        //Données à intégrer dans la boite modale
        let modalTitle = document.querySelector(`#modal-${articleIndex} h5`);
        let modalDate = document.querySelector(`#modal-${articleIndex} p.date`);
        let modalAuthor = document.querySelector(`#modal-${articleIndex} .author`);
        let modalKeywords = document.querySelector(`.keywords${articleIndex}`)
        let modalContent = document.querySelector(`#modal-${articleIndex} .content`);
        let modalImg = document.querySelector(`#img-news${articleIndex}`);

        fetch(url)
            .then(response => response.json())
            .then(json => {

                let title = json.title;
                modalTitle.innerHTML = title;

                let date = json.date.day + " " + json.date.month + " " + json.date.year;
                titleNews.innerHTML = date;
                modalDate.innerHTML = date;

                // ajout de l'attribut src à la balise img
                modalImg.setAttribute("src","");
                modalImg.src = json.picture;

                let content = json.content[0].substring(0, 150);
                contentNews.innerHTML = content + "...";
                for (let content of json.content) {
                    let p = document.createElement('p');
                    p.innerHTML = content;
                    modalContent.appendChild(p);
                }

                let authorName = json.author.name;
                let authorSurname = json.author.surname;
                modalAuthor.innerHTML = authorSurname + " " + authorName;

                let keywords = json.keyword[0] + " / " + json.keyword[1] + " / " + json.keyword[2];
                keywordsNews.innerHTML = keywords;
                modalKeywords.innerHTML = keywords;
            })
            .catch(error => alert("Erreur : " + error));
    }
    article();
    // Nouvelle fonction qui permet de charger le 2nd article
    function newArticle() {
        articleIndex = 2;
        url = 'https://www.tbads.eu/greta/kercode/ajax/?article=2';
        article();
    }
    newArticle();
});