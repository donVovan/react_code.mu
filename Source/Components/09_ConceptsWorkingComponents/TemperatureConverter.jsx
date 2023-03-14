//⊗jsrtPmCpRCC
import React, { useState } from "react";

function TemperatureConverter() {
    const [fahrenheit, setFahrenheit] = useState("");
    const [celsius, setCelsius] = useState("");

    const handleFahrenheitChange = (event) => {
        const tempInF = event.target.value;
        setFahrenheit(tempInF);
        setCelsius(((tempInF - 32) * 5) / 9);
    };

    const handleCelsiusChange = (event) => {
        const tempInC = event.target.value;
        setCelsius(tempInC);
        setFahrenheit(tempInC * (9 / 5) + 32);
    };

    return (
        <div>
            <div>
                Фаренгейт в Цельсий:
                <input value={fahrenheit} onChange={handleFahrenheitChange} />
            </div>
            <br />
            <div>
                Цельсий в Фаренгейт:
                <input value={celsius} onChange={handleCelsiusChange} />
            </div>
        </div>
    );
}

export default TemperatureConverter;