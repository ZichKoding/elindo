console.clear();

function singlePumpf() {
  if (document.getElementById("pump1").checked) {
    document.getElementById("fieldsetpump2").style.display = "none";
    document.getElementById("fieldsetpump3").style.display = "none";
  }
  if (document.getElementById("p1fixedselect").checked) {
    document.getElementById("p1controlselect").style.display = "none";
  }
}

function doublePumpf() {
  if (document.getElementById("pump2").checked) {
    document.getElementById("fieldsetpump2").style.display = "block";
    document.getElementById("fieldsetpump3").style.display = "none";
  }
}

function triplePumpf() {
  if (document.getElementById("pump3").checked) {
    document.getElementById("fieldsetpump2").style.display = "block";
    document.getElementById("fieldsetpump3").style.display = "block";
  }
}

function p1Controlf() {
  if (document.getElmentById("p1variableselect").checked) {
    document.getElementById("p1controlselect").style.display = "block";
  }
}
