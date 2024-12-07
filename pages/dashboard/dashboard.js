function logOut(){
    localStorage.removeItem("login");
    window.location.replace('../login/login.html');
}

function submitForm(e){
    e.preventDefault();

}