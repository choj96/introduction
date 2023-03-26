import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          PORTFOLIO
        </h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <div className="portfolio-team">
              <h3 data-aos="fade-up">Team Project</h3>
              <div className="team-project">
                <div className="">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/cB7KyN1VgGs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>내용</div>
              </div>
              <div className="team-project">
                <div>내용</div>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/m_6p2v6Gdzs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="team-project">
                <div>이미지</div>
                <div>내용</div>
              </div>
            </div>
            <div className="portfolio-study">
              <h3 data-aos="fade-up">Study</h3>
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                pagination={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="sw-inner">STX 건설</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sw-inner">빙그레</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sw-inner">한살림</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sw-inner">도시락통</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sw-inner">원더플레이스</div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
