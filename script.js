'use strict';
const hexBtn = document.querySelector('.hex-btn');
const hexContainer = document.querySelector('.hex-color-container');
const hexValue = document.querySelector('.hex-value');
const hexCopyBtn = document.querySelector('.copy-hex');

const rgbBtn = document.querySelector('#rgb-btn');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const rgbContainer = document.querySelector('.rgb-color-container');
const copyRgbBtn = document.querySelector('.copy-rgb');
const rgbValue = document.querySelector('.rgb-color-value');
// creating random Hex Color
hexBtn.addEventListener('click',(e)=>{
    const str1="0123456789ABCDEF";
    let hex="#";
    while(hex.length<=6){
        hex+=str1[(Math.floor(Math.random()*str1.length))];
    }
    hexContainer.style.backgroundColor = hex;
    hexValue.textContent=hex;
});

rgbBtn.addEventListener('click',(e)=>{
 let redValue = red.value;
 let blueValue = blue.value;
 let greenValue = green.value;
 rgbValue.textContent=`rgb(${redValue},${greenValue},${blueValue})`;
 rgbContainer.style.backgroundColor=`rgb(${redValue},${greenValue},${blueValue})`;
});


function copyHexToCipboard(){
    navigator.clipboard.writeText(hexValue.textContent);
    alert("Hex value is copied to clipboard");
}

function copyRGBToClipboard(){
    let val = `rgb(${red.value},${green.value},${blue.value})`;
    console.log(val);
    navigator.clipboard.writeText(val);
    alert("RGB value copied to clipboard");
}
hexCopyBtn.addEventListener('click',(e)=>{
    copyHexToCipboard();
});
copyRgbBtn.addEventListener('click',(e)=>{
    copyRGBToClipboard();
});
