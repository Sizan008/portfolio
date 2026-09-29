import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { SocialLink } from '../models/social-link.model';

export const PROFILE_DATA: Profile = {
  fullName: 'Fahim Shahryer Sizan',
  shortName: 'Sizan',
  title: 'Full Stack Developer',
  location: 'Bangladesh',
  email: 'fahimshahryersizan2004@gmail.com',
  phone: '+8801828624005',
  summary:
    'I build responsive, clean, and scalable web applications, Mobile App using Angular, Flutter, Spring Boot, FastAPI, Tailwind CSS and REST API integration.',
  profileImageUrl: '/images/sizan_profile.jpeg',
  resumeUrl: '/resume/Sizan_CV_1.pdf',
};

export const EDUCATION_DATA: readonly Education[] = [
  {
    id: 1,
    qualification: 'Bachelor of Science in Software Engineering (Undergoing)',
    institution: 'Institute of Information Technology, University of Dhaka',
    result: 'CGPA: 3.14/4.00 (up to 5th semester)',
    year: '2023 - 2027 (Expected)',
  },
  {
    id: 2,
    qualification: 'Higher Secondary Certificate (HSC)',
    institution: 'Bogura Government College',
    result: 'GPA: 5.00/5.00',
    year: '2022',
  },
  {
    id: 3,
    qualification: 'Secondary School Certificate (SSC)',
    institution: 'Cantonment Public School and College, Saidpur',
    result: 'GPA: 5.00/5.00',
    year: '2020',
  },
];

export const SKILLS_DATA: readonly Skill[] = [
  { id: 1, name: 'Angular', category: 'Frontend' },
  { id: 2, name: 'Flutter', category: 'Frontend' },
  { id: 3, name: 'Tailwind CSS', category: 'Responsive Design' },
  { id: 4, name: 'REST API Integration', category: 'Other' },
  { id: 5, name: 'Firebase', category: 'Backend' },
  { id: 6, name: 'Spring Boot', category: 'Backend' },
  { id: 7, name: 'FastAPI', category: 'Backend' },
  { id: 8, name: 'MySQL', category: 'Database' },
  { id: 9, name: 'PostgreSQL', category: 'Database' },
  { id: 10, name: 'GitHub', category: 'Tools' },
];

