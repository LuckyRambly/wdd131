document.addEventListener('DOMContentLoaded', function() {
    
    const temperatureString = document.querySelector('.weather-container-desktop p:nth-child(3)').textContent;
    const windSpeedString = document.querySelector('.weather-container-desktop p:nth-child(5)').textContent;

    const temperatureMatch = temperatureString.match(/Temperature: ([-]?\d+(\.\d+)?) ?(°C|°F)/);
    const windSpeedMatch = windSpeedString.match(/Wind: ([-]?\d+(\.\d+)?) ?(km\/h|mph)/);

    let temperature = null;
    let temperatureUnit = null;
    let windSpeed = null;
    let windSpeedUnit = null;

    if (temperatureMatch) {
        temperature = parseFloat(temperatureMatch[1]);
        temperatureUnit = temperatureMatch[3];
    }

    if (windSpeedMatch) {
        windSpeed = parseFloat(windSpeedMatch[1]);
        windSpeedUnit = windSpeedMatch[3];
    }

    const calculateWindChill = (temp, speed, unit) => {
        if (unit === '°C') {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
        } else if (unit === '°F') {
            return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        }
        return null;
    };

    const windChillParagraph = document.querySelector('.weather-container-desktop p:nth-child(6)');

    if (temperature !== null && windSpeed !== null && temperatureUnit && windSpeedUnit) {
        let windChill = null;
        let displayWindChill = null;

        if ((temperatureUnit === '°C' && temperature <= 10 && windSpeed > 4.8 && windSpeedUnit === 'km/h') ||
            (temperatureUnit === '°F' && temperature <= 50 && windSpeed > 3 && windSpeedUnit === 'mph')) {
            windChill = calculateWindChill(temperature, windSpeed, temperatureUnit);
            displayWindChill = `${windChill.toFixed(2)} ${temperatureUnit}`; 
        } else {
            displayWindChill = 'N/A';
        }

        windChillParagraph.textContent = `Wind chill: ${displayWindChill}`;
    } else {
        console.error('No se pudieron extraer la temperatura y/o la velocidad del viento.');
        windChillParagraph.textContent = `Wind chill: N/A`;
    }
});

function actualizarFechaModificacion() {
    const ahora = new Date();
    const fechaHoraFormateada = ahora.toLocaleString();

    document.getElementById("lastModified").textContent = "Last Modified: " + fechaHoraFormateada;
}
actualizarFechaModificacion();

function mostrarAñoActual() {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();

    document.getElementById("currentyear").textContent = anioActual;
}
mostrarAñoActual();