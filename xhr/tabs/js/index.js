'use strict'

let xhr = new XMLHttpRequest();
let links = document.querySelectorAll('nav a');
let content = document.getElementById('content')


const activeTab = function(event) {
  event.preventDefault();
  if (event.currentTarget.classList.contains('active')) {
    return;
  }
  for (let link of links) {
    link.classList.remove('active');
  }
  event.currentTarget.classList.add('active');
  xhr.open('GET', event.currentTarget.getAttribute('href'));
}

// const onLoadStart = function() {
//   content.innerHTML = xhr.responseText;
// }

 function onLoad() {
  content.innerHTML = xhr.responseText;
    
}

const init = function() {
  // xhr.addEventListener('loadstart', onLoadStart);
  xhr.addEventListener('load', onLoad);
  xhr.open('GET', links[0].getAttribute('href'));
  xhr.send();
  for (let link of links) {
    link.addEventListener('click', activeTab);
  }

}


document.addEventListener('DOMContentLoaded', init);