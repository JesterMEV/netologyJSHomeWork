'use sctrick'

let item = document.getElementById('content');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/book/', false);
xhr.send();



const someFunc = function() {
    console.log(xhr.responseText)
    let randomVal = JSON.parse(xhr.responseText).reduce((fullString, el) => {
    return fullString += `<li 
     data-title="${el.title}"
     data-author="${el.author.name}"
     data-info="${el.info}"
     data-price="${el.price}">
     <img
     src="${el.cover.small}">
     </li>`;

  }, ``);
  return randomVal;
}



document.getElementById('content').innerHTML = someFunc();
xhr.addEventListener('load', someFunc)