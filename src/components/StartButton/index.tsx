import React from "react";
import style from "./StartButton.module.scss"

const StartButton = (props: any) => { //: { onClick:()=>void }
    return (
        <button className={ style.startbutton } onClick={props.onClick}>Random Numbers</button>
    )
}

export default StartButton