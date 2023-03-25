import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        <p>Hello World!</p>
        <span>
          프론트엔드 신입개발자 <b>조준영</b> 입니다.
        </span>
      </div>
    </div>
  );
};

export default Visual;
