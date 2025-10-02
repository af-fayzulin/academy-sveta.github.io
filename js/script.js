let navbar=document.querySelector('.navbar');
scrollToTopBtn=document.querySelector('#scroll-to-top-btn');
/*
window.addEventListener('scroll',function(){
	//set  threshold value for vertical scroll bar position	
	const threshold=100;
	//get  current vertical scroll bar position
	scrollPosition=window.scrollY || this.window.pageYOffset;
	//if scrollPosition is greater then the threshold, then add a CSS class to the navbar
	if (scrollPosition>threshold) {
		navbar.classList.add('scrolled');
	} else {
		//if scrollPosition is less or equal the threshold, then remove a CSS class from the navbar
		navbar.classList.remove('scrolled');
	}		
});
*/
//add event listener to the window Object that listens  for the 'scroll' event

window.addEventListener('scroll',function(){
	//set  threshold value for vertical scroll bar position	
	const threshold=100;
	//get  current vertical scroll bar position
	scrollPosition=window.scrollY||this.window.pageYOffset;
	//if scrollPosition is greater then the threshold, then add a CSS class to the navbar
	if (scrollPosition>threshold) {
		scrollToTopBtn.classList.add('show');
	} else {
		//if scrollPosition is less or equal the threshold, then remove a CSS class from the navbar
		scrollToTopBtn.classList.remove('show');
	}		
});
//add event listener to the button that triggers the scroll
scrollToTopBtn.addEventListener('click',function(){
	//scroll to the top of the page using scrollTo() method
	window.scrollTo({
		top:0,			//set vertical scroll position to 0
		behavior: 'smooth'
	});			
});

