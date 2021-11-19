const HelloBlueRed = (props) => {
  const colorStyle = {
    color: props.firstColor,
    backgroundColor: props.secondColor,
  };

  return (
    <div>
      <h1 style={colorStyle}>The word is: {props.word}</h1>
    </div>
  );
};

export default HelloBlueRed;
