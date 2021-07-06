module.exports = {
  title: `canplane`,
  description: `🚀`,
  author: `canplane`,

  siteUrl: `https://canplane.netlify.com`,
  ogImage: `https://github.com/canplane/canplane.com/blob/master/src/assets/op-image.png?raw=true`,
  social: {
    github: `https://github.com/canplane`,
    // instagram: `https://instagram.com/canplane`,
    // linkedIn: `https://www.linkedin.com/in/sanghoon-lee-aab376216`,
    email: `canplane@gmail.com`,
  },
  comments: {
    utterances: {
      repo: `canplane/canplane.com`,
    },
  },
  ga: 'UA-201251923-1', // Google Analytics Tracking ID
  // setting guide - https://devsungyeon.github.io/github%20blog/Google-analytics/

  // metadata for bio
  bio: {
    name: '이상훈',
    description: `전자공학과 전산학, UI/UX 디자인에 관심이 많습니다.`, // `I'm a technical artist interested in EE/CS & UI/UX.`,
  },

  // metadata for About Page
  /* about: {
    timestamps: [
      {
        date: '2018.07 ~ 2018.12',
        activity: '자존감 랩실(X-ray 그리드 라인 제거 개선 기법 연구)',
      },

      {
        date: '2018.11.22',
        activity: '2018 교내 인공지능(육목) 경진대회 우승',
      },

      {
        date: '2019.06 ~ 2019.12',
        activity: '알고리즘 휴학',
        links: {
          post: 'https://zoomkoding.github.io/%ED%9A%8C%EA%B3%A0/2019/12/05/how-to-algo.html',
        },
      },

      {
        date: '2019.11.17',
        activity: '코드포스 블루',
        links: {
          post: 'https://zoomkoding.github.io/codeforces/2019/11/17/codeforces-600.html',
        },
      },

      {
        date: '2019.11.18',
        activity: '2019 교내 인공지능(육목) 경진대회 우승',
      },

      {
        date: '2019.11.21',
        activity: '네이버 캠퍼스 핵데이 참여',
        links: {
          post:
            'https://zoomkoding.github.io/codingtest/naver/2019/11/26/2019-naver-hackday-2.html',
        },
      },

      {
        date: '2019.12 ~ 2020.06',
        activity: '스타트업 인턴 진행 및 Picky 앱 개발',
        links: {
          post:
            'https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },

      {
        date: '2020.07 ~ 2020.08',
        activity: '2020 우아한테크캠프 참여',
        links: {
          post:
            'https://zoomkoding.github.io/%ED%9A%8C%EA%B3%A0/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/10/05/woowa-tech-camp-final.html',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },

      {
        date: '2021.01 ~ 2021.02',
        activity: '대학시간(대학교 수강신청 보조 웹 앱) 개발 및 서비스',
        links: {
          post:
            'https://zoomkoding.github.io/%EB%8C%80%ED%95%99%EC%8B%9C%EA%B0%84/%ED%9A%8C%EA%B3%A0/2021/02/10/college-timetable-development.html',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'http://www.timetable.college',
        },
      },
    ],

    projects: [
      {
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '스타트업에서 구글 출신 CEO님과 CTO님을 포함한 훌륭하신 4분과 함께 앱 개발 사업을 진행했습니다. 저는 초기에 1인 개발자로 v1.0 개발과 이후 유지보수를 담당했습니다. 약 한달 반의 개발 기간을 거쳐 2020년 4월에 v1.0을 배포했고 2021년 3월 현재 4만명 넘는 유저를 보유하고 있습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl:
          'https://media-exp1.licdn.com/dms/image/C560BAQGc18OyGfmPZQ/company-logo_200_200/0/1603042283518?e=1622678400&v=beta&t=brvRul711R43vMtIGR96EX7ZEPSTbemrbyzlhC6Dhm4',
        links: {
          post:
            'https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
      {
        title: '2020 웹 중심 우아한테크캠프 참여',
        description:
          '웹 프론트엔드 개발 경험을 키워보고자 지원하여 2달간 우아한 형제들에서 주관하는 우아한테크캠프를 진행했습니다. 캠프 기간 동안 저와 비슷한 열정을 가진 사람들과 함께 성장할 수 있었던 유익한 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYxT7-ADQQo72P5qbwJjwySPY8p1C1a3L0w&usqp=CAU',
        links: {
          post:
            'https://zoomkoding.github.io/%ED%9A%8C%EA%B3%A0/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/10/05/woowa-tech-camp-final.html',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },
      {
        title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
        description:
          '입사일을 앞두고 뭐를 할까 고민하던 중에 수강신청 준비 과정의 어려움을 해소할 수 있는 웹사이트를 개발하게 되었습니다. 이번 프로젝트는 조금 특별하게 기획, 디자인, 홍보, 개발 모두 직접 도전하게 되었고 약 한달의 시간 끝에 배포했습니다. 21년도 1학기 재학생 중 1600명 정도가 이 서비스를 사용했습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'https://www.timetable.college/timetable.png',
        links: {
          post:
            'https://zoomkoding.github.io/%EB%8C%80%ED%95%99%EC%8B%9C%EA%B0%84/%ED%9A%8C%EA%B3%A0/2021/02/10/college-timetable-development.html',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'http://www.timetable.college',
        },
      },
    ],
  },
  */
};
