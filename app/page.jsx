import Image from 'next/image';

export default function Home() {
  return (
    <div className="scroll-container">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="logo">준희's portfolio</div>
            <ul className="nav">
              <li>
                <a href="#section1">Home</a>
              </li>
              <li>
                <a href="#section2">About Me</a>
              </li>
              <li>
                <a href="#section3">Project</a>
              </li>
              <li>
                <a href="#section4">Team Project</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div id="section1" className="main">
        <h2>안녕하세요</h2>
        <h2>정보보호학과 22학번</h2>
        <h2>홍준희입니다!</h2>
        <h3>
          <p>현재 중부대학교 정보보호학과에 재학중이며</p>
          <p>모든 배우려는 자세로 학습해 나가고 있습니다!!</p>
        </h3>
        <div className="main_img">
          <img src="/img/unnamed.webp" alt="globals.css" />
        </div>
      </div>
      <div id="section2" className="about">
        <h2>About Me</h2>
        <div className="about_img">
          <img src="/img/jjun704@naver (0) (2).jpg" alt="globals.css" />
        </div>
        <div className="about_info">
          <h1 className="name">홍준희</h1>
          <h1 className="birthday">2003.07.04</h1>
          <h1 className="home">경기도 의정부시</h1>
          <h1 className="call">010-5145-8907</h1>
          <h1 className="email">jjun704@naver.com</h1>
          <h1 className="major">중부대학교 정보보호학과</h1>
          <div className="career">
            <h1>활동 이력</h1>
            <p>- ict 멘토링 한이음 활동</p>
            <p>- ict 멘토링 스마트해상물류 활동</p>
            <p>- 웹 개발 스터디 참여</p>
          </div>
        </div>
      </div>
      <div id="section3" className="project">
        <h2>Project</h2>
        <div className="hcj">
          <img src="/img/hcj.png" alt="globals.css" />
          <p>
            <a href="https://github.com/jun8907/hcj2">GitHub 바로가기</a>
          </p>
          <p>
            <a href="https://hcj2-nine.vercel.app/">웹 서비스 주소</a>
          </p>
        </div>
        <div className="clerk">
          <img src="/img/clerk.png" alt="globals.css" />
          <p>
            <a href="https://github.com/jun8907/clerk2">GitHub 바로가기</a>
          </p>
          <p>
            <a href="https://clerk2-21wv.vercel.app/">웹 서비스 주소</a>
          </p>
        </div>
        <div className="dapara">
          <img src="/img/dapara.png" alt="globals.css" />
          <p>
            <a href="https://github.com/jun8907/dapara1">GitHub 바로가기</a>
          </p>
          <p>
            <a href="https://dapara1-theta.vercel.app/">웹 서비스 주소</a>
          </p>
        </div>
        <div className="crud">
          <img src="/img/crud.png" alt="globals.css" />
          <p>
            <a href="https://github.com/jun8907/mongodb-crud">
              GitHub 바로가기
            </a>
          </p>
        </div>
      </div>
      <div id="section4" className="teamproject">
        <h2>Team Project</h2>
        <div className="team1">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 김시우</p>
          <p>학번: 92212776</p>
          <p>MBTI: INTJ</p>
          <p>파트분배: 로그인/회원가입</p>
        </div>
        <div className="team2">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 송지현</p>
          <p>학번: 92212879</p>
          <p>MBTI: ESTJ</p>
          <p>파트분배: 홈메뉴</p>
        </div>
        <div className="team3">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 윤다혜</p>
          <p>학번: 92212958</p>
          <p>MBTI: ISTP</p>
          <p>파트분배: 총괄</p>
        </div>
        <div className="team4">
          <img src="/img/2815428.png" alt="globals.css" />
          <p>이름: 이지인</p>
          <p>학번: 92213029</p>
          <p>MBTI: INTJ</p>
          <p>파트분배: 신청명단</p>
        </div>
      </div>
      <div className="introduce">
        <h2>Introduce</h2>
        <div>
          <h3>
            <p className="large">웹 사이트 이름: Admin</p>
            <p>
              선정이유 : 스터디를 진행하고 있는데 비공식이던 공식이던 동아리
              가입 요청을 해서 승인받는 사이트를 만들고 싶었다.
            </p>
            <p className="teamplay">
              <img src="/img/teamplay.png" alt="globals.css" />
            </p>
            <p>
              <a href="https://youtu.be/nOBNgjD9hj4">
                시연 영상 https://youtu.be/nOBNgjD9hj4
              </a>
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
}
