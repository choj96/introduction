import React, { useRef } from "react";
import TypeIt from "typeit-react";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        <p>Hello World!</p>
        <TypeIt
          getBeforeInit={(instance) => {
            instance.type("프론트엔드 개발자 조준영입니다.");
            return instance;
          }}
        />
      </div>
    </div>
  );
};

export default Visual;
