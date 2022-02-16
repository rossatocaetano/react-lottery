import React from "react";
import style from "./StartButton.module.scss"

const StartButton = () => {
    return (
        <button className={ style.startbutton } onClick={() => console.log('cliquei')}>Sort</button>
    )
}

export default StartButton