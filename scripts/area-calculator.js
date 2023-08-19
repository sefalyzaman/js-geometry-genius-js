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

    // validate input
    if(isNaN(width)){
        alert ('please insert a number')
        return;
    }

     
    // calculate area
    const area = width * length;
   

    // show rectangle area
    const rectengleAreaSpan = document.getElementById('rectangle-area');
    rectengleAreaSpan.innerText = area;

}

// reusable function-----> reduce duplicate code
 
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    console.log(base)

    const height = getInputValue('Parallelogram-height');
    console.log(height);

    const area = base * height;
    setElementInnerText('Parallelogram-area', area)
    
}
// validate
if(isNaN(base) || isNaN(height)){
    alert('please insert a number')
    return;
}

function calculateEllipseArea(){
    const majorRadious = getInputValue('Ellipse-major-radious');
    const minorRadious = getInputValue('Ellipse-minor-redious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('Ellipse-area', areaTwoDecimal);
    console.log(area);
}

// reusable get input value field in number
function getInputValue(FieldId){
    const inputField = document.getElementById(FieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}
