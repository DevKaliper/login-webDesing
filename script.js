const register = document.getElementById("register");
const sing_in = document.getElementById("sign_in");
const singin = document.getElementById("singin");
const singup = document.getElementById("singup");
const back = document.getElementById("back");
const img = document.querySelector("#img");
const prueb = document.querySelector("#prueb");
const registernow = document.getElementById("registernow");

const animationsToSingin = () => {
    let tl = gsap.timeline()
	tl.from(".show2", {
        duration: 2,
		scale: 0.5,
		opacity: 0,
		delay: 0.2,
		stagger: 0.2,
		ease: "elastic",
		force3D: true,
	});
    tl.to("#notmember", { duration: 1, text: "Not a member? ", ease: "none"});
    tl.to("#registernow", {duration: 1, text: " Register Now", ease: "none"});
};
const animationsToSingUp = () => {
    let tl = gsap.timeline()
	tl.from(".show3", {
        duration: 2,
		scale: 0.5,
		opacity: 0,
		delay: 0.2,
		stagger: 0.2,
		ease: "elastic",
		force3D: true,
	});
    
};



register.addEventListener("click", () => {
	document.getElementById("discover").classList.add("invisible");
	document.getElementById("discover").classList.add("absolute");
	singup.classList.remove("invisible");
	back.classList.remove("invisible");
	singup.classList.remove("absolute");
	
	
	prueb.classList.add("md:relative");
	prueb.classList.add("md:visible");
    animationsToSingUp();
});
sing_in.addEventListener("click", () => {
	document.getElementById("discover").classList.add("invisible");
	document.getElementById("discover").classList.add("absolute");
	singin.classList.remove("invisible");
	back.classList.remove("invisible");
	singin.classList.remove("absolute");
	img.classList.add("md:relative");
	img.classList.add("md:visible");
    animationsToSingin();
});

back.addEventListener("click", () => {
	document.getElementById("discover").classList.remove("invisible");
	document.getElementById("discover").classList.remove("absolute");
	singin.classList.add("invisible");
	singup.classList.add("invisible");
	back.classList.add("invisible");
	singin.classList.add("absolute");
	singup.classList.add("absolute");
	img.classList.remove("md:relative");
	img.classList.remove("md:visible");
    prueb.classList.remove("md:relative");
    prueb.classList.remove("md:visible");
});

registernow.addEventListener("click", () => {
    document.getElementById("discover").classList.remove("invisible");
	document.getElementById("discover").classList.remove("absolute");
	singin.classList.add("invisible");
    singin.classList.add("absolute");
    back.classList.add("invisible");
    img.classList.remove("md:relative");
	img.classList.remove("md:visible");

});


//animaciones
gsap.from(".show", {
	duration: 2,
	scale: 0.5,
	opacity: 0,
	delay: 0,
	stagger: 0.2,
	ease: "elastic",
	force3D: true,
});

