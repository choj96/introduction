import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          About Me
        </h2>

        <div className="contents" data-aos="fade-up">
          <div className="profile-left">
            <div className="img-box"></div>
            <div className="info-box"></div>
          </div>
          <div className="profile-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
