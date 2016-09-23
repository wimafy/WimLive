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


console.log("hellos");

// try to hide the first option
$('option.hide').hide();

// to select the first visible option
$('option:visible').first().attr('selected', 'selected');

function signupgenderselect(gender, oppositeGender) {
    console.log(gender);
    document.getElementById(gender).checked = true;
    document.getElementById(oppositeGender).checked = false;
}