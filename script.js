const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");

const img = new Image()
img.src = "./images/h-removebg-preview.png";

let brightnessArray = []
let particlesArray = [];

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imgData.data) // red green blue alpha 0 .25

    for (let i = 0; i < imgData.data.length; i++) {
        const red = imgData.data[i*4];
        const green = imgData.data[(i*4) + 1];
        const blue = imgData.data[(i*4) + 2];
        // const alpha = imgData.data[(i*4) + 3];
        const brightness = (red + green + blue) / 3;
        brightnessArray.push(brightness)   
    }

    // generate 10.000 particles 
    for (let i = 0; i < 10000; i++) {
        // particlesArray.push(new Particle()) 
    }
}