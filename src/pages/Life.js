import React from "react";

const Life = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="life scroll">
      <div className="inner">
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          Life
        </h2>
        <div className="contents">
          {/* 나의 대외활동, 취미, 회사 대표가 바라는 인재상 */}
          <ul className="life-list">
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
            <li>
              <img src="images/life.png" alt="life" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
