import React, {useState} from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

const Converter = () => {
    const [temp, setTemp] = useState(0);
    return <div>
        <Celsius temp={temp} setTemp={setTemp} />
        <Fahrenheit temp={temp} setTemp={setTemp} />
    </div>
}

export default Converter;