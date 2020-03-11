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
			a.classList.toggle("edge");
			expand.classList.toggle("edge2");
	});
})