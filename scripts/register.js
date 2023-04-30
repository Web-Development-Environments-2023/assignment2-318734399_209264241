


$(document).ready(function() {
    // adding default user
	sessionStorage.setItem("p", "testuser");

    $("#registerButton").click(function(){
        let username = $( "#userRegister" ).val();
        let password = $( "#passRegister" ).val();
        let passwordGood = $( "#passRegisterGood" ).val();
        let firstName = $( "#firstNameRegister" ).val();
        let lasttName = $( "#lastNameRegister" ).val();
        let email = $( "#emailRegister" ).val();
        let flag = false;
    
        // check if have empty field
        flag = username=="" || password=="" || passwordGood=="" || firstName=="" || lasttName=="" || email=="";
        if(flag){
            alert("One of the field are empty");
            return;
        }
    
        // check password
        flag = password.length < 8;
        if(password.match(/[a-zA-Z]/) == null || password.match(/[0-9]/) == null || flag){
            alert("Password not strong enough - must be at least size of 8 with letters and numbers");
            return;
        }
        if(password != passwordGood ){
            alert("Passwords not matched");
            return;
        }
        // check full name
        if(firstName.match(/[0-9]/) != null){
            alert("First name can not have numbers");
            return;
        }
        if(lasttName.match(/[0-9]/) != null){
            alert("Last name can not have numbers");
            return;
        }
    
        // check email
        if(email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/) == null){
            alert("Email not valid");
            return;
        }
        
        sessionStorage.setItem(username, password);
        SetActiveDiv('login');
    });

    $("#loginButton").click(function(){
        let username = $( "#userLogin" ).val();
        let password = $( "#passLogin" ).val();
        db_password = sessionStorage.getItem(username);
    
        if(password != db_password){
            alert("not exist user / wrong password");
            return;
        }
        document.getElementById('mytextarea').innerHTML =username;
        SetActiveDiv('settings');
    });

});