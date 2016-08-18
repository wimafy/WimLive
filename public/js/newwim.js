function showadvancedoptions() {
    document.getElementById("newwimadvancedoptionsdiv").style.left = "0vw";
}

function hideadvancedoptions() {
    document.getElementById("newwimadvancedoptionsdiv").style.left = "100vw";
}


function showmapsearch() {
    document.getElementById("newwimmapsearchdiv").style.left = "0vw";
}

function hidemapsearch() {
    document.getElementById("newwimmapsearchdiv").style.left = "100vw";
}


function showinvitefriends() {
    document.getElementById("newwiminvitefriendsdiv").style.left = "0vw";
}

function hideinvitefriends() {
    document.getElementById("newwiminvitefriendsdiv").style.left = "100vw";
}


function newwimselectfriend(friendID) {
    //alert(friendID);
    var selectedID = "select" + friendID;
    var selecteddiv = document.getElementById(selectedID);
    if(document.getElementById(selectedID).style.opacity  == 1){
        alert("woo");
        document.getElementById(selectedID).style.opacity = "0";
    }else{
        alert("blah");
    }
    
    
}

