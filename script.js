let conversionType = document.getElementById("conversionType");
let inputValue = document.getElementById("inputValue");
let outputValue = document.getElementById("outputValue");
let convertButton = document.getElementById("convertButton");

const performConversion = () => {
  const selectedOption = conversionType.value;
  const input = parseFloat(inputValue.value);

  let result;
  switch (selectedOption) {
    case "kgToLb":
      result = (input * 2.205).toFixed(2) + " Pounds";
      break;
    case "kgToOz":
      result = (input * 35.274).toFixed(2) + " Ounces";
      break;
    case "lbToKg":
      result = (input / 2.205).toFixed(2) + " Kilograms";
      break;
    case "lbToOz":
      result = (input * 16).toFixed(2) + " Ounces";
      break;
    case "ozToKg":
      result = (input / 35.274).toFixed(2) + " Kilograms";
      break;
    case "ozToLb":
      result = (input / 16).toFixed(2) + " Pounds";
      break;
    default:
      result = "Invalid Conversion";
  }

  outputValue.value = result || "";
};

convertButton.addEventListener("click", performConversion);
inputValue.addEventListener("input", () => {
  outputValue.value = "";
});
performConversion();