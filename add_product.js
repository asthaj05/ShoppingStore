const imageInput = document.querySelector("#imageInput");
let uploadedImage = "";
console.log("here");
imageInput.addEventListener("change", function () {
    const reader = new FileReader();
    console.log("here");
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#display").style.backgroundImage = `url(${uploadedImage})`
    })
    reader.readAsDataURL(this.files[0])
})

// $("#txt3").blur(function(){
//   console.log("here");
//   $("#product_name").html(productName);
// });
// const productName =  document.querySelector("").value;
// console.log(productName,"name");
// productName.addEventListener("change", function () {
//   console.log(productName);

// });
const inputElement = document.getElementById('myInput');
const descElement = document.getElementById('description');
const codeElement = document.getElementById('code');
const storeElement = document.getElementById('store');
const titleElement = document.getElementById('title');
        
// Get the paragraph element
const outputElement = document.getElementById('output');
const descElementval = document.getElementById('product_desc');
const storeElementval = document.getElementById('product_store');
const codeElementval = document.getElementById('product_code');
const titleElementval = document.getElementById('product_title');



// Add an event listener to the input element
inputElement.addEventListener('input', () => {
    // Update the paragraph text with the input value
    outputElement.textContent = inputElement.value;
});

// Add an event listener to the input element
descElement.addEventListener('input', () => {
  // Update the paragraph text with the input value
  descElementval.textContent = descElement.value;
});

// Add an event listener to the input element
storeElement.addEventListener('input', () => {
  // Update the paragraph text with the input value
  storeElementval.textContent = storeElement.value;
});

// Add an event listener to the input element
codeElement.addEventListener('input', () => {
  // Update the paragraph text with the input value
  codeElementval.textContent = codeElement.value;
});

// Add an event listener to the input element
titleElement.addEventListener('input', () => {
  // Update the paragraph text with the input value
  titleElementval.textContent = titleElement.value;
});