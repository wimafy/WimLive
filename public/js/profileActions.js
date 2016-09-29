function showFriendsTab() {
    //alert("firends");
    document.getElementById("pastwims").style.zIndex = "0";
    document.getElementById("friends").style.zIndex = "1";
    document.getElementById("info").style.zIndex = "0";
    document.getElementById("pastwims").style.opacity = "0";
    document.getElementById("friends").style.opacity = "10";
    document.getElementById("info").style.opacity = "0";
    document.getElementById("interestsID").style.color = "black";
    document.getElementById("friendsID").style.color = "#2196F3";
    document.getElementById("contactinfoID").style.color = "black";
    
}

function showPastwimsTab() {
    //alert("past wims");
    document.getElementById("pastwims").style.zIndex = "1";
    document.getElementById("friends").style.zIndex = "0";
    document.getElementById("info").style.zIndex = "0";
    document.getElementById("pastwims").style.opacity = "10";
    document.getElementById("friends").style.opacity = "0";
    document.getElementById("info").style.opacity = "0";
    document.getElementById("interestsID").style.color = "#2196F3";
    document.getElementById("friendsID").style.color = "black";
    document.getElementById("contactinfoID").style.color = "black";
}

function showUserinfoTab() {
	//alert("user info");
	document.getElementById("pastwims").style.zIndex = "0";
	document.getElementById("friends").style.zIndex = "0";
	document.getElementById("info").style.zIndex = "1";
	document.getElementById("pastwims").style.opacity = "0";
	document.getElementById("friends").style.opacity = "0";
	document.getElementById("info").style.opacity = "10";
    document.getElementById("interestsID").style.color = "black";
    document.getElementById("friendsID").style.color = "black";
    document.getElementById("contactinfoID").style.color = "#2196F3";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function profilepagedropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    console.log("click");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}