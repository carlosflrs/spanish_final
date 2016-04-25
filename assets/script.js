var index = 0;
var startTop = 0;
var startLeft = 0;

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
    if (startTop > 550) {
        i = index;
        clear();
        index = i;
    }
    if (index < names.length) {
        ran = getRandomInt(0, 2);
        ran1 = getRandomInt(0, 6);
        var obj = {name: names[index], text:texts[index]}
        if (ran == 0 && index != 0 && index != 1) {
            addRandomObject(obj);
        } else {
            addObject(obj);
            startTop += 40;
        }
        index += 1
        if (ran1 == )0 {
            distract();
        }
    }
    if (index >= names.length) {
        index = 0;
    }
    
}

function removeText() {
    if (index >= 1) {
        index = index - 1;
        divName = names[index];
        $("#" + divName).remove();
        startTop -= 40;
    }
}

function addObject(obj) {
    var name = obj.name;
    var text = obj.text;
    var t = startTop;
    var l = startLeft;
    var cr = Please.make_color();
    $("#text-box").append("<div id=" + name + ">" + text + "</div>");
    $("#" + name).css({"margin-top":t, "margin-left":l, position:"absolute"});
}

function addRandomObject(obj) {
    var name = obj.name;
    var text = obj.text;
    var t = getRandomInt(0, 500);
    var l = getRandomInt(0, 500);
    var cr = Please.make_color();
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
    colors = ["rgba(64, 153, 255, 0.7)", "rgba(59, 89, 152, 0.7)", "rgba(187, 0, 0, 0.7)", "rgba(18, 86, 136, 0.7)", "rgba(77, 194, 71, 0.7)", "rgba(255, 252, 0, 0.7)", "rgba(0, 191, 143, 0.7)"];
    ran = getRandomInt(0, 6);
    c = colors[ran];
    $("#ex").css({"background-color":c});
    $("#ex").show();
    $(".buttons").hide();
    
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = main;
