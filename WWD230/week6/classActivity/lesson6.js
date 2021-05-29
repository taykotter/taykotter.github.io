function addFunction (num1, num2) {
    var num1 = parseInt(document.getElementById('num1').value);
    console.log(num1);
    var num2 = parseInt(document.getElementById('num2').value);
    var answer = num1 + num2;
    var error = "OverFlow!"
    if (answer > 10) {
        document.getElementbyId('answer').innerHTML = error;
    }
    else {
        document.getElementById('answer').innerHTML = answer;
    }

}
function subtractFunction (num1, num2) {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var answer = num1 - num2;
    document.getElementById('answer').innerHTML = answer;
}
