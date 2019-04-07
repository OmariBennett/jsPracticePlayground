'use strict';

const canvas = document.querySelector('.canvas'),
			canvasBtn = document.querySelector('.canvas__btn'),
			canvasFooter = document.querySelector('.canvas__footer');

let counter = 0;

const action = () => {
	if (counter === 0) {
		canvasFooter.innerHTML = 'traditionalism',
		canvasFooter.style.color = '#E55317';

		canvas.style.background = "url('../img/traditionalism.jpg/')",
		canvas.style.backgroundSize = 'cover';

		canvasBtn.innerHTML = 'minimalism';
		counter++;

	} else {
		canvasFooter.innerHTML = 'minimalism',
		canvasFooter.style.color = '#fff';

		canvas.style.background = "url('../img/africandesign.jpg/')",
		canvas.style.backgroundSize = 'cover';

		canvasBtn.innerHTML = 'traditionalism';
		counter--;
	}

	return counter;
}

canvasBtn.onclick = action;