function calculator() {
  let mat = parseInt(document.getElementById("math").value);
  let sci = parseInt(document.getElementById("science").value);
  let his = parseInt(document.getElementById("history").value);
  let com = parseInt(document.getElementById("computer").value);
  let eng = parseInt(document.getElementById("english").value);

  let Obtained_Marks = mat + sci + his + com + eng;
  let per = (Obtained_Marks * 100) / 500;

  document.getElementById("marks").innerHTML = Obtained_Marks;
  document.getElementById("percentage").innerHTML = per + "(%)";

  if (Obtained_Marks < 100) {
    document.getElementById("other").innerHTML = "Fail";
    document.getElementById("remarks").innerHTML = "Poor";
  } else {
    document.getElementById("other").innerHTML = "Pass";
    document.getElementById("remarks").innerHTML = "Good";
  }

  if (Obtained_Marks >= 450) {
    document.getElementById("grade").innerHTML = "A";
  } else if (Obtained_Marks >= 350) {
    document.getElementById("grade").innerHTML = "B";
  } else if (Obtained_Marks >= 250) {
    document.getElementById("grade").innerHTML = "C";
  } else {
    document.getElementById("grade").innerHTML = "D";
  }
}
function clearInput() {
  let getValue = document.getElementById("math");
  let getValue1 = document.getElementById("science");
  let getValue2 = document.getElementById("history");
  let getValue3 = document.getElementById("computer");
  let getValue4 = document.getElementById("english");

  if (getValue.value != "") {
    getValue.value = "";
  }
  if (getValue1.value != "") {
    getValue1.value = "";
  }
  if (getValue2.value != "") {
    getValue2.value = "";
  }
  if (getValue3.value != "") {
    getValue3.value = "";
  }
  if (getValue4.value != "") {
    getValue4.value = "";
  }
}
