import React from "react";

const Celsius = ({temp, setTemp}) => {

    function changeTemp(event) {
        setTemp((event.target.value))
    }

    return <div>
        Фаренгейт в Цельсий <input value={temp} onChange={changeTemp} />
    </div>
}

export default Celsius;