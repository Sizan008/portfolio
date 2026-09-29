import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

interface TechnicalSkillGroup {
  readonly title: string;
  readonly shortLabel: string;
  readonly skills: readonly string[];
}

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
  readonly experiences = this.portfolioService.getExperiences();

  readonly technicalSkillGroups: readonly TechnicalSkillGroup[] = [
    {
      title: 'Programming Languages',
      shortLabel: 'CODE',
      skills: ['Python', 'Dart', 'Java', 'C++', 'C',  'TypeScript' ],
    },
    {
      title: 'Frontend Development',
      shortLabel: 'UI',
      skills: ['Angular', 'HTML', 'Tailwind CSS', 'SCSS'],
    },
    {
      title: 'Backend Development',
      shortLabel: 'API',
      skills: ['Spring Boot', 'FastAPI', 'REST API Integration'],
    },
    {
      title: 'Mobile & Realtime',
      shortLabel: 'APP',
      skills: ['Flutter', 'Firebase Realtime Database'],
    },
    {
      title: 'Database Management',
      shortLabel: 'DB',
      skills: ['PostgreSQL', 'MySQL', 'Oracle SQL'],
    },
    {
      title: 'Machine Learning',
      shortLabel: 'ML',
      skills: ['Keras', 'Basic Model Training', 'Model Inference'],
    },
    {
      title: 'Computer Vision',
      shortLabel: 'CV',
      skills: ['OCR', 'face-api.js', 'Face Detection', 'Face Verification', 'Liveness Detection'],
    },
    {
      title: 'Tools & Engineering',
      shortLabel: 'DEV',
      skills: ['Git/GitHub', 'Software Requirements Documentation', 'Team Collaboration', 'Communication'],
    },
  ];
}
