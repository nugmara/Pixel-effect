const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");

const img = new Image()
img.src = "./images/h-removebg-preview.png";

let brightnessArray = []
let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.brightness = 0;
        this.velocity = Math.random() * 3 + 0.1;
        this.radius = Math.random() * 1.5 + 1;
    }
    update() {
        this. y += this.velocity;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
        this.brightness = brightnessArray[Math.floor(this.y - 1) * canvas.width + Math.floor(this.x)]
    }
}

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