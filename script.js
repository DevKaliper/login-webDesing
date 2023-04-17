const register = document.getElementById('register');
const sing_in = document.getElementById('sign_in');

register.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
    document.getElementById("discover").classList.add("absolute");
   
});
sing_in.addEventListener('click', () => {
    document.getElementById("discover").classList.add("invisible");
});