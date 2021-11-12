import React, { useState } from "react";

const Tab = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const tabObjArr = [
    { Label: "Tab 1", Content: "Stuff for Tab 1" },
    { Label: "Tab 2", Content: "Stuff for Tab 2" },
    { Label: "Tab 3", Content: "Stuff for Tab 3" },
  ];
  const handleStyleCheck = (value) => {
    setTabSelected(value);

    if (tabSelected === 0) {
      setLabel1Style(tabStyleSelected);
      setLabel2Style(tabStyleNotSelected);
      setLabel3Style(tabStyleNotSelected);
      setCurrentText(tabObjArr[tabSelected].Content);
    } else if (tabSelected === 1) {
      setLabel1Style(tabStyleNotSelected);
      setLabel2Style(tabStyleSelected);
      setLabel3Style(tabStyleNotSelected);
      setCurrentText(tabObjArr[tabSelected].Content);
    } else if (tabSelected === 2) {
      setLabel1Style(tabStyleNotSelected);
      setLabel2Style(tabStyleNotSelected);
      setLabel3Style(tabStyleSelected);
      setCurrentText(tabObjArr[tabSelected].Content);
    }
  };

  const tabStyleSelected = {
    margin: "10px",
    width: "100px",
    height: "50px",
    color: "white",
    backgroundColor: "black",
    border: " 1px solid black",
  };

  const tabStyleNotSelected = {
    margin: "10px",
    width: "100px",
    height: "50px",
    color: "black",
    backgroundColor: "white",
    border: " 1px solid black",
  };

  const [label1Style, setLabel1Style] = useState(tabStyleNotSelected);
  const [label2Style, setLabel2Style] = useState(tabStyleNotSelected);
  const [label3Style, setLabel3Style] = useState(tabStyleNotSelected);

  const textAreaStyle = {
    width: "340px",
    height: "100px",
  };

  // //const filterArr = () => {
  //   const newTabObjArr = [...tabObjArr];
  //   let filteredTab = newTabObjArr.filter((select, index) =>
  //     index === tabSelected ? select.Content : undefined
  //   );
  //   return filteredTab[0].Content;
  // };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={label1Style}>
          <p
            onClick={(e) => {
              handleStyleCheck(0);
            }}
          >
            {tabObjArr[0].Label}
          </p>
        </div>
        <div style={label2Style}>
          <p
            onClick={(e) => {
              handleStyleCheck(1);
            }}
          >
            {tabObjArr[1].Label}
          </p>
        </div>
        <div style={label3Style}>
          <p
            onClick={(e) => {
              handleStyleCheck(2);
            }}
          >
            {tabObjArr[2].Label}
          </p>
        </div>
      </div>
      <textarea style={textAreaStyle} value={currentText}></textarea>
    </div>
  );
};
export default Tab;
