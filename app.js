// const arrow = document.querySelectorAll('.faq-items>div>nav i');
// const lowerpart = document.querySelector('.expand_part');
// const edge = document.querySelector('.faq-items>div>nav');

// arrow.forEach(function(yy,index) {
// 		yy.addEventListener("click", function(){
// 			console.log("mire o o shoqi");
// 			lowerpart.classList.toggle("show");
// 			arrow[index].classList.toggle("rotate");
// 			edge.classList.toggle("edge");
// 			lowerpart.classList.toggle("edge2");
// 		});
// });

const div = document.querySelectorAll('.faq-items>div');
const lowerpart = document.querySelector('.expand_part');
const edge = document.querySelector('.faq-items>div>nav');


div.forEach(function(yy,index){
	const a = yy.children[0];
	const b = a.children[0];
	const expand = yy.children[1];
	b.addEventListener("click", function(){
			console.log("mire o o shoqi");
			expand.classList.toggle("show");
			b.classList.toggle("rotate");
			b.style.transition = ' all 500ms linear';
			a.classList.toggle("edge");
			expand.classList.toggle("edge2");
	});
})

const hamburger = document.querySelector('.header_list i')
const pop = document.querySelector('.list_pop')
const x = document.querySelector('.list_pop i');
const a = document.querySelector('.list_pop ul');
const body = document.querySelector('body');

hamburger.addEventListener("click", function(){
	pop.style.width = '100%';
	pop.style.transition = ' width 1s linear';
	a.style.display='block';
	body.style.overflow='hidden';
});

x.addEventListener("click", function(){
	pop.style.width = '0';
	a.style.display='none';
	body.style.overflow='unset';
});

