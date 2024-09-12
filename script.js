const container = document.getElementById('color-container');
const saturation = document.getElementById('saturation');
const background = document.getElementById('background-color');
const inputs = document.getElementById('inputs');
const generateBtn = document.getElementById('color-btn');
const addColorBtn = document.getElementById('add-color');
const removeColorBtn = document.getElementById('remove-color');
const colorCount = document.getElementById('color-count');

let count = 1;
let bcgColor = '#FFFFFF';
let rgbColor = 'black';
let sat = saturation.value / 100;
const colors = 
[
    {
        c: '1',
        r:255,
        g:255,
        b:255,

    }
    
];

//generates random numbers for rgb
const randomNumber = () =>  {
    return Math.floor(Math.random() * (225-0));
    
}

colorCount.innerText = `${count} / 5`;
const addColor = () => {

    if(count < 5){

        //increase counter
        count++;
        colorCount.innerText = `${count} / 5`;

        //add object
        let newObj = {
            c: `${count}`,
            r: 255,
            g: 255,
            b: 255,
        };
        colors.push(newObj);

        //create elements
        const newDivContainer = document.createElement("div");
        newDivContainer.className = "color-square"
        newDivContainer.id = `color-div-${count}`;

        const newDivColor = document.createElement("div");
        newDivColor.className = 'real-color';
        newDivColor.id = `color-${count}`;
     
        newDivContainer.appendChild(newDivColor);

        const newDivRgb = document.createElement("div");
        newDivRgb.className = 'rgb-text';
        newDivRgb.id = `rgb-text-${count}`;
        newDivRgb.innerText = 'rgb( 255, 255, 255, 1 )';
        newDivRgb.style.color = `${rgbColor}`;
        newDivContainer.appendChild(newDivRgb);

        container.appendChild(newDivContainer);
    }
}


const removeColor = () => {
    if(count > 1){
       //removes element
       const newDivContainer = document.getElementById(`color-div-${count}`)
       newDivContainer.remove();

       count--;
       colorCount.innerText = `${count} / 5`;

       colors.pop();
    }
}


const changeColor = () => {
const getColor = document.getElementById(`color-${count}`);
const getRGB = document.getElementById(`rgb-text-${count}`);

        for(let i = 0; i < colors.length; i++){
        colors[i].r = randomNumber();
        colors[i].g = randomNumber();
        colors[i].b = randomNumber();
        getColor.style.backgroundColor = `rgb(${colors[i].r},${colors[i].g},${colors[i].b}, ${sat} )`;
        getRGB.innerText = `rgb( ${colors[i].r}, ${colors[i].g}, ${colors[i].b}, ${sat} )`; 
    }


}

saturation.oninput = function () {
    const getColor = document.getElementById(`color-${count}`);
    const getRGB = document.getElementById(`rgb-text-${count}`); 

    sat = this.value / 100;
    for(let i = 0; i < colors.length; i++){ 
    getColor.style.backgroundColor = `rgb(${colors[i].r},${colors[i].g},${colors[i].b}, ${sat} )`;
    getRGB.innerText = `rgb( ${colors[i].r}, ${colors[i].g}, ${colors[i].b}, ${sat} )`;
}
 
    
} 

//Background Color
bcgColor = background.value;
background.oninput = function () {
    bcgColor = this.value;
    document.body.style.backgroundColor = `${bcgColor}`;
    darkMode(bcgColor);
}
//Changes text color based on input color
const darkMode = (hex) => {
    const split = hex.split("");
    
    for(let i = 1; i < split.length-1; i += 2){
        if(split[i] < '6'){
            rgbColor = 'white';
           
        }else{
            rgbColor = 'black';
        }
    }

    document.querySelector("h1").style.color = `${rgbColor}`;
    document.querySelector("p").style.color = `${rgbColor}`;
    for(let j = 0; j < colors.length; j++){
        document.querySelectorAll('.rgb-text')[j].style.color = `${rgbColor}`;
    }

}


    

generateBtn.addEventListener("click", changeColor);
addColorBtn.addEventListener("click", addColor);
removeColorBtn.addEventListener("click", removeColor);






