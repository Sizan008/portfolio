import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-projects-section',
  imports: [RouterLink, SectionTitle, ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private readonly portfolioService = inject(Portfolio);

  readonly projects = this.portfolioService.getFeaturedProjects();
}