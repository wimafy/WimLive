function profilemodalcall(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
 
    modalbackground.style.zIndex = "100";
    modal.style.zIndex = "100";
}

function profilemodalaway(modalbackgroundid, modalid) {
    var modalbackground = document.getElementById(modalbackgroundid);
    var modal = document.getElementById(modalid);
    
    modalbackground.style.zIndex = "-100";
    modal.style.zIndex = "-100";
}