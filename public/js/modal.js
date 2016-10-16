function profilemodalcall(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
 
    modalbackground.style.zIndex = "100";
    modal.style.zIndex = "100";
    modalbackground.style.left = "0";
    modal.style.left = "10";
}

function profilemodalaway(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
    
    modalbackground.style.zIndex = "-100";
    modal.style.zIndex = "-100";
    modalbackground.style.zIndex = "200";
    modal.style.zIndex = "200";
}
