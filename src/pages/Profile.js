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
          ABOUT ME
        </h2>

        <div className="contents" data-aos="fade-up">
          <div className="profile-left">
            <div className="img-box"></div>

            <span>이름 : 조준영 (아이콘 넣고 폰트업)</span>
            <span>생년월일 : 1996.03.10(아이콘 넣고 폰트업)</span>

            <span>이해는 오는거다.폰트굵게</span>
          </div>
          <div className="profile-right">
            <h3>Intro</h3>
            <span>내용을 열심히 한번 채워 봐야하는데 어떻게 채울까</span>
            <br />
            <span>
              채울 내용을 좀 더 생각을 해야겠다.가나다라마바사아자차카타파하
            </span>
            <br />
            <span>적어도 이정도는 채워야 하지 않을까싶다. 더 써야하나?</span>
            <h3>Experience</h3>
            <span>경험한 이력에 대해 적어야한다</span>
            <br />
            <span>내가 경험해온 일들을 하나씩 적어 보자</span>
            <br />
            <span>슬슬 채워보자 가나다라마바사아자차카타파하</span>

            <h3>License</h3>
            <span>1종보통운전면허</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
