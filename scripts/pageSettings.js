
// cancel scrolling with keyboard
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);



// handle move between pages
$(document).ready(function() {
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "none";
    document.getElementById('game').style.display = "none";
    document.getElementById('settings').style.display = "none";
});

function SetActiveDiv(el) {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "none";
    document.getElementById('game').style.display = "none";
    document.getElementById('settings').style.display = "none";

    document.getElementById(el).style.display = "block";
}


$(document).ready(function() {

    $("#play").click(function(){
        let tSet = $( "#setTm" ).val();
        if(tSet<120){
            alert("Time must be at least 120 seconds");
            return;
        }

        let a = document.getElementById("LeftKey").value;
        let b = document.getElementById("UpKey").value;
        let c = document.getElementById("RightKey").value;
        let d = document.getElementById("DownKey").value;
        let e = document.getElementById("ShootKey").value;


        if(a==b || a==c || a==d || b==c || b==d || c==d || a==e || b==e || c==e|| d==e || a==" " || b==" " || c==" " || d==" " || e=='' ){
            alert("Keyboard setting need to be different from each other, cant use space and can't leave blank");
            return;
        }

        document.getElementById('playA').style.visibility = "hidden";
		document.getElementById('playA').disabled = true;
        SetActiveDiv('game');
        synchronizeSettings();
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return ""+Math.floor(Math.random() * (max - min) + min);
}

// update other settings window
function synchronizeSettings(){
    var Time=document.getElementById("setTm");
    document.getElementById("setTm2").value=Time.value;
    document.getElementById("UpKey2").value = document.getElementById("UpKey").value;
    document.getElementById("DownKey2").value = document.getElementById("DownKey").value;
    document.getElementById("LeftKey2").value = document.getElementById("LeftKey").value;
    document.getElementById("RightKey2").value = document.getElementById("RightKey").value;
    document.getElementById("ShootKey2").value = document.getElementById("ShootKey").value;

}

// handle about pop up
function popUp() { 
    document.getElementById("myDialog").showModal(); 
} 

function closePopUp() { 
    document.getElementById("myDialog").close(); 
}

$(document).ready(function() {
    $("#myDialog").click(function(e) {
        if (e.target.classList.contains("dialogComponent")){
            document.getElementById("myDialog").close(); 
        }
    });
});

// change game keyboard
$(document).ready(function() {
    $("#UpKey").keydown(function(event){
        changeKey("UpKey", event.keyCode);
    });
    $("#DownKey").keydown(function(event){
        changeKey("DownKey", event.keyCode);
    });
    $("#LeftKey").keydown(function(event){
        changeKey("LeftKey", event.keyCode);
    });
    $("#RightKey").keydown(function(event){
        changeKey("RightKey", event.keyCode);
    });
    $("#ShootKey").keydown(function(event){
        changeKey("ShootKey", event.keyCode);
    }); 
});

function changeKey(id, key){
    if(!key)
        key = String.fromCharCode(32);
    else if(key == 37) 
        key = "Left";
    else if(key == 38) 
        key = "Up";
    else if(key == 39) 
        key = "Right";
    else if(key == 40) 
        key = "Down";
    else if(key == 41) 
        key = "Space";

    else
        key = String.fromCharCode(key);
    
    document.getElementById(id).value = key;
}


window.addEventListener("load", ()=>{
    // Get the scores element
    var HS = document.getElementById("highScores");
    
    // Get the close button element
    var closeSettingsBtn = document.getElementsByClassName("close-highScores")[0];
    
    // When the user clicks on the close button, close the HS
    closeSettingsBtn.onclick = function() {
        HS.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the settings, close it
    window.addEventListener("click",function(event) {
        if (event.target == HS) {
            HS.style.display = "none";
        }
    })
    
    // When the user presses the Escape key, close the settings
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            HS.style.display = "none";
        }
    });
    },false)