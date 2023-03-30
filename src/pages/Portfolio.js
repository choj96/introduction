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
              <div
                className="team-project"
                data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-deley="400"
                data-aos-duration="1000"
              >
                <div className="team-box">
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
                <div className="team-text">
                  <h4>배달대</h4>
                  <p>
                    <b>제작기간</b> 23.01.09 ~ 23.02.05
                  </p>
                  <p>
                    <b>참여인원</b> 3명
                  </p>
                  <p>
                    <b>사용기술</b> React, Redux
                  </p>
                  <p>
                    <b>프로젝트 내용</b>
                  </p>
                  <p>
                    <b>깃허브 방문</b> (아이콘)
                  </p>
                </div>
              </div>
              <div
                className="team-project"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-deley="500"
                data-aos-duration="1000"
              >
                <div className="team-box">
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
                <div className="team-text">
                  <h4>나의 텅장</h4>
                  <p>
                    <b>제작기간</b> 23.01.09 ~ 23.02.05
                  </p>
                  <p>
                    <b>참여인원</b> 3명
                  </p>
                  <p>
                    <b>사용기술</b> React, Redux
                  </p>
                  <p>
                    <b>프로젝트 내용</b>
                  </p>
                  <p>
                    <b>깃허브 방문</b> (아이콘)
                  </p>
                </div>
              </div>
            </div>
            <div className="portfolio-study">
              <h3 data-aos="fade-up">Study</h3>
              <div
                className="content-study"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={true}
                  navigation={true}
                  speed={900}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="sw-inner">
                      <img src={`${path}/images/도시락통.png`} alt="skills" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sw-inner">
                      {" "}
                      <img src={`${path}/images/도시락통.png`} alt="skills" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sw-inner">
                      {" "}
                      <img src={`${path}/images/도시락통.png`} alt="skills" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sw-inner">
                      {" "}
                      <img src={`${path}/images/도시락통.png`} alt="skills" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sw-inner">
                      {" "}
                      <img src={`${path}/images/도시락통.png`} alt="skills" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
