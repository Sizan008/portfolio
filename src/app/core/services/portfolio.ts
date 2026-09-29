import { Injectable } from '@angular/core';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  SOCIAL_LINKS_DATA,
} from '../constants/portfolio-data.constant';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { SocialLink } from '../models/social-link.model';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  getProfile(): Profile {
    return PROFILE_DATA;
  }

  getEducation(): readonly Education[] {
    return EDUCATION_DATA;
  }

  getSkills(): readonly Skill[] {
    return SKILLS_DATA;
  }

  getProjects(): readonly Project[] {
    return PROJECTS_DATA;
  }

  getFeaturedProjects(): readonly Project[] {
    return PROJECTS_DATA.filter((project) => project.featured);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS_DATA.find((project) => project.slug === slug);
  }

  getExperiences(): readonly Experience[] {
    return EXPERIENCE_DATA;
  }

  getSocialLinks(): readonly SocialLink[] {
    return SOCIAL_LINKS_DATA;
  }
}
