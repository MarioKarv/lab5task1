function formatText(style) {
  var textDiv = document.getElementById("formattedText");

  switch (style) {
    case "bold":
      textDiv.classList.toggle("bold");
      break;
    case "italic":
      textDiv.classList.toggle("italic");
      break;
    case "underline":
      textDiv.classList.toggle("underline");
      break;
    case "color":
      var color = document.getElementById("colorPicker").value;
      textDiv.style.color = color;
      break;
    case "case":
      var selectedCase = document.getElementById("caseSelect").value;
      if (selectedCase === "uppercase") {
        textDiv.innerHTML = textDiv.innerHTML.toUpperCase();
      } else if (selectedCase === "lowercase") {
        textDiv.innerHTML = textDiv.innerHTML.toLowerCase();
      } else {
        textDiv.innerHTML = textDiv.innerHTML.toLowerCase(); // Default to lowercase
      }
      break;
    default:
      break;
  }
}
