function start_timer() {
    var my_var = setInterval(myTimer, 1000);
    
    function myTimer() {
        var d = new Date();
            var t = d.toLocaleTimeString();
            document.getElementById("my_timer").innerHTML = t;
    }
}

var my_ = setInterval(setColor, 1000);
function setColor(){
        if (document.body.style.backgroundColor == "green") {
            document.body.style.backgroundColor = "black";
        }
        else if (document.body.style.backgroundColor == "black") {
            document.body.style.backgroundColor = "blue";
        }
        else{
            document.body.style.backgroundColor = "green";    
        }
        }
function stopColor(){
    clearInterval(my_);
}
function myfct() {
    document.getElementById("d1").className = "newcls";
}

document.getElementById("mybtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

/* I. 7 - ravase*/
function newQuote() {

    var quotes = [
        'O sa treci si sesiunea asta!',
        'Atunci cand nu mai poti, gandeste-te ca vacanta este dupa colt!',
        'Chiar daca ai 10 proiecte de facut, gandeste-te la vacanta care vine.',
        'Nu lasa pe maine ce poti face azi. Lasa pe poimaine. Cand nu mai trebuie facut.',
        'Nu te gandi la restanta ca fiind un nou examen. Gandeste-te la ea ca la sansa de a mai invata ceva.',
        'Marti o sa te trezesti devreme. Nu stiu in care marti, dar o sa reusesti.',
        'Daca nu dormi noptile, iar inima te inteapa, inseamna ca sare de bucurie.',
        'Cafeaua nu se bea de placere, se bea ca sa traiesti in sesiune.',
        'Nu stii ce inseamna sa fii student daca nu ai mai putind e 24h sa inveti la o materie pe care ai si uitat ca o ai.',
        'Nu spune ca ai dormit 2h, spune ca doar 2h nu ai invatat.',
    ];

    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();

/*II. 2. - aparitie trepatta paragrafe */
var text = 'Atunci s-a intamplat un declic ... motanelul nostru proaspat adoptat fusese si el pe strada precum cei 4 pisoiasi din fata blocului ... nu am stat mult pe ganduri, i-am luat de acolo si le-am gasit familii, unul dintre ei ramanand la noi, iar pe pisica am sterilizat-o... bucurie mare ca scapasem de problema, doar ca socoteala de acasa nu se potriveste cu cea din targ. La scurt timp a aparut un alt pui si apoi altul si altul, apoi am descoperit cateii... Erau si ai nimanui... nici pe ei "nu-i mai vazusem" pana atunci.';
var text2 = 'Odata constientizata problema, durerea si suferinta lor, nu ne-am mai oprit, unul si inca unul... ajungand sa avem constant in grija in jur de 115 animalute cu eforturi, sacrificii, costuri lunare mult peste ce putem duce noi. O vorba spune ca inapoi nu te mai poti intoarce, deci mergem inainte, dar avem nevoie de sustinere ca sa putem continua misiunea. Orice donatie poate face la un moment dat diferenta intre viata si moartea. Fiti alaturi de noi, ajutati-ne pt a putea ajuta animalele nimanui.';
var myArray = text.split(' ');
var myArray2 = text2.split(' ');
var loopTimer;
function frameLooper() {
     if (myArray.length > 0)  {
         document.getElementById('d3').innerHTML += myArray.shift();
         document.getElementById('d3').innerHTML += ' ';
    } else if (myArray2.length < 0) {
            clearTimeout(loopTimer);
            return false;
        }

    if (myArray2.length > 0) {
        document.getElementById('d4').innerHTML += myArray2.shift();
        document.getElementById('d4').innerHTML += ' ';
    } 
     loopTimer = setTimeout('frameLooper()', 333);
}
frameLooper();

/**II 13 - nr de cuvinte din pagina */
function noOfWord() {
    var text = document.getElementById("bdy").textContent;
    var results = text.match(/\w+\s/g);
    var per = text.match(/\w+\.\s/g);
    var comma = text.match(/\w+\,\s/g);
    
    document.getElementById('count').innerHTML = results.length + per.length + comma.length;
}
noOfWord();

/*I. 7 - numaratoarea inversa*/
var countDownDate = new Date("June 30, 2020 15:37:25").getTime();

var x = setInterval (function () {
    // Ora si timpuld e azi
    var now = new Date().getTime();

    // Diferenta dintre data de azi si cea la care vreau sa ajung
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "TIMPUL A EXPIRAT";
    }
    
}, 1000);

