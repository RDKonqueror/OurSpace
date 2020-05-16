// FUNCTION FOR LOGIN ANIMATION

function btn() {
    var x = document.getElementById("field1");
    var y = document.getElementById("field2");
    var z = document.getElementById('pwd');
    var a = document.getElementById('alert') // #ALERT PARAGRAPH

    // IF INPUT HAS VALUE THEN FIRE THE ANIMATION AND REDIRECTION
    // IF INPUT HAS NO VALUE THEN DISPLAY id="alert"
    if(z && z.value) {
        x.style.display = "none";
        y.style.display = "block";
        setTimeout('window.location = "user-seven.html";', 5000);  // REDIRECTION
    } else {
        a.style.display = "block";
    }
}


// TAB FUNCTION FOR SIDE NAVIGATION

function openContent(evt, contentName) {
    var i, navcontent, navitem;
    navcontent = document.getElementsByClassName("navcontent");

    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }

    navitem = document.getElementsByClassName("navitem");

    for (i = 0; i < navitem.length; i++) {
        navitem[i].className = navitem[i].className.replace(" active", "");
    }

      document.getElementById(contentName).style.display = "block";
      evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// FUNCTIONS FOR CREATE NEW NOTE

function openForm() {
    document.getElementById("regform").style.display = "block";
}

function closeForm() {
    document.getElementById("regform").style.display = "none";
}


// DROPDOWN FUNCTION FOR START NEW CHAT

function composeTo() {
    var x = document.getElementById("dropdwn");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

} 


// FUNCTION FOR SIGNOUT ANIMATION

function signOut() {
    var x = document.getElementById("sec");
    var y = document.getElementById("field3");

    x.style.display = "none";
    y.style.display = "block";
    setTimeout('window.location = "accounts.html";', 4000);  // REDIRECTION

}


