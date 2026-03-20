import type { Bilingual } from '@/context/LanguageProvider';

export interface Project {
  id: string;
  title: Bilingual;
  description: Bilingual;
  role: Bilingual;
  tags: string[];
  url?: string;
  highlight?: boolean;
}

export interface Award {
  id: string;
  title: Bilingual;
  organization: Bilingual;
  year: number;
  url?: string;
  highlight?: boolean;
}

export interface CareerItem {
  id: string;
  title: Bilingual;
  organization: Bilingual;
  period: Bilingual;
  description?: Bilingual;
  url?: string;
  type: 'education' | 'work' | 'startup' | 'program';
}

export interface Skill {
  name: string;
  category: 'ai' | 'lang' | 'cloud' | 'mobile';
  level: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

// ── Projects ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'smart-referee',
    title: { ko: 'AI 야구 심판 SMART Referee', en: 'AI Baseball Referee — SMART Referee' },
    description: {
      ko: '딥러닝 기반 실시간 야구 심판 보조 시스템. SW 마에스트로 투자 유치 및 과기부 SW 마에스트로 선발.',
      en: 'Real-time deep learning baseball umpire assistant. Secured investment via SW Maestro and selected by the Ministry of Science & ICT.',
    },
    role: { ko: 'AI 엔지니어', en: 'AI Engineer' },
    tags: ['Python', 'Deep Learning', 'Computer Vision', 'PyTorch'],
    url: 'https://github.com/comojin1994/SMART_Referee/blob/master/DL/README.md',
    highlight: true,
  },
  {
    id: 'home-pt',
    title: { ko: '내 손안의 모바일 헬스장 Home PT', en: 'Mobile Gym — Home PT' },
    description: {
      ko: 'AI 기반 개인 트레이닝 서비스. YOLOPose 자세 추정 모델 적용. NUS(싱가포르국립대) 발표.',
      en: 'AI-powered personal training with YOLOPose estimation. Presented at National University of Singapore.',
    },
    role: { ko: 'AI 엔지니어', en: 'AI Engineer' },
    tags: ['Python', 'Pose Estimation', 'YOLO', 'Mobile AI'],
    url: 'https://github.com/comojin1994/YOLOPose',
    highlight: true,
  },
  {
    id: 'shikdanham',
    title: { ko: '내 손안의 영양사, 식단함', en: 'Pocket Nutritionist — Shikdanham' },
    description: {
      ko: 'AI 식품 인식 및 영양 분석 서비스. 식품안전나라 챌린지 대상 수상.',
      en: 'AI food recognition and nutrition analysis service. Grand Prize at Food Safety Korea Challenge.',
    },
    role: { ko: 'AI 엔지니어', en: 'AI Engineer' },
    tags: ['Python', 'Image Classification', 'Nutrition AI', 'Flask'],
    url: 'https://github.com/FoodSafetyWinnerWinnerChickenDinner',
    highlight: true,
  },
  {
    id: 'stocker',
    title: { ko: '내 손안의 똑똑한 AI 펀드매니저, STOCK𝝨R', en: 'AI Fund Manager — STOCK𝝨R' },
    description: {
      ko: 'AI 기반 주식 포트폴리오 관리 서비스. 강화학습을 활용한 투자 전략 최적화.',
      en: 'AI-driven stock portfolio management using reinforcement learning for investment strategy.',
    },
    role: { ko: 'AI·백엔드 엔지니어', en: 'AI & BE Engineer' },
    tags: ['Python', 'Reinforcement Learning', 'FinTech', 'Django'],
    url: 'https://github.com/Himelo/STOCKER',
  },
  {
    id: 'shinhan-card',
    title: { ko: '신한카드 소비패턴 분석', en: 'Shinhan Card Consumption Analysis' },
    description: {
      ko: '한국 20대의 소비패턴을 신한카드 데이터로 분석한 데이터 분석 프로젝트.',
      en: "Data analysis of Korea's 20s consumption patterns using Shinhan Card transaction data.",
    },
    role: { ko: '데이터 분석가', en: 'Data Analyst' },
    tags: ['Python', 'Data Analysis', 'Visualization', 'Statistics'],
    url: 'https://www.shinhancardblog.com/812',
  },
  {
    id: 'subway-onda',
    title: { ko: '지하철온다', en: 'Subway Onda' },
    description: {
      ko: '실시간 지하철 도착 정보 제공 모바일 앱. Google Play 스토어 출시.',
      en: 'Real-time subway arrival info mobile app, published on Google Play Store.',
    },
    role: { ko: '백엔드 엔지니어', en: 'Backend Engineer' },
    tags: ['Node.js', 'Mobile', 'API', 'Android'],
    url: 'https://play.google.com/store/apps/details?id=kr.co.subworkers.onda',
  },
];

