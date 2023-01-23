// pour visualiser dans la console les chemins d'accès aux données
// fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
//     .then(response => response.json())
//     .then(response2 => console.log(response2))


let articleIndex = 1;
$(document).ready(function () {

    /* Partie NEWS 1
     * JSON pour récupérer les données et les intégrer à l'emplacement "dernières news"*/
    let titleNews1 = document.querySelector(`#news${articleIndex} h5`);
    let contentNews1 = document.querySelector('#news1 p');
    let keywordsNews1 = document.querySelector('#news1 .p2');

    //Données à intégrer dans la boite modale
    let modalTitle1 = document.querySelector('#modal-1 h5');
    let modalDate1 = document.querySelector('#modal-1 p.date');
    let modalAuthor1 = document.querySelector('#modal-1 .author');
    let modalKeywords1 = document.querySelector('.keywords1')
    let modalContent1 = document.querySelector('#modal-1 .content1');
    let modalImg1 = document.querySelector('#img-news1');

    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(response => response.json())
        .then(json => {

            let title1 = json.title;
            modalTitle1.innerHTML = title1;

            let date1 = json.date.day + " " + json.date.month + " " + json.date.year;
            titleNews1.innerHTML = date1;
            modalDate1.innerHTML = date1;

            modalImg1.src = json.picture;

            let content1 = json.content[0].substring(0, 150);
            contentNews1.innerHTML = content1 + "...";
            for (let content1 of json.content) {
                let p = document.createElement('p');
                p.innerHTML = content1;
                modalContent1.appendChild(p);
            }

            let authorName1 = json.author.name;
            let authorSurname1 = json.author.surname;
            modalAuthor1.innerHTML = authorSurname1 + " " + authorName1;

            let keywords1 = json.keyword[0] + " / " + json.keyword[1] + " / " + json.keyword[2];
            keywordsNews1.innerHTML = keywords1;
            modalKeywords1.innerHTML = keywords1;



        })
        .catch(error => alert("Erreur : " + error));


    /* Partie NEWS 2
     * JSON pour récupérer les données et les intégrer à l'emplacement "dernières news"*/
    let titleNews2 = document.querySelector('#news2 h5');
    let contentNews2 = document.querySelector('#news2 p');
    let keywordsNews2 = document.querySelector('#news2 .p2');

    //Données à intégrer dans la boite modale
    let modalTitle2 = document.querySelector('#modal-2 h5');
    let modalDate2 = document.querySelector('#modal-2 p.date');
    let modalAuthor2 = document.querySelector('#modal-2 .author');
    let modalKeywords2 = document.querySelector('.keywords2')
    let modalContent2 = document.querySelector('#modal-2 .content');
    let modalImg2 = document.querySelector('#img-news2');


    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
        .then(response => response.json())
        .then(json => {

            let title2 = json.title;
            modalTitle2.innerHTML = title2;

            let date2 = json.date.day + " " + json.date.month + " " + json.date.year;
            titleNews2.innerHTML = date2;
            modalDate2.innerHTML = date2;

            let content2 = json.content[0].substring(0, 150);
            contentNews2.innerHTML = content2 + "...";

            let authorName2 = json.author.name;
            let authorSurname2 = json.author.surname;
            modalAuthor2.innerHTML = authorSurname2 + " " + authorName2;

            let keywords2 = json.keyword[0] + " / " + json.keyword[1] + " / " + json.keyword[2];
            keywordsNews2.innerHTML = keywords2;
            modalKeywords2.innerHTML = keywords2;

            modalImg2.src = json.picture;

            for (let content of json.content) {
                let p = document.createElement('p');
                p.innerHTML = content;
                modalContent2.appendChild(p);
            }
        })

        .catch(error => alert("Erreur : " + error));
});