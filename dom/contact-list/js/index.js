'use strict'
let randomVal = JSON.parse(loadContacts()).reduce((fullString, el) => {
	return fullString += `<li 
	 data-email = ${el.email}
	 data-phone = ${el.phone}>
	 <strong>${el.name}</strong>
	 </li>`;

}, ``);
document.querySelector('.contacts-list').innerHTML = randomVal;