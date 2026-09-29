import { Component } from '@angular/core';
import { AboutSection } from '../../sections/about-section/about-section';
import { ContactSection } from '../../sections/contact-section/contact-section';
import { EducationSection } from '../../sections/education-section/education-section';
import { HeroSection } from '../../sections/hero-section/hero-section';
import { ProjectsSection } from '../../sections/projects-section/projects-section';
import { SkillsSection } from '../../sections/skills-section/skills-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    AboutSection,
    SkillsSection,
    EducationSection,
    ProjectsSection,
    ContactSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
