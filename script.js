const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");

const img = new Image()
img.src = "./images/h-removebg-preview.png";

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

}