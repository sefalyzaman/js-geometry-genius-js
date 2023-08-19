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

    addToCalculationEntry('traiangle', area);
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

    addToCalculationEntry('rectangle', area); 

}

// reusable function-----> reduce duplicate code
 
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    console.log(base)

    const height = getInputValue('Parallelogram-height');
    console.log(height);

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number')
        return;
}

    const area = base * height;
    setElementInnerText('Parallelogram-area', area)

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
    
}


function calculateEllipseArea(){
    const majorRadious = getInputValue('Ellipse-major-radious');
    const minorRadious = getInputValue('Ellipse-minor-redious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('Ellipse-area', areaTwoDecimal);
    
}

    addToCalculationEntry('Ellipse', areaTwoDecimal);


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
// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 
 * */ 
function addToCalculationEntry(areaType, area){
    console.log(areaType + '' + area)
    const calculationEntry = document.getElementById('Calculation-entry');

    const count = calculationEntry.childElementCount

    const p = document.createElement('p')
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup> <button class= 'btn btn-sm btn-success>Convert</button>`
}

// validate
/*
 1.set the proper type of the input field (number, data, email)
 2. check type using typeof
 3. NaN means: not a number isNaN is checking whether the input is not a number or not


*/
