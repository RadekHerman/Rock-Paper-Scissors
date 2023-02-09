// https://blog.webdevsimplified.com/2022-01/event-listeners/
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp


const scissors = document.querySelector('.scissors-old');

 scissors.addEventListener('click', (e) => {
	document.getElementById('old').src = "./scissors3.jpg";
});


scissors.removeEventListener("click", (e) => {
	document.getElementById('old').src = "./scissors4.jpg";
})


// button.addEventListener('click', (event) => {
 // button.textContent = `Click count: ${event.detail}`;
//});

//const button = document.querySelector('button');

// element.addEventListener("click", myFunction);
// element.addEventListener("click", mySecondFunction);