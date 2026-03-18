/*
* File: rhombus.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft I/N
* Date: 2026-03-08
* Github: https://github.com/CWGSkyStone/web_romb
* Licenc: MIT
*/


function calcPerimeter(side){
    return side * 4
}

function calcArea(side, angle){
    const rad = angle * Math.PI / 180;
    return Math.pow(side, 2) * Math.sin(rad);
}

export {calcPerimeter, calcArea};