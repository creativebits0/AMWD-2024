function handOn(){
    console.log("Click Me JavaScript..... ");
}

function display(){
    document.getElementById('display1').innerText ="Welcome JavaScript";
}

function changeText(){
    console.log("Changing focus");
    const inputData = document.getElementById('inputData').Value
    console.log(inputData);
}

function onMouseOver(){
    console.log(' On MOuse Over Event')
    document.getElementById('divChange').style.backgroundColor= 'green' ;

}
function onMouseOut(){
    console.log(' On MOuse Out Event')
    document.getElementById('divChange').style.backgroundColor= 'purple' ;

}

function onKeyUp(){
    const val = document.getElementById('inputData2').value
    console.log(val)
}
function onKeyDown(){
    const val = document.getElementById('inputData2').value
    console.log(val)
}
function onKeyPress(){
    const val = document.getElementById('inputData2').value
    console.log(val)
}


