function indexpagebuttonnotify() {
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    
    
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition4');
    
    
    
    
    
    document.getElementById("indexpagebuttonpics1").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics12").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics2").style.color = "#757575";
    document.getElementById("indexpagebuttonpics22").style.color = "#757575";
    document.getElementById("indexpagebuttonpics3").style.color = "#757575";
    document.getElementById("indexpagebuttonpics32").style.color = "#757575";
    document.getElementById("indexpagebuttonpics4").style.color = "#757575";
    document.getElementById("indexpagebuttonpics42").style.color = "#757575";
    
    
}

function indexpagebuttoncurrentwims() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    
    
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition4');
    
    
    
     document.getElementById("indexpagebuttonpics1").style.color = "#757575";
    document.getElementById("indexpagebuttonpics12").style.color = "#757575";
    document.getElementById("indexpagebuttonpics2").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics22").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics3").style.color = "#757575";
    document.getElementById("indexpagebuttonpics32").style.color = "#757575";
    document.getElementById("indexpagebuttonpics4").style.color = "#757575";
    document.getElementById("indexpagebuttonpics42").style.color = "#757575";
}


function indexpagebuttonsearch() {
    alert("wee");
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnewwim');
    
    
    
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition4');
    
    
    
     document.getElementById("indexpagebuttonpics1").style.color = "#757575";
    document.getElementById("indexpagebuttonpics12").style.color = "#757575";
    document.getElementById("indexpagebuttonpics2").style.color = "#757575";
    document.getElementById("indexpagebuttonpics22").style.color = "#757575";
    document.getElementById("indexpagebuttonpics3").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics32").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics4").style.color = "#757575";
    document.getElementById("indexpagebuttonpics42").style.color = "#757575";
}


//indexpagebuttonhighlightertransitionsearch
//indexpagebottompagesliderdivposition4



function indexpagebuttonnewwim() {
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitionnotify');
    document.getElementById("indexpagebuttonhighligher").classList.remove('indexpagebuttonhighlightertransitioncurrentwims');
    document.getElementById("indexpagebuttonhighligher").classList.add('indexpagebuttonhighlightertransitionnewwim');
    
    
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition1');
    document.getElementById("indexpagebottomdivid").classList.remove('indexpagebottompagesliderdivposition2');
    document.getElementById("indexpagebottomdivid").classList.add('indexpagebottompagesliderdivposition4');
    
     document.getElementById("indexpagebuttonpics1").style.color = "#757575";
    document.getElementById("indexpagebuttonpics12").style.color = "#757575";
    document.getElementById("indexpagebuttonpics2").style.color = "#757575";
    document.getElementById("indexpagebuttonpics22").style.color = "#757575";
    document.getElementById("indexpagebuttonpics3").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics32").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics4").style.color = "#2196F3";
    document.getElementById("indexpagebuttonpics42").style.color = "#2196F3";
}