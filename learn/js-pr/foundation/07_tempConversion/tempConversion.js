const convertToCelsius = function(celsiusTemperature) {
    let fahrenheitTemperature=celsiusTemperature-32;
    fahrenheitTemperature*=(5/9);
    return Number(fahrenheitTemperature.toFixed(1));
};

const convertToFahrenheit = function(fahrenheitTemperature) {
    let celsiusTemperature=(9/5)*fahrenheitTemperature;
    celsiusTemperature+=32;
    return Number(celsiusTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
