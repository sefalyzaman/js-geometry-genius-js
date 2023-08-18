function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle heigth value
    const heigthField = document.getElementById('triangle-height');
    const heightValueText = heigthField.value;
    const height = parseFloat(heightValueText);
    console.log(height);


    const area = 0.5 * base * height;
    console.log(area);

    // show traiangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

   
}
function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValue = widthField.value;
    const width = parseFloat(widthFieldValue);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValue = lengthField.value;
    const length = parseFloat(lengthFieldValue);
    console.log(length);
     
    // calculate area
    const area = width * length;
   

    // show rectangle area
    const rectengleAreaSpan = document.getElementById('rectangle-area');
    rectengleAreaSpan.innerText = area;

}

// reusable function-----> reduce duplicate code
 

