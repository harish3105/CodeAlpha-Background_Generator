document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.querySelector(".color-box");
  const colorCode = document.getElementById("colorCode");
  const generateButton = document.getElementById("generateButton");
  const colorInput = document.getElementById("colorInput");
  const customButton = document.getElementById("customButton");
  const copyInput = document.getElementById("copyInput");
  const copyButton = document.getElementById("copyButton");

  // Function to generate a random hex color code
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Update the background color with a random color
  generateButton.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
    copyInput.value = randomColor;
  });

  // Set custom color from input
  customButton.addEventListener("click", function () {
    const customColor = colorInput.value;
    document.body.style.backgroundColor = customColor;
    colorCode.textContent = customColor;
    copyInput.value = customColor;
  });

  // Copy color code to clipboard
  copyButton.addEventListener("click", function () {
    copyInput.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + copyInput.value);
  });
});
