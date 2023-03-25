import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  const htmlData = [
    {
      id: "lisp",
      label: "lisp",
      value: 90,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const csslData = [
    {
      id: "lisp",
      label: "lisp",
      value: 80,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const jsData = [
    {
      id: "lisp",
      label: "lisp",
      value: 70,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const reactData = [
    {
      id: "lisp",
      label: "lisp",
      value: 70,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const reduxData = [
    {
      id: "lisp",
      label: "lisp",
      value: 50,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const gitData = [
    {
      id: "lisp",
      label: "lisp",
      value: 70,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];

  const figmaData = [
    {
      id: "lisp",
      label: "lisp",
      value: 60,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const typeData = [
    {
      id: "lisp",
      label: "lisp",
      value: 70,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];
  const sassData = [
    {
      id: "lisp",
      label: "lisp",
      value: 80,
    },
    {
      id: "stylus",
      label: "stylus",
      value: 10,
    },
  ];

  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 자격증 , 기술적인 측면 (아이콘) */}
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          Skills
        </h2>
        <div className="contents">
          <ul className="skills-list">
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                {/* <div style={{ width: "342px", height: "342px", margin: "0 auto" }}> */}
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-html.png`}
                  alt="skills"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="400"
                />
              </div>
            </li>
            <li>
              <div
                className=""
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-css.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="400"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-js.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="500"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-react.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="600"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-git.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="700"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-redux.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="800"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-figma.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="900"
                />
              </div>
            </li>
            <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
                data-aos="zoom-in"
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  transitionMode="startAngle"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-type.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1100"
                />
              </div>
            </li>
            {/* <li>
              <div
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
              >
                <ResponsivePie
                  data={htmlData}
                  sortByValue={true}
                  innerRadius={0.85}
                  activeOuterRadiusOffset={8}
                  colors={["#AD5299", "#B8A6B3"]}
                  enableArcLinkLabels={false}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  isInteractive={false}
                  motionConfig="slow"
                  legends={[]}
                />
                <img
                  src={`${path}/images/skill-sass.png`}
                  alt="skill"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="1100"
                />
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
