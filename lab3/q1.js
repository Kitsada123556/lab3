function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp * 9/5) + 32;
    }else if (scale === "F") {
        return (temp -32) * 5/9;
    }else {
        return `Invalid Temperature: ${temp} (${scale})`;
    }
}

console.log(convertTemperature(temp=100,scale="C"));