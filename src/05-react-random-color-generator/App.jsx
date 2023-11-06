import React, { useEffect, useState } from "react";
import useInterval from "./useInterval";

function App() {
  const [generate, setGenerate] = useState(true);
  const [colorObj, setColorObj] = useState({
    name: "Blue",
    hexValue: "#73700D",
  });
  const [intervalValue, setIntervalValue] = useState(3);

  const generateColor = () => {
    fetch("https://www.thecolorapi.com/random?format=json")
      .then((response) => response.json())
      .then((data) => {
        setColorObj({
          name: data.name.value,
          hexValue: data.hex.value,
        });
      });
  };

  useEffect(() => {
    fetch("https://www.thecolorapi.com/random?format=json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.name?.value && data.hex?.value)
          setColorObj({
            name: data.name.value,
            hexValue: data.hex.value,
          });
      });
  }, []);

  useInterval(generateColor, intervalValue, generate);

  return (
    <div className="random-color-generator">
      <div className="color-info-and-button">
        <div className="color-generation">
          <p>Generate new colors every </p>
          <input
            type="number"
            min={0}
            max={10}
            maxLength={2}
            value={intervalValue}
            onChange={(e) => {
              e.currentTarget.value.length <= 2 &&
                setIntervalValue(e.currentTarget.value);
            }}
          />
          <span> second(s)</span>
          <button
            className="color-button"
            onClick={() => setGenerate(!generate)}
          >
            {generate ? "Stop" : "Start"}
          </button>
        </div>
        <div className="color-box">
          <div
            className="colorBox"
            style={{
              backgroundColor: `${colorObj.hexValue}`,
            }}
          />{" "}
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${colorObj.hexValue}`);
            }}
          >
            Copy
          </button>
        </div>
      </div>
      <div className="color-info">
        <p>
          {(colorObj.name + " " + colorObj.hexValue)
            .split(" ")
            .map((text, i) => {
              return (
                <React.Fragment key={i}>
                  {text}
                  <br />
                </React.Fragment>
              );
            })}
        </p>
      </div>
    </div>
  );
}

export default App;
