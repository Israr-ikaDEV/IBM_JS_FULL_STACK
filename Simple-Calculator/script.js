function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let display = document.getElementById("display");
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression");
  }
}

// Event handlers
function hoverEffect(button) {
  console.log("Hovered on button:", button.innerText);
}

function inputFocused() {
  console.log("Input field is focused");
}

function inputSelected() {
  console.log("Text selected inside input field");
}

function keyPressed(event) {
  console.log("Key pressed:"+ event.key);
}

function pageLoaded() {
  console.log("Page loaded successfully!");
}
