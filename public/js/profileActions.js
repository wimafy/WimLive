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