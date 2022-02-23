import React from "react";
import style from "./Clover.module.scss"

const Clover = (props: any) => {
    return (
        <div className={style.container}>
            <div className={style.clover}>
        
                <div className={style.norotate}>
                    <div className={[style.face, style.front].join(' ')}></div>
                    <div className={[style.face, style.back].join(' ')}></div>
                </div>
      
                <div className={style.rotate1}>        
                    <div className={[style.face, style.front].join(' ')}></div>
                    <div className={[style.face, style.back].join(' ')}></div> 
                </div>
      
      
                <div className={style.rotate2}>        
                    <div className={[style.face, style.front].join(' ')}></div>
                    <div className={[style.face, style.back].join(' ')}></div> 
                </div>
    
     
                <div className={style.rotate3}>        
                    <div className={[style.face, style.front].join(' ')}></div>
                    <div className={[style.face, style.back].join(' ')}></div> 
                </div>

            </div>
        </div>
    )
}

export default Clover;