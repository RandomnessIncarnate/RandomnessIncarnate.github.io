function show() {
  var i;
  var test = document.getElementsByClassName("test");
  for (i = 0; i < test.length; i++) {
    test[i].style.display = "block";
  }
}

function hide() {
  var i;
  var test = document.getElementsByClassName("test");
  for (i = 0; i < test.length; i++) {
    test[i].style.display = "none";
  }
}
