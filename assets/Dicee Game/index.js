
var rollButton = document.getElementById("rollButton");


rollButton.addEventListener("click", function() {

  var n = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;


  document.querySelectorAll(".dice1 > *").forEach(function(element) {
    element.style.backgroundColor = " rgb(255, 255, 255)";
  });
  document.querySelectorAll(".dice2 > *").forEach(function(element) {
    element.style.backgroundColor = " rgb(255, 255, 255)";
  });


  for (var i = 0; i < n; i++) {
    document.querySelector(".dice1").children[i].style.backgroundColor = " rgb(0, 0, 0)";
  }
  for (var j = 0; j < b; j++) {
    document.querySelector(".dice2").children[j].style.backgroundColor = " rgb(0, 0, 0)";
  }

  // Змінюємо текст переможця
  if (n > b) {
    document.querySelector(".wld").textContent = "Fisrt Player Win!!!";
  } else if (n < b) {
    document.querySelector(".wld").textContent = "Second Player Win!!!";
  } else {
    document.querySelector(".wld").textContent = "Draw";
  }
});
