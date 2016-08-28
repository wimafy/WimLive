function indexpagebuttonnotify() {
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    document.getElementById("indexpagebuttonpics1").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics12").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics21").style.color = "black";
    document.getElementById("indexpagebuttonpics22").style.color = "black";
    document.getElementById("indexpagebuttonpics31").style.color = "black";
    document.getElementById("indexpagebuttonpics32").style.color = "black";
    
}

function indexpagebuttoncurrentwims() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
     document.getElementById("indexpagebuttonpics1").style.color = "black";
    document.getElementById("indexpagebuttonpics12").style.color = "black";
    document.getElementById("indexpagebuttonpics21").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics22").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics31").style.color = "black";
    document.getElementById("indexpagebuttonpics32").style.color = "black";
}

function indexpagebuttonnewwim() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnewwim');
    
     document.getElementById("indexpagebuttonpics1").style.color = "black";
    document.getElementById("indexpagebuttonpics12").style.color = "black";
    document.getElementById("indexpagebuttonpics21").style.color = "black";
    document.getElementById("indexpagebuttonpics22").style.color = "black";
    document.getElementById("indexpagebuttonpics31").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics32").style.color = "#2196F3";
}