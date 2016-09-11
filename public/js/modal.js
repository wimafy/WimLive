function profilemodalcall() {
    var modalbackground = document.getElementById("profilemodalbackground");
    var modal = document.getElementById("profilemodal");
 
    modalbackground.style.zIndex = "100";
    modal.style.zIndex = "100";
}

function profilemodalaway() {
    var modal = document.getElementById("profilemodal");
 
    modalbackground.style.zIndex = "-100";
    modal.style.zIndex = "-100";
}