export const PROJECTS_DATA: readonly Project[] = [
  {
    id: 1,
    title: 'Management Console',
    slug: 'management-console',
    shortDescription:
      'Enterprise management console built with Angular and Spring Boot, featuring reusable UI, administrative workflows, reporting, and REST API integration.',
    description:
      'An enterprise management console developed with Angular on the frontend and Spring Boot on the backend. I worked on user management, authorization, workflow, configuration, reporting, search, filtering, pagination, responsive forms, reusable UI components, validation, and API-driven data flows. The project focuses on maintainable modular architecture and consistent frontend-backend integration.',
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'SCSS',
      'Spring Boot',
      'REST API',
    ],
    githubUrl: 'https://github.com/mirajulmiraj09/Leads_Projects',
    imageUrl: '/images/Management_Console.jpeg',
    galleryImages: [],
    featured: true,
  },
  {
    id: 5,
    title: 'eKYC Digital Account Opening System',
    slug: 'ekyc-digital-account-opening-system',
    shortDescription:
      'Angular-based digital onboarding system with OTP, NID OCR verification, face detection, liveness verification, nominee, signature, and account-opening flows.',
    description:
      'A digital eKYC account-opening system built around a step-based Angular onboarding flow. It includes product and branch selection, OTP verification, customer information, nominee details, signature capture, and account-opening API integration. NID front/back images are processed through OCR-assisted identity verification, while face-api.js is used for browser-side face detection and liveness/face-verification related steps.',
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'REST API',
      'OCR',
      'face-api.js',
    ],
    imageUrl: '/images/eKYC_Account_register.jpeg',
    galleryImages: [],
    featured: true,
  },
  {
    id: 2,
    title: 'IAmFertilizer',
    slug: 'iamfertilizer-fertilizer-recommendation-mobile-app-for-paddy',
    shortDescription:
      'Smart mobile app that analyzes rice-leaf images, identifies nutrient deficiency, and generates targeted fertilizer recommendations.',
    description:
      'IAmFertilizer is a mobile application for paddy farmers that analyzes rice-leaf images to identify Healthy, Nitrogen (N), Phosphorus (P), or Potassium (K) deficiency classes. A trained model is integrated with a FastAPI backend to generate targeted fertilizer recommendations. The application also supports mobile image capture and history storage for field use.',
    technologies: ['Python', 'Flutter', 'FastAPI', 'Keras', 'PostgreSQL'],
    githubUrl:
      'https://github.com/Sizan008/SPL2--Fertilizer-Recommendation-IAmFertilizer-',
    imageUrl: '/images/fertilizerapp.jpeg',
    galleryImages: [],
    featured: true,
  },
  {
    id: 3,
    title: 'Connect-4 Android Game',
    slug: 'pConnect-4',
    shortDescription:
      'Flutter Connect-4 game with Player vs Player and Player vs AI modes, including multiple AI difficulty levels.',
    description:
      'A fully interactive Connect-4 mobile application built using Flutter and Dart. It supports Player vs Player and Player vs AI gameplay with multiple difficulty levels. The AI uses Minimax with Alpha-Beta pruning, while animations and responsive interactions provide a polished mobile gameplay experience.',
    technologies: ['Flutter', 'Dart', 'Minimax', 'Alpha-Beta Pruning'],
    githubUrl: 'https://github.com/Sizan008/Connect-4-game',
    apkUrl:
      'https://github.com/Sizan008/Connect-4-game/blob/master/Connect%204%20Game.apk',
    imageUrl: '/images/con.jpeg',
    galleryImages: [],
    featured: true,
  },
  {
    id: 6,
    title: 'BokBok - Group Chat App',
    slug: 'bokbok-group-chat-app',
    shortDescription:
      'Flutter realtime group chat application with Firebase authentication, group creation, member management, search, and instant messaging.',
    description:
      'BokBok is a Flutter-based realtime group chat application using Firebase Realtime Database. Users can authenticate, create or join groups, add members, search for groups, and exchange messages instantly. Live Firebase updates keep messages and group information synchronized across users.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Realtime Database'],
    githubUrl: 'https://github.com/Sizan008/chatclass_webTechCourseAssignment',
    apkUrl:
      'https://github.com/Sizan008/chatclass_webTechCourseAssignment/releases/download/v1.0.0/app-arm64-v8a-release.apk',
    imageUrl: '/images/Bokbok_chat.jpeg',
    galleryImages: [],
    featured: false,
  },
  {
    id: 7,
    title: 'Automatic Car Parking Using Arduino',
    slug: 'automatic-car-parking-arduino',
    shortDescription:
      'Arduino parking prototype that uses ultrasonic sensors to detect vehicles and displays available parking spaces in realtime.',
    description:
      'A prototype designed to automate parking-lot availability monitoring. Arduino processes data from ultrasonic sensors to detect vehicle presence, while LEDs and an LCD provide a realtime visual count of available parking spaces.',
    technologies: ['Arduino', 'Ultrasonic Sensor', 'LCD', 'Embedded Systems'],
    resourceUrl: 'https://youtube.com/shorts/r7h0Gj5EitY',
    resourceLabel: 'Project Demo',
    imageUrl: '/images/Automatic_Parking_Arduino.jpeg',
    galleryImages: [],
    featured: false,
  },
  {
    id: 8,
    title: 'Chor-Dakat-Police-Babu Game',
    slug: 'chor-dakat-police-babu-game',
    shortDescription:
      'Digital C++ and SFML version of the traditional game with computer-controlled single-player roles and four-player multiplayer mode.',
    description:
      'A digital version of the traditional Chor-Dakat-Police-Babu game developed using C++ and SFML. It includes a single-player mode with computer-controlled roles and a multiplayer mode for four human players. Roles are randomly assigned in each round, with gameplay centered on deduction, strategy, and luck.',
    technologies: ['C++', 'SFML', 'Game Development'],
    githubUrl: 'https://github.com/Sizan008/SPL-1',
    imageUrl: '/images/Chor_Dakat_Police_Babu_game.jpeg',
    galleryImages: [],
    featured: false,
  },
  {
    id: 9,
    title: 'DU Food Point Management System - SRS',
    slug: 'du-food-point-management-system-srs',
    shortDescription:
      'Software Requirements Specification project covering requirement analysis, functional requirements, and system behavior for a food-point management system.',
    description:
      'A detailed Software Requirements Specification co-authored for the DU Food Point Management System. The work covers requirement analysis, system functionality, functional requirements, expected system behavior, and overall software specification documentation.',
    technologies: ['SRS', 'Requirements Engineering', 'System Analysis'],
    resourceUrl:
      'https://drive.google.com/file/d/1oqnEM1qDMBXkMJtnyKT-26xr98Lir_2V/view?usp=drive_link',
    resourceLabel: 'SRS Document',
    imageUrl: '/images/DU_FOOD_POINT_Management.jpeg',
    galleryImages: [],
    featured: false,
  },
  {
    id: 4,
    title: 'Lubdhok',
    slug: 'lubdhok',
    shortDescription:
      'Android donation platform that connects administrators and donors through transparent campaigns and realtime donation priorities.',
    description:
      'Lubdhok is an Android donation management application designed to make donation distribution more transparent and efficient. Administrators create campaigns with required items and quantities, while donors browse active campaigns and contribute based on realtime needs. The system tracks donation progress and categorizes item status as Urgent, Underflowed, Fulfilled, or Overflowed to reduce wastage and highlight priority needs.',
    technologies: ['Flutter', 'Firebase', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/Sizan008/Lubdhok-_Android_Mobile_App',
    apkUrl:
      'https://github.com/Sizan008/Lubdhok-_Android_Mobile_App/releases/tag/v1.0.0-hackathon',
    imageUrl: '/images/donate.jpeg',
    galleryImages: [],
    featured: true,
  },
];

export const EXPERIENCE_DATA: readonly Experience[] = [
  {
    id: 1,
    title: 'Internship - Full Stack Developer',
    organization: 'LEADS Corporation',
    duration: '03/05/2026 - Present',
    description:
      'Built Angular applications with responsive layouts, reusable components, API integration, clean project architecture and now working on backend development using Spring Boot.',
  },
];

export const SOCIAL_LINKS_DATA: readonly SocialLink[] = [
  {
    id: 1,
    label: 'GitHub',
    url: 'https://github.com/Sizan008',
  },
  {
    id: 2,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fahim-shahryer-sizan',
  },
  {
    id: 3,
    label: 'Email',
    url: 'mailto:fahimshahryersizan2004@gmail.com',
  },
];
