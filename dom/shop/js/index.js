'use strict'
let counterBtn = document.getElementById('cart-count');
let sumCount = document.getElementById('cart-total-price');
let result = 0;

const sumCost = function(event){
	counterBtn.innerHTML = getPriceFormatted(parseInt(counterBtn.innerHTML) + 1);
	result += event.target.dataset.price * 1;
	sumCount.innerHTML = getPriceFormatted(result);
}

const init = function(){
	const btns = document.getElementsByClassName('add');
	for (let btn of btns) {
		btn.addEventListener('click', sumCost);
	}
}

document.addEventListener('DOMContentLoaded', init);