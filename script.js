const rgbDiv = document.getElementById('rgb-text');
const container = document.getElementById('color-container');
const colorBtn = document.getElementById('color-btn');
const saturation = document.getElementById('saturation');



const colors = {
    r:255,
    g:255,
    b: 255,
    sat: 1.0
};

container.innerText = "**Press the button to begin**";

const randomNumber = () =>  {
    return Math.floor(Math.random() * (225-0));
    
}





const changeColor = () => {
    container.innerText = '';
    colors.r = randomNumber();
    colors.g = randomNumber();
    colors.b = randomNumber();
    container.style.backgroundColor = `rgb(${colors.r},${colors.g},${colors.b},${colors.sat})`;
    rgbDiv.innerText = `rgb( ${colors.r}, ${colors.g}, ${colors.b}, ${colors.sat} )`;
}


colors.sat = saturation.value / 100

saturation.oninput = function () {
    colors.sat = this.value / 100;
    container.style.backgroundColor = `rgb(${colors.r},${colors.g},${colors.b},${colors.sat})`;
    rgbDiv.innerText = `rgb( ${colors.r}, ${colors.g}, ${colors.b}, ${colors.sat} )`;
}


colorBtn.addEventListener("click", changeColor);








