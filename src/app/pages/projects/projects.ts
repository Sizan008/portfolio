import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly portfolioService = inject(Portfolio);

  readonly projects = this.portfolioService.getProjects();
}