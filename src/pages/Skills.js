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
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            pagination={true}
            navigation={true}
            speed={900}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-html.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-css.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-js.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-sass.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-react.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-redux.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-type.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-git.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sw-inner">
                <img src={`${path}/images/skill-figma.png`} alt="skills" />
              </div>
              <div className="sw-inner-hover">
                <span>뭐뭐정도를 할 수 있습니다.</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
