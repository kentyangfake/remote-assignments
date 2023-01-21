function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector("h1").innerHTML = this.responseText;
        document.querySelector("button").style.display = 'none';
      }
    };
    xhttp.open("GET", "getData?number=10", true);
    xhttp.send();
  }