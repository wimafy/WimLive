function showadvancedoptions() {
    document.getElementById("newwimadvancedoptionsdiv").style.left = "0vw";
}

function hideadvancedoptions() {
    document.getElementById("newwimadvancedoptionsdiv").style.left = "120vw";
}


function showmapsearch() {
    document.getElementById("newwimmapsearchdiv").style.left = "0vw";
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    
}

function hidemapsearch() {
    document.getElementById("newwimmapsearchdiv").style.left = "120vw";
    document.getElementById("fullpage3newwim").style.zIndex = "100";
}


function showinvitefriends() {
    document.getElementById("newwiminvitefriendsdiv").style.left = "0vw";
}

function hideinvitefriends() {
    document.getElementById("newwiminvitefriendsdiv").style.left = "120vw";
}


function showwimwimtype() {
    document.getElementById("newwimwimtypediv").style.left = "0vw";
}

function hidewimwimtype() {
    document.getElementById("newwimwimtypediv").style.left = "120vw";
}


function newwimselectfriend(friendID) {
    //alert(friendID);
    var selectedID = "select" + friendID;
    var selecteddiv = document.getElementById(selectedID);
    if(document.getElementById(selectedID).style.opacity  == 1){
        document.getElementById(selectedID).style.opacity = "0";
    }else{
        document.getElementById(selectedID).style.opacity = "1";
    }
    
    
}


function newwimwimtype(wimtypeID) {
    //alert(friendID);
    var selectedID = "select" + wimtypeID;
    var selecteddiv = document.getElementById(selectedID);
    if(document.getElementById(selectedID).style.opacity  == 1){
        document.getElementById(selectedID).style.opacity = "0";
    }else{
        document.getElementById(selectedID).style.opacity = "1";
    }
    
    
}

