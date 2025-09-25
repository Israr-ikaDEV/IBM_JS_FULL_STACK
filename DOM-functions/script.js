function changeText() {
  let title = document.getElementById("mainTitle");
  title.innerHTML = "Text changed using innerHTML!";
}

function changeStyle() {
  let paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.color = "red"; 
  paragraphs[1].style.color = "blue"; 
}

function showAttribute() {
  let img = document.getElementById("myImage");
  alert("Image src: " + img.getAttribute("src"));
}

function changeAttribute() {
  let img = document.getElementById("myImage");
  img.setAttribute("src", "profile.jpg");
}

function addElement() {
  let newPara = document.createElement("p");
  newPara.innerHTML = "I am a new paragraph!";
  document.getElementById("container").appendChild(newPara);
}
