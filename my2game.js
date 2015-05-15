
  function Game() {

    this.message = "";

    this.retrieveMessage = function() {
      if (elSelect.value === "opt1") {
            this.message = "Great me too!";
      } else if (elSelect.value === "opt2") {
            this.message = "You could like them more!";
      } else if (elSelect.value === "opt3") {
            this.message = "You should like them, they're soft and cuddly!";
      } else {
            this.message = "So sorry for you!";
      }
    var el = document.getElementById("result");
    el.textContent = this.message;
    };
  }

  var runCatScat = new Game();
  var elSelect = document.getElementById("list");
  elSelect.addEventListener("change", runCatScat.retrieveMessage); //The rcs.retvMsg runs when a dropdown box choices are selected. The message variable represents the DOM node with an ID of list.




/*function Cat(name, color, superpower) {
  this.name = name;
  this.color = color;
  this.superpower = superpower;
}*/


