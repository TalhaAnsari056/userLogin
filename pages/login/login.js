
function checkEmail() {
    
    var useremail = document.getElementById("email");
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!useremail.value.match(regex)) {
        // emailSp.innerText = "Invalid Email";
        useremail.nextElementSibling.innerText ="enter correct Email";
        useremail.nextElementSibling.style.display = 'block' ;
        return;

    }
    if (useremail.value.match(regex)) {
        useremail.nextElementSibling.style.display = 'none' ;
    }
}
function checkPass() {

    var password = document.getElementById('password');
    if (password.value.length < 5) {
        password.nextElementSibling.innerText = ' password at least of 5 chars'
        password.nextElementSibling.style.display = 'block'
        return;
    }
    password.nextElementSibling.style.display = 'none'
}

var usersData = JSON.parse(localStorage.getItem('users'));


function searchData(user) {
  for (let i = 0; i < usersData.length; i++) {
    if(user.password === usersData[i].password && user.email === usersData[i].email){
      return usersData[i];
    }
  }
  console.log("hii")
}

function submitForm(e){
  e.preventDefault();
  var passValue = document.getElementById("password").value;
  var emailValue = document.getElementById("email").value;

  var isLogin = searchData({password: passValue,email: emailValue,})
  if(isLogin){
    console.log(isLogin)
    localStorage.setItem('login',JSON.stringify(isLogin));
    window.location.replace('../dashboard/dashboard.html')
  }

  
}
