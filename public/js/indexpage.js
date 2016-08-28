function indexpagebuttonnotify() {
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
}

function indexpagebuttoncurrentwims() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
}

function indexpagebuttonnewwim() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnewwim');
}