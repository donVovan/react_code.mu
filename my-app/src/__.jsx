
import React, {useState} from "react";
import Verdict from "./Verdict";
import TempInp from "./TempInp";

const __ = () => {
    const [temp, setTemp] = useState(0);

  return <div>
      <Verdict temp={temp} />
      <TempInp temp={temp} setTemp={setTemp} />
  </div>
}

export default __;