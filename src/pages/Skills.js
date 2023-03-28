import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 자격증 , 기술적인 측면 (아이콘) */}
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          SKILLS
        </h2>
        <div className="contents">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-html.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-css.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-js.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-sass.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-react.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/다운로드.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-type.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-git.png`} alt="skills" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-figma.png`} alt="skills" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
