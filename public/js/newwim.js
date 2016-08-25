function showadvancedoptions() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimadvancedoptionsdiv").style.left = "0vw";
}

function hideadvancedoptions() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwimadvancedoptionsdiv").style.left = "120vw";

}


function showmapsearch() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimmapsearchdiv").style.left = "0vw";
    
    
}

function hidemapsearch() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwimmapsearchdiv").style.left = "120vw";
    
}


function showinvitefriends() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwiminvitefriendsdiv").style.left = "0vw";
    
}

function hideinvitefriends() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
    document.getElementById("newwiminvitefriendsdiv").style.left = "120vw";
    
}


function showwimwimtype() {
    document.getElementById("fullpage3newwim").style.zIndex = "49";
    document.getElementById("newwimwimtypediv").style.left = "0vw";
    
}

function hidewimwimtype() {
    document.getElementById("fullpage3newwim").style.zIndex = "100";
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

//new wim v2

function newwimadvanceslide(divID) {
    //document.getElementById(divID).style.left = "0vw";
    document.getElementById(divID).classList.add('pagetransitionIN');
    document.getElementById(divID).classList.remove('pagetransitionOUT');
}

function newwimbackslide(divID) {
    document.getElementById(divID).classList.remove('pagetransitionIN');
    document.getElementById(divID).classList.add('pagetransitionOUT');
    //document.getElementById(divID).style.left = "120vw";
}

