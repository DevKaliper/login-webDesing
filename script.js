const register = document.getElementById('register');
const sing_in = document.getElementById('sign_in');
const singin = document.getElementById('singin');

register.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
    document.getElementById("discover").classList.add("absolute");
   
});
sing_in.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
    document.getElementById("discover").classList.add("absolute");
    singin.classList.remove("invisible");
    singin.classList.remove("absolute");
});