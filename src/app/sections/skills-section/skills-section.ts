import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SkillCard } from '../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills-section',
  imports: [SectionTitle, SkillCard],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  private readonly portfolioService = inject(Portfolio);

  readonly skills = this.portfolioService.getSkills();
}