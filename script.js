var input = "";

function keypadInput(x) {
    input += x;
    document.getElementById("input").innerHTML = input;
}

function clearWindow() {
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    input = "";
}

function deleteLast() {
    input = input.slice(0, -1);
    document.getElementById("input").innerHTML = input;
}

function equals() {
    input = input.replace(/÷/g, "/")
    input = input.replace(/×/g, "*")
    input = input.replace(/−/g, "-")
    input = eval(input);

    document.getElementById("result").innerHTML = "=" + eval(input);
}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    var element = document.querySelector('[accesskey="' + key + '"]');
    if (element) {
      element.click();
      event.preventDefault();
    }
  });
  
  