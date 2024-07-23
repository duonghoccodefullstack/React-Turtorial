import React, { useState } from "react";

const ColorTrafic = () => {
    const [clickcolor, setClickColor] = useState(0);
    const setColor = ["red", "yellow", "green"];
    
    const Trafic = () => {
        setClickColor((clickcolor + 1) % setColor.length);
    };

    return ( 
        <div className="ml-36 bg-slate-500" >
            <button onClick={Trafic}>Next</button>
            {setColor.map((color, index) => (
                <div
                    key={index}
                    className={`w-colorTrafic h-colorTrafic rounded-full bg-${color}-500 `}
                    
                    style={{ opacity: clickcolor === index ? 1: 0.1 }}
                >
               
                </div>
            ))}
        </div>
    );
};
 
export default ColorTrafic;
