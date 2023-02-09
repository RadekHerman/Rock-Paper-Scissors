
const scissors = document.querySelector('.scissors-old');


function firstF() {
	scissors.getElementById('old').src = "./scissors3.jpg";
};

function secondF() {
	scissors.getElementById('old').src = "./scissors4.jpg";
};


scissors.addEventListener('click', firstF)

// scissors.removeEventListener("click", (e) => {
 // document.getElementById('old').src = "./scissors3.jpg";
// })
