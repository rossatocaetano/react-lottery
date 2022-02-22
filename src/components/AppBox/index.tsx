import React, { useState } from "react"
import generate from "../../common/utils/generateNumbers";
import NumberBox from "../NumberBox";
import StartButton from "../StartButton";
import style from './AppBox.module.scss'


function AppBox(): JSX.Element {
    let test: number[] | string[] = ['--', '--', '--', '--', '--', '--'];
    let [numbersDrawn, setNumbersDrawn] = useState(test);


    function generateNumbers() {
        let numbers: number[] | string[] = generate({
            size: 6,
            highest: 60
        });

        let strNumbers: string[] = [];
        for ( let n = 0; n<numbers.length; n++ ) {            
            strNumbers.push(numbers[n].toString());            
        }

        setNumbersDrawn(strNumbers);
        return strNumbers
    }


    return (
        <div className={style.appbox}>
            <div className={style.numbersbox}>
                {[...Array(6)].map((elem, index) => (<NumberBox key={index} children={numbersDrawn[index]}/>))}
            </div>

            <div className={style.button}>
                <StartButton onClick={
                    generateNumbers} />
            </div>
        </div>
    );
}


export default AppBox;

