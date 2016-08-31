function indexpagebuttonnotify() {
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    
    
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition3');
    
    
    
    
    
    document.getElementById("indexpagebuttonpics1").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics12").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics2").style.color = "black";
    document.getElementById("indexpagebuttonpics22").style.color = "black";
    document.getElementById("indexpagebuttonpics3").style.color = "black";
    document.getElementById("indexpagebuttonpics32").style.color = "black";
    
    
}

function indexpagebuttoncurrentwims() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    
    
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition3');
    
    
    
     document.getElementById("indexpagebuttonpics1").style.color = "black";
    document.getElementById("indexpagebuttonpics12").style.color = "black";
    document.getElementById("indexpagebuttonpics2").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics22").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics3").style.color = "black";
    document.getElementById("indexpagebuttonpics32").style.color = "black";
}

function indexpagebuttonnewwim() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnewwim');
    
    
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition3');
    
     document.getElementById("indexpagebuttonpics1").style.color = "black";
    document.getElementById("indexpagebuttonpics12").style.color = "black";
    document.getElementById("indexpagebuttonpics2").style.color = "black";
    document.getElementById("indexpagebuttonpics22").style.color = "black";
    document.getElementById("indexpagebuttonpics3").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics32").style.color = "#2196F3";
}