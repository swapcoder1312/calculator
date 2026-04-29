function getNumbers(){
  var a = parseFloat(document.getElementById("fno").value);
  var b = parseFloat(document.getElementById("sno").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter numbers first.");
    return null;
  }

  return { a: a, b: b };
}

function showResult(value){
  document.getElementById("res").value = value;
}

function sum(){
  var numbers = getNumbers();
  if (numbers) {
    showResult(numbers.a + numbers.b);
  }
}

function sub(){
  var numbers = getNumbers();
  if (numbers) {
    showResult(numbers.a - numbers.b);
  }
}

function mul(){
  var numbers = getNumbers();
  if (numbers) {
    showResult(numbers.a * numbers.b);
  }
}

function divide(){
  var numbers = getNumbers();
  if (!numbers) {
    return;
  }

  if (numbers.b === 0) {
    alert("Cannot divide by zero.");
    return;
  }

  showResult(numbers.a / numbers.b);
}

function mod(){
  var numbers = getNumbers();
  if (!numbers) {
    return;
  }

  if (numbers.b === 0) {
    alert("Cannot divide by zero.");
    return;
  }

  showResult(numbers.a % numbers.b);
}

function reset(){
  document.getElementById("fno").value = "";
  document.getElementById("sno").value = "";
  document.getElementById("res").value = "";
}
