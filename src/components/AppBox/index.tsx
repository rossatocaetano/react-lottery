import React from "react"
import NumberBox from "../NumberBox";
import StartButton from "../StartButton";
import style from './AppBox.module.scss'

const AppBox = () => {
    return (        
        <div className={style.appbox}>
            <div className={style.numbersbox}>
                {[...Array(6)].map((elem, index) => (<NumberBox key={index} />))}                
            </div>
                
            <div className={style.button}>
                <StartButton />
            </div>
        </div>
    )    
}


export default AppBox;

