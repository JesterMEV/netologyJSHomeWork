'use sctrick'

let item = document.getElementById('content');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/');
xhr.send();

const getDateBooks = function() {
    if (xhr.status === 200) {
       return JSON.parse(xhr.responseText).reduce((fullString, el) => {
        return fullString += `<li 
         data-title="${el.title}"
         data-author="${el.author.name}"
         data-info="${el.info}"
         data-price="${el.price}">
         <img
         src="${el.cover.small}">
         </li>`;
      }, ``);
    }
}

xhr.addEventListener('load', getDateBooks);
document.getElementById('content').innerHTML = getDateBooks();