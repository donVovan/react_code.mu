import React from "react";

const Fahrenheit = ({temp, setTemp}) => {

    function changeTemp(event) {
        setTemp((event.target.value * 9 / 5) + 32)
    }

    return <div>
        Цельсий в Фаренгейт <input value={temp} onChange={changeTemp} />
    </div>
}

export default Fahrenheit;