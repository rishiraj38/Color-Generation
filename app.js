const rgbDisplay = document.getElementById('rgb');
const hexDisplay = document.getElementById('hex');
const singleButton = document.getElementById('single');
const gradientButton = document.getElementById('gradient');


const randomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const rgbToHex = (rgb) => {
    const toHex = (value) => value.toString(16).padStart(2, '0');
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};


const generateSingleColor = () => {
    const color = randomRGB();
    const hexColor = rgbToHex(color);
    document.body.style.background = color;
    rgbDisplay.textContent = `RGB: ${color}`;
    hexDisplay.textContent = `Hex: ${hexColor}`;
};


const generateGradient = () => {
    const color1 = randomRGB();
    const color2 = randomRGB();
    const hexColor1 = rgbToHex(color1);
    const hexColor2 = rgbToHex(color2);
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    rgbDisplay.textContent = `RGB: ${color1} to ${color2}`;
    hexDisplay.textContent = `Hex: ${hexColor1} to ${hexColor2}`;
};

singleButton.addEventListener('click', generateSingleColor);
gradientButton.addEventListener('click', generateGradient);