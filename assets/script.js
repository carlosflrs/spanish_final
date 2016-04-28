var index = 0;
var startTop = 0;
var lastAdd = [0,0];

var names = [];
var texts = [];

function main() {
    $("#start").click(function() {});
    $("#start").click(function() {
        $(".intro").animate({
            opacity: 0
        }, 600, function(){
            $(".intro").hide();
        });
    });
    $("#adelante").click(function() {addText()});
    $("#atras").click(function() {removeText()});
    $("#clear").click(function() {clear()});
    $("#exx").click(function(x) {$("#ex").hide(); $(".buttons").show();});
    $("#ex").hide();
    
    for (i=0; i < file.length; i++) {
        names.push("p" + i);
        texts.push(file[i]);
    }
}

function addText() {
    if (startTop > 500) {
        i = index;
        clear();
        index = i;
    }
    if (index >= names.length) {
        index = 0;
    }
    if (index == 0) {
        startTop = 0;
    }
    ran = getRandomInt(0, 3);
    ran1 = getRandomInt(0, 5);
    var obj = {name: names[index], text:texts[index]}
    if (ran == 0 && index != 0 && index != 1) {
        randomCount += 1;
        addRandomObject(obj);
    } else {
        addObject(obj);
        randomCount = 0;
    }
    index += 1
    if (ran1 == 1 && ran != 0 && ran != 1) {
        distract();
    }
}

function removeText() {
    if (index >= 1) {
        index = index - 1;
        divName = names[index];
        $("#" + divName).remove();
        if (randomCount == 0) {
            startTop -= 30;
        } else {
            randomCount -= 1;
        }
    }
}

function addObject(obj) {
    var name = obj.name;
    var text = obj.text;
    $("#text-box").append("<div id=" + name + ">" + text + "</div>");
    $("#" + name).css({"margin-top":startTop, "margin-left":0, position:"absolute"});
    startTop += 50;
}

function addRandomObject(obj) {
    var name = obj.name;
    var text = obj.text;
    var t = getRandomInt(0, 500);
    var l = getRandomInt(0, 500);
    colors = ["rgba(64, 153, 255, 1)", "rgba(59, 89, 152, 1)", "rgba(187, 0, 0, 1)", "rgba(18, 86, 136, 1)", "rgba(77, 194, 71, 1)", "rgba(255, 252, 0, 1)", "rgba(0, 191, 143, 1)"];
    ran = getRandomInt(0, 6);
    var cr = colors[ran];
    $("#text-box").append("<div id=" + name + ">" + text + "</div>");
    $("#" + name).css({"margin-top":t, "margin-left":l, position:"absolute", color:cr});
}

function clear() {
    var myNode = document.getElementById("text-box");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }   
    index = 0;
    startTop = 0;
}

function distract() {
    culpables = ["your friends", "your girlfriend", "your boyfriend", "your mom", "your dad", "your brother", "your sister", "you", "us", "your goals"];
    colors = ["rgba(64, 153, 255, 0.7)", "rgba(59, 89, 152, 0.7)", "rgba(187, 0, 0, 0.7)", "rgba(18, 86, 136, 0.7)", "rgba(77, 194, 71, 0.7)", "rgba(255, 252, 0, 0.7)", "rgba(0, 191, 143, 0.7)"];
    ran = getRandomInt(0, 6);
    c = colors[ran];
    ran = getRandomInt(0, 10);
    $("#sponsored").text (function () {
        return "Sponsored by " + culpables[ran] + ".";
    });
    $("#ex").css({"background-color":c});
    $("#ex").show();
    $(".buttons").hide();
    
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

window.onload = main;
