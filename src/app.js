/*
* File: app.js
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: Szoft I/N
* Date: 2026-03-08
* Github: https://github.com/CWGSkyStone/web_romb
* Licenc: MIT
*/

import {calcPerimeter, calcArea} from "./rhombus.js";

const rhombusForm = document.querySelector("#rhombusForm");
const sideInput = document.querySelector("#side");
const angleInput = document.querySelector("#angle");
const perimeterOutput = document.querySelector("#perimeter");
const areaOutput = document.querySelector("#area");
const deleteButton = document.querySelector("#delete");


rhombusForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startCalc();
});

deleteButton.addEventListener("click", () => {
    clearCalc();
});
function startCalc(){
    const side = parseFloat(sideInput.value);
    const angle = parseFloat(angleInput.value);

    const perimeter = calcPerimeter(side);
    perimeterOutput.value = perimeter

    const area = calcArea(side, angle);
    areaOutput.value = area
    
}

function clearCalc(){
    sideInput.value = "";
    angleInput.value = "";
    perimeterOutput.value = "";
    areaOutput.value = "";
}
