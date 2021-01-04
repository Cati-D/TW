function f1() {
    
    var numbers =  [0, 7, 6, 5, 4, 3, 2, 1, 0];
    numbers.forEach(myFunction);
    var txt = "";
    numbers.forEach(myFunction);
    
    document.getElementById("apel").innerHTML = txt;
    
    function myFunction(value, index, array) {
    txt = txt + value;
}
}

function f2() {
    var x = "Adopta un prieten!";
    document.getElementById("stii").style.fontSize = "90px";
    document.getElementById("stii").innerHTML = x;
    
}

function f4() {
    var x = "Adopta un prieten!";
    var res = x.slice(0,6);
    document.getElementById("stii1").innerHTML = res;
    document.getElementById("stii1").style.fontSize = "70px";
}

function f3() {
    var x = document.createElement("img");
    x.src = "Poze/despre.jpg";
    document.body.appendChild(x);
    x.style.width = "10%";
    x.style.hight = "10%";
    x.onclick = function () {
        x.remove();
    }
    
}

function noOfWord() {
    var text = document.getElementById("bdy").textContent;
    var results = text.match(/\w+\s/g);
    var question = text.match(/\w+\?\s/g);
    var per = text.match(/\w+\:\s/g);
    var peri = text.match(/\w+\.\s/g);
    var comma = text.match(/\w+\,\s/g);

    console.log(results.length + question.length + per.length + comma.length + peri.length);
    var res = results.length + question.length + per.length + comma.length + peri.length;
    document.getElementById('count').innerHTML = res;
}
noOfWord();


