import React from "react";
import data from "../data.json";

function Section() {
  let tab = [];

  data.map((item, index) => {
    return tab.push(
      <div key={index}>
        <div className="title">
          {/* emission TV */}
          {item.category}
        </div>
        <div className="slider">
          {/* slider */}

          {item.images.map((link, index) => {
            return (
              <span key={index}>
                <img src={link}></img>
              </span>
            );
          })}
        </div>
      </div>
    );
  });

  return <div>{tab}</div>;
}

export default Section;
