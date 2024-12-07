function inputValid() {
    var username = document.getElementById('username');
    if (username.value.length < 3) {
        username.nextElementSibling.innerText = 'atleast 3 char required'
        username.nextElementSibling.style.display = 'block'
        return;
    }
    username.nextElementSibling.style.display = 'none';

}
function checkPass() {

    var password = document.getElementById('password');
    if (password.value.length < 5) {
        password.nextElementSibling.innerText = ' password should be of 5 chars'
        password.nextElementSibling.style.display = 'block'
        return;
    }
    password.nextElementSibling.style.display = 'none'
}

function checkEmail() {
    
    var useremail = document.getElementById("email");
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!useremail.value.match(regex)) {
        // emailSp.innerText = "Invalid Email";
        useremail.nextElementSibling.innerText ="Invalid Email";
        useremail.nextElementSibling.style.display = 'block' ;
        return;

    }
    if (useremail.value.match(regex)) {
        useremail.nextElementSibling.style.display = 'none' ;
    }
}

    var isLogin = JSON.parse(localStorage.getItem("login"));
    console.log(isLogin)
    if (isLogin) {
        window.location.replace('./pages/dashboard/dashboard.html');

    }


    var url = window.location.href
    console.log(window.location.hostname)

    // window.location.replace("https://www.google.com") ;


    function getData() {
        return JSON.parse(localStorage.getItem('users'))
    }
    function setData(data) {
        localStorage.setItem('users', JSON.stringify(data))
    }

    var users = (getData()) ? [...getData()] : [];

    // function emialCheck(){
    //    for(let i = 0 ;i < users.length; i++){
    //    if( users[i].email === emailInp){
    //      alert("This Email is already taken !");
    //      console.log("Already taken Email:", emailInp);
    //      return;
    //    }
    //    }
    // }


    function submitForm(e) {
        e.preventDefault();
        // emialCheck();


        var emailInp = document.getElementById('email').value;
        var usernameInp = document.getElementById('username').value;
        var passwordInp = document.getElementById('password').value;



        users = [...users,
        {
            username: usernameInp,
            password: passwordInp,
            email: emailInp,

        }]
        setData(users);
        console.log(users);




    }
