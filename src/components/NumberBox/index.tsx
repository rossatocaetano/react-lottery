import React from "react";
import style from "./NumberBox.module.scss"

const NumberBox: React.FC = (props) => {
    return (
        <div className={style.numberbox}>
            <p>{props.children}</p>
        </div>
    )
}

export default NumberBox;