const body = document.querySelector('body');
const btnBurger = document.querySelector('#btnBurger');
const header = document.querySelector('.header');
const overlay =document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".fade");


btnBurger.addEventListener('click', function(){
	console.log("click burger");

	if (header.classList.contains('open')) {
		header.classList.remove('open');
		body.classList.remove('noscroll');
		// overlay.classList.remove('fadeIn');
  //   	overlay.classList.add('fadeOut');

    	fadeElems.forEach(function(element){
    		element.classList.remove('fadeIn');
    		element.classList.add('fadeOut');

    	});
	}
	else{
		header.classList.add('open');
		body.classList.add('noscroll');
		// overlay.classList.add('fadeIn');
  //   	overlay.classList.remove('fadeOut');

    	fadeElems.forEach(function(element){
    		element.classList.add('fadeIn');
    		element.classList.remove('fadeOut');
    		 });
	}

});

 
