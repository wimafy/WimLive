function modalcall(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
 
    modalbackground.style.zIndex = "200";
    modal.style.zIndex = "200";
    modalbackground.style.left = "0vw";
    modal.style.left = "10vw";
}

function modalaway(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
    
    modalbackground.style.zIndex = "-100";
    modal.style.zIndex = "-100";
    modalbackground.style.left = "200vw";
    modal.style.left = "200vw";
}
