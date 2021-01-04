var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', validation);
  /* I. ex 2 - implementarea de regexuri */
  function validation(event) {

  event.preventDefault();
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var cpass = document.getElementById('cpass').value;
  var birth = document.getElementById('birth').value;

  var nameCheck = /^[A-Z]{1}[a-z ]{2,30}$/
  var surnameCheck = /^[A-Z]{1}[a-z ]{2,30}$/
  var numberCheck = /^[+4]*[07]{2}[0-9]{8}$/
  var emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,10}[.]*[A-Za-z. ]*$/
  var passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

  if (nameCheck.test(name)) {
    document.getElementById('errorName').innerHTML = " ";
  } else {
    document.getElementById('errorName').innerHTML = "** Nume invalid **";
    alert('Numele trebuie sa fie format doar din litere, iar prima sa fie majuscula.');
    return false;
  }

  if (surnameCheck.test(surname)) {
    document.getElementById('errorSurname').innerHTML = " ";
  } else {
    document.getElementById('errorSurname').innerHTML = "** Prenume invalid **";
    alert('Prenumele trebuie sa fie format doar din litere, iar prima sa fie majuscula.');
    return false;
  }

  if (numberCheck.test(number)) {
    document.getElementById('errorNumber').innerHTML = " ";
  } else {
    document.getElementById('errorNumber').innerHTML = "** Numar invalid **";
    alert("Numarul de teleon incepe doar cu '+407' sau '07' si are 10 cifre.")
    return false;
  }

  if (emailCheck.test(email)) {
    document.getElementById('errorEmail').innerHTML = " ";
  } else {
    document.getElementById('errorEmail').innerHTML = "** Email invalid **";
    return false;
  }

  if (passCheck.test(pass)) {
    document.getElementById('errorPass').innerHTML = " ";
  } else {
    document.getElementById('errorPass').innerHTML = "** Parola invalida **";
    alert('Parola trebuie sa contina si caractere speciale, iar lungimea sa sa depaseasca 8 carcatere.');
    return false;
  }

  if(pass.match(cpass)) {
    document.getElementById('errorPassc').innerHTML = " ";
  } else {
    document.getElementById('errorPassc').innerHTML = "** Parolele nu se potrivesc **";
    alert('Parolele trebuie sa coincida')
    return false;
  }
/*II. 1 - varsta utilizator */
  var birth2;
  birth2 = convertDate(birth);
  var birthAge = getAge(birth2);
    document.getElementById('displayDob').innerHTML = birthAge;

}


function getAge(dateString) {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var miliseconds = now.getMilliseconds();

  var hourString=""
  var minuteString = ""
  var secondString = "";
  var milisecondString = "";

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    if ( (monthAge == 1 ) || (monthAge == 3) || (monthAge == 5) || (monthAge == 7) || (monthAge == 8) || (monthAge == 10) || (monthAge == 12))
      var dateAge = 31 + dateNow - dateDob;
      else if (monthAge == 2) 
      var dateAge = 29 + dateNow - dateDob;
      else dateAge = 30 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " ani";
  else yearString = " an";
  if ( age.months> 1 ) monthString = " luni";
  else monthString = " luna";
  if ( age.days > 1 ) dayString = " zile";
  else dayString = " zi";

  if (hours > 1) hourString = " ore";
  else hourString = " ora";
  if (minutes > 1) minuteString = " minute";
  else minuteString = " minut";
  if (seconds > 1) secondString = " secunde";
  else secondString = " secunda";
  if (miliseconds > 1) milisecondString = " minisecunde";
  else milisecondString = " minisecunda";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", " + age.days + dayString + ", " + hours + hourString + ", " +  minutes + minuteString + ", " + seconds + secondString + " si " +  miliseconds + milisecondString;
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Doar " + age.days + dayString + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString  + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString +  ", " + age.days + dayString + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString  + age.days + dayString + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString + ", " + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;
  else ageString = "0 ani!!!" + hours + hourString + ", " + minutes + minuteString + ", " + seconds + secondString + " si " + miliseconds + milisecondString;

  return ageString;
}


function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}  


function noOfWord() {
  var text = document.getElementById("bdy").textContent;
  var results = text.match(/\w+\s/g);
  var question = text.match(/\w+\?\s/g);
  var per = text.match(/\w+\:\s/g);
  var comma = text.match(/\w+\,\s/g);

  console.log(results.length + question.length + per.length + comma.length);
  var res = results.length + question.length + per.length + comma.length;
  document.getElementById('count').innerHTML = res;
}
noOfWord();





  


  