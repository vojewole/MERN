import React, {useState} from 'react';



const BoxGenerator = () => {
    const [boxColor, setBoxColor] = useState("");
    const [colorList, setColorList] = useState([])


    const createBox = (e) => {
        e.preventDefault();
        const newBoxList = [...colorList, boxColor];
        setColorList(newBoxList)
        }

    const addBox = {
        margin: '10px',
        width: '200px',
        height: '200px',
        border: 'solid black 2px',
        flexWrap: 'wrap',
        display: 'inline-block'
        }

    return(
        <div>
            <form onSubmit={createBox}>
                <label>Color  </label>
                <input type="text" value={boxColor} onChange={(e) => setBoxColor(e.target.value)}></input>
                <button>Add</button>
            </form>
            {colorList.map((color, index) => (
                <div key={index} style={{...addBox, backgroundColor:color}}></div>
            ))}
        </div>
    )
}

export default BoxGenerator;
