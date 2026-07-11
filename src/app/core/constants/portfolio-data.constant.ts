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
  resumeUrl: '/resume/Sizan_CV.pdf',
};

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
      'Responsive Angular dashboard with API integration, forms, reusable components, and clean layout.',
    description:
      'A professional Angular dashboard project using reusable UI components, REST APIs, authentication flow, forms, tables, and responsive SCSS/Tailwind layout.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
    githubUrl: 'https://github.com/mirajulmiraj09/Leads_Projects',
    liveUrl: '',
    imageUrl: '/images/project-management-console.png',
    galleryImages:[],
    featured: true,
  },
  {
    id: 2,
    title: 'IAmFertilizer',
    slug: 'iamfertilizer-fertilizer-recommendation-mobile-app-for-paddy',
    shortDescription:
      'A fertilizer Recommendation Moile App for paddy- You can capture or upload picture of rice leaf and get the recommendation. You can also send chat request with other farmers and meassage with them',
    description:
      'Smart Fertilizer Recommendation System is a mobile-based application designed to assist paddy/rice farmers in detecting disease in rice leaves and receiving fertilizer recommendations using machine learning. The system allows users to capture or upload an image of a rice leaf, analyze it using a trained ML model, and get instant recommendations such as Urea, TSP, or MOP based on detected disease.',
    technologies: ['FastAPI', 'Flutter', 'PostgreSQL', 'CNN Model'],
    githubUrl: 'https://github.com/Sizan008/SPL2--Fertilizer-Recommendation-IAmFertilizer-',
    liveUrl: '',
    imageUrl: '/images/fertilizerapp.jpeg',
    galleryImages:[],
    featured: true,
  },
  {
    id: 3,
    title: 'Connect-4 Android game',
    slug: 'pConnect-4',
    shortDescription:
      'Connect-4 Android game. You can play against each othe on same device or play against AI over 3 different modes.',
    description:
      'This project implements a fully interactive Connect4 mobile application built using Flutter and Dart. The game provides Player vs Player and Player vs AI modes with multiple difficulty levels. The focus of the project was to develop a polished Connect4 experience with animations, clean UI design and intelligent AI using Minimax with Alpha-Beta pruning',
    technologies: ['Flutter'],
    githubUrl: 'https://github.com/Sizan008/Connect-4-game',
    liveUrl: 'https://github.com/Sizan008/Connect-4-game/blob/master/Connect%204%20Game.apk',
    imageUrl: '/images/con.jpeg',
    galleryImages:[],
    featured: true,
  },
  {
    id: 4,
    title: 'Lubdhok',
    slug: 'lubdhok',
    shortDescription:
      'Lubdhok is a friction-based Android donation platform that connects administrators with donors through transparent donation campaigns. Admins can create campaigns with required items and quantities, while donors can contribute to campaigns based on real-time needs and priority.',
    description:
      'Lubdhok is a friction-based Android donation management application designed to make donation distribution more transparent and efficient. Administrators can create donation campaigns by specifying the required items and their quantities. Donors can browse active campaigns, view the requested items, and contribute directly to the campaigns they wish to support. The system continuously tracks donation progress and categorizes each item status as Urgent, Underflowed, Fulfilled, or Overflowed, helping donors identify where contributions are needed most. This real-time visibility reduces unnecessary donations, minimizes resource wastage, and ensures that essential items receive priority.',
    technologies: ['Flutter', 'Firebase', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/Sizan008/Lubdhok-_Android_Mobile_App',
    liveUrl: 'https://github.com/Sizan008/Lubdhok-_Android_Mobile_App/releases/tag/v1.0.0-hackathon',
    imageUrl: '/images/donate.jpeg',
    galleryImages:[],
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