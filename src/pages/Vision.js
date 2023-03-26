import React from "react";

const Vision = () => {
  return (
    <section className="vision scroll">
      <div className="inner">
        {/* 1년 목표, 3년후 목표, 5년후 목표 */}
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          VISION
        </h2>
        <div className="contetns">
          <ul className="vision-list">
            <li>
              <div
                className="vison-box"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-deley="400"
                data-aos-duration="1000"
              >
                <p>1년후:</p>
              </div>
            </li>
            <li>
              <div
                className="vison-box"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-delay="450"
                data-aos-duration="1000"
              >
                <p>3년후:</p>
              </div>
            </li>
            <li>
              <div
                className="vison-box"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <p>5년후:</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
