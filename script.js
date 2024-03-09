function calculate() {
    // Get values from input fields
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
  
    // Check if the values are valid
    if (isNaN(length) || isNaN(width)) {
      alert("Please enter valid numbers for length and width.");
      return;
    }
  
    // Calculate area and perimeter
    var area = length * width;
    var perimeter = 2 * (length + width);
  
    // Display results
    document.getElementById("areaResult").innerText = "Area: " + area.toFixed(2);
    document.getElementById("perimeterResult").innerText = "Perimeter: " + perimeter.toFixed(2);
  }
  