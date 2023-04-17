const register = document.getElementById('register');
const sing_in = document.getElementById('sign_in');
const singin = document.getElementById('singin');
const singup = document.getElementById('singup');
const back = document.getElementById('back');

register.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
    document.getElementById("discover").classList.add("absolute");
    singup.classList.remove("invisible");
    back.classList.remove("invisible");
    singup.classList.remove("absolute");
   
});
sing_in.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
    document.getElementById("discover").classList.add("absolute");
    singin.classList.remove("invisible");
    back.classList.remove("invisible");
    singin.classList.remove("absolute");
});

back.addEventListener('click', () => {
    document.getElementById("discover").classList.remove("invisible");
    document.getElementById("discover").classList.remove("absolute");
    singin.classList.add("invisible");
    singup.classList.add("invisible");
    back.classList.add("invisible");
    singin.classList.add("absolute");
    singup.classList.add("absolute");
}  );