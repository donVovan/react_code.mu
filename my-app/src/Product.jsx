import React from "react";
import ProductField from "./ProductField";

function Product({id, name, cost, changeField}) {
    return <tr>
        <ProductField id={id} text={name} type='name' changeField={changeField} />
        <ProductField id={id} text={cost} type='cost' changeField={changeField} />
        <ProductField id={id} text={catg} type='catg' changeField={changeField} />
    </tr>;
}

export default Product;