// ── Awards ────────────────────────────────────────────────────────────────────

export const awards: Award[] = [
  {
    id: 'bci-2024',
    title: { ko: '종합우승 — 방위사업청장상', en: 'Overall Champion — Defense Acquisition Program Admin Award' },
    organization: { ko: 'BCI기반 표적인식 기술경진대회 (정지영상·동영상 부문)', en: 'BCI Target Recognition Tech Competition (Still & Video)' },
    year: 2024,
    highlight: true,
  },
  {
    id: 'ai-gyeonggi-2024',
    title: { ko: '대상', en: 'Grand Prize' },
    organization: { ko: 'AI경기 아이디어 챌린지', en: 'AI Gyeonggi Idea Challenge' },
    year: 2024,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/AI%EA%B2%BD%EA%B8%B0_%EB%8C%80%EC%83%81.pdf',
    highlight: true,
  },
  {
    id: 'gif-2025',
    title: { ko: '장려상', en: 'Encouragement Award' },
    organization: { ko: '2025 GIF 글로벌 창업 아이디어 경진대회 (예비창업 부문)', en: '2025 GIF Global Startup Idea Competition (Pre-startup)' },
    year: 2025,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%9D%B4%EB%84%88%EB%A3%A8%ED%94%84%EC%9E%A5%EB%A0%A4%EC%83%81.pdf',
    highlight: true,
  },
  {
    id: 'bci-2023',
    title: { ko: '1위', en: '1st Place' },
    organization: { ko: 'BCI기반 표적인식 기술경진대회 (정지영상·동영상 부문)', en: 'BCI Target Recognition Tech Competition' },
    year: 2023,
    highlight: true,
  },
  {
    id: 'public-data-2021',
    title: { ko: '최우수상 (1위)', en: '1st Prize' },
    organization: { ko: '제9회 공공데이터 활용 비즈니스 아이디어 공모전 — 제품·서비스 개발 부문', en: '9th Public Data Business Idea Contest — Product/Service Category' },
    year: 2021,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%A0%9C9%ED%9A%8C%20%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0%20%ED%99%9C%EC%9A%A9%20%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%20%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4%20%EA%B3%B5%EB%AA%A8%EC%A0%84%20%EC%B5%9C%EC%9A%B0%EC%88%98%EC%83%81.pdf',
  },
  {
    id: 'dacon-2021',
    title: { ko: '5위', en: '5th Place' },
    organization: { ko: 'Dacon AI Vision Competition', en: 'Dacon AI Vision Competition' },
    year: 2021,
    url: 'https://dacon.io/competitions/official/235697/talkboard/402704?dtype=recent',
  },
  {
    id: 'food-safety-2020',
    title: { ko: '대상', en: 'Grand Prize' },
    organization: { ko: '식품안전나라 챌린지 — 식단함', en: 'Food Safety Korea Challenge — Shikdanham' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%8B%9D%ED%92%88%EC%95%88%EC%A0%84%EB%82%98%EB%9D%BC%20%EC%B1%8C%EB%A6%B0%EC%A7%80%20%EB%8C%80%EC%83%81.pdf',
  },
  {
    id: 'ai-challenge-2020',
    title: { ko: '대상', en: 'Grand Prize' },
    organization: { ko: '인공지능 챌린지 — Home PT', en: 'AI Challenge — Home PT' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%B1%8C%EB%A6%B0%EC%A7%80%20%EB%8C%80%EC%83%81.pdf',
  },
  {
    id: 'dgu-research-2020',
    title: { ko: '대상 (Grand Prize)', en: 'Grand Prize' },
    organization: { ko: '제15회 이과대학 연구 프로젝트 경진대회 — Object Detection & Pose Estimation 유사성 연구', en: '15th DGU Science Research Project Competition' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%A0%9C15%ED%9A%8C%20%EC%9D%B4%EA%B3%BC%EB%8C%80%ED%95%99%20%EC%97%B0%EA%B5%AC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C.pdf',
  },
  {
    id: 'sw-maestro-investment-2020',
    title: { ko: '투자 유치', en: 'Investment Attraction' },
    organization: { ko: '과기부 SW 마에스트로 — AI 야구 심판', en: 'Ministry of Science SW Maestro — AI Baseball Referee' },
    year: 2020,
  },
  {
    id: 'nipa-hpc-2020',
    title: { ko: '고성능컴퓨팅 지원 사업 선정', en: 'HPC Support Program Selection' },
    organization: { ko: 'NIPA 주관 고성능 컴퓨팅 지원 사업', en: 'NIPA High Performance Computing Support' },
    year: 2020,
  },
  {
    id: 'nipa-ai-2020',
    title: { ko: '6위', en: '6th Place' },
    organization: { ko: 'NIPA 주관 온라인 인공지능 경진대회', en: 'NIPA Online AI Competition' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%98%A8%EB%9D%BC%EC%9D%B8%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C%206%EC%9C%84.pdf',
  },
  {
    id: 'ideamaru-2020',
    title: { ko: '최우수 아이디어상', en: 'Best Idea Award' },
    organization: { ko: '중소벤처기업부 아이디어마루 — AI 야구 심판', en: 'Ministry of SMEs IdeaMaru — AI Baseball Referee' },
    year: 2020,
  },
  {
    id: 'dongguk-startup-2020',
    title: { ko: '우수상', en: 'Excellent Prize' },
    organization: { ko: '동국대 창업 프리미어리그 — SMART Referee', en: 'Dongguk Startup Contest — SMART Referee' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EB%8F%99%EA%B5%AD%202020%20%EC%B0%BD%EC%97%85%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8%20%EC%9A%B0%EC%88%98%EC%83%81.pdf',
  },
  {
    id: 'farm-excellent-homept-2020',
    title: { ko: '우수상', en: 'Excellent Prize' },
    organization: { ko: '동국대 ICT Farm 경진대회 — Home PT', en: 'Dongguk ICT FARM Competition — Home PT' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/2020%20Farm%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C%20%EC%9A%B0%EC%88%98%EC%83%81.pdf',
  },
  {
    id: 'farm-encourage-2020',
    title: { ko: '장려상', en: 'Encouragement Award' },
    organization: { ko: '동국대 ICT Farm 경진대회 — SMART Referee', en: 'Dongguk ICT FARM Competition — SMART Referee' },
    year: 2020,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/2020%20Farm%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C%20%EC%9E%A5%EB%A0%A4%EC%83%81.pdf',
  },
  {
    id: 'dgu-sw-gold-2019',
    title: { ko: '금상', en: 'Gold Award' },
    organization: { ko: '동국대학교 SW 공모대전 — Home PT', en: 'Dongguk SW Festival — Home PT' },
    year: 2019,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20SW%20%EA%B3%B5%EB%AA%A8%EB%8C%80%EC%A0%84%20%EA%B8%88%EC%83%81.pdf',
  },
  {
    id: 'dgu-ict-2019',
    title: { ko: '우수상', en: 'Excellent Prize' },
    organization: { ko: '동국대학교 ICT Farm 경진대회 — Home PT', en: 'Dongguk ICT FARM Competition — Home PT' },
    year: 2019,
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20ICT%20Farm%20%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C%20%EC%9A%B0%EC%88%98%EC%83%81.pdf',
  },
];

// ── Career ────────────────────────────────────────────────────────────────────

export const career: CareerItem[] = [
  {
    id: 'phd',
    title: { ko: '통합 석·박사 과정', en: 'Integrated Master-Ph.D. Program' },
    organization: { ko: '고려대학교 AI 연구실', en: 'Korea University AI Lab' },
    period: { ko: '2022 — 현재', en: '2022 — Present' },
    description: {
      ko: 'AI·머신러닝 연구. BCI 기반 표적인식, 컴퓨터 비전 중점 연구.',
      en: 'AI/ML research focusing on BCI-based target recognition and computer vision.',
    },
    url: 'http://pr.korea.ac.kr/bbs/board.php?bo_table=sub2_2&wr_id=167',
    type: 'education',
  },
  {
    id: 'everysports',
    title: { ko: '창업자 (Founder)', en: 'Founder' },
    organization: { ko: 'EverySports', en: 'EverySports' },
    period: { ko: '2021 — 2022', en: '2021 — 2022' },
    description: {
      ko: 'AI 스포츠 분석 스타트업 창업. AI 야구 심판 프로젝트를 기반으로 창업.',
      en: 'Founded AI sports analytics startup based on AI baseball referee technology.',
    },
    type: 'startup',
  },
  {
    id: 'sw-maestro',
    title: { ko: 'SW 마에스트로 10기', en: 'SW Maestro 10th Cohort' },
    organization: { ko: '과학기술정보통신부', en: 'Ministry of Science and ICT' },
    period: { ko: '2020', en: '2020' },
    description: {
      ko: '정부 선발 엘리트 소프트웨어 인재 육성 프로그램. AI 야구 심판으로 투자 유치.',
      en: 'Government-selected elite software talent development program. Secured investment with AI Baseball Referee.',
    },
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/SW%20Maestro%20%EC%88%98%EB%A3%8C%EC%A6%9D.pdf',
    type: 'program',
  },
  {
    id: 'bigdata-farm',
    title: { ko: 'BigData Farm 회장', en: 'BigData Farm President' },
    organization: { ko: '동국대학교', en: 'Dongguk University' },
    period: { ko: '2020', en: '2020' },
    description: {
      ko: '데이터사이언스 동아리 회장. 다수의 경진대회 참여 및 수상 주도.',
      en: 'Led the data science club with multiple competition entries and awards.',
    },
    type: 'work',
  },
  {
    id: 'bs',
    title: { ko: '수학·통계학 학사', en: 'B.S. in Mathematics & Statistics' },
    organization: { ko: '동국대학교', en: 'Dongguk University' },
    period: { ko: '2014 — 2021', en: '2014 — 2021' },
    description: {
      ko: '수학과 & 통계학과 복수전공. 수학적 기초가 AI 연구의 발판.',
      en: 'Double major in Mathematics and Statistics. Mathematical foundation for AI research.',
    },
    url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/%ED%95%99%EC%9C%84%EC%A6%9D_%EC%98%81%EB%AC%B8.pdf',
    type: 'education',
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  { name: 'Python', category: 'lang', level: 95 },
  { name: 'PyTorch', category: 'ai', level: 92 },
  { name: 'TensorFlow', category: 'ai', level: 80 },
  { name: 'Computer Vision', category: 'ai', level: 90 },
  { name: 'Deep Learning', category: 'ai', level: 90 },
  { name: 'BCI / EEG', category: 'ai', level: 85 },
  { name: 'Swift / iOS', category: 'mobile', level: 65 },
  { name: 'JavaScript', category: 'lang', level: 70 },
  { name: 'AWS', category: 'cloud', level: 72 },
  { name: 'Git', category: 'cloud', level: 88 },
  { name: 'R', category: 'lang', level: 70 },
  { name: 'MATLAB', category: 'lang', level: 68 },
];

// ── Social Links ──────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sungjin-kim-0718',
    label: 'linkedin.com/in/sungjin-kim-0718',
  },
  {
    platform: 'Google Scholar',
    url: 'https://scholar.google.com/citations?hl=en&user=60YFOREAAAAJ',
    label: 'Google Scholar',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/comojin1994',
    label: 'github.com/comojin1994',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/sungjin_718/',
    label: '@sungjin_718',
  },
  {
    platform: 'Email',
    url: 'mailto:s_j_kim@korea.ac.kr',
    label: 's_j_kim@korea.ac.kr',
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────

export const stats = [
  { value: 18, label: { ko: '수상 이력', en: 'Awards Won' }, suffix: '+' },
  { value: 7, label: { ko: '프로젝트', en: 'Projects' }, suffix: '+' },
  { value: 1, label: { ko: '특허 출원', en: 'Patent Filed' }, suffix: '' },
  { value: 3, label: { ko: '창업 경험', en: 'Startups' }, suffix: '' },
];
