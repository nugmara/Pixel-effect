**Note:** Please be mindful of your computer's specifications when running this particle animation. If your system has limited processing power or memory, you may experience slower performance or reduced animation quality. Older computers or those with less powerful CPUs might struggle to maintain a smooth animation, leading to longer particle creation times or lower resolution visuals. Keep in mind that the overall performance of the animation, including particle generation speed and resolution, may vary depending on your hardware capabilities. Adjusting the canvas size, the number of particles, or other parameters might help improve performance on less powerful systems.

# Pixel-effect with Image Data

<div align="center">
    <img  src="./images/pixel-effect.gif"/>
</div>


This project involves creating a captivating particle animation on an HTML5 canvas using image data. The particles are drawn on the canvas, and their appearance and motion are influenced by the brightness of corresponding pixels in an image.

## Overview

This JavaScript code creates an animated particle system on an HTML canvas. The particles are affected by the brightness values of an input image, which results in an engaging visual effect. The animation renders a smooth transition of particles across the canvas, producing an alluring visual representation of the image.

## Getting Started

1. Clone the repository or download the code files to your local machine.
2. Open the `index.html` file in a web browser to see the particle animation.

## Usage

1. When the web page loads, the animation will automatically start.
2. The particles will move downward on the canvas, and their brightness and appearance will be determined by the corresponding pixel values of the input image.

## Code Explanation

The core code for this animation can be found in the provided JavaScript file (`script.js`). Below is a brief explanation of its structure and components:

### Particle Class

- The `Particle` class is responsible for creating and updating individual particles.
- Each particle has random initial positions, velocities, and radii.
- The `update()` method moves the particle downward and adjusts its brightness based on pixel data.
- The `draw()` method renders the particle with a color determined by pixel color and adjusted brightness.

### Initialization

- The canvas dimensions are adjusted to match the loaded image dimensions.
- The input image is drawn onto the canvas, and its pixel data is extracted using `getImageData`.
- Arrays (`brightnessArray` and `rgbaArray`) are populated based on the pixel data.

### Animation Loop

- The `animate()` function forms the core of the animation loop.
- It clears the canvas and sets a semi-transparent black background for fading effect.
- The loop updates and draws each particle, adjusting their appearance based on brightness.
- The animation loop is continually triggered using `requestAnimationFrame`.

## Customization

Feel free to customize and experiment with the code to achieve different visual effects. You can modify particle behavior, canvas size, initial parameters, and more.


