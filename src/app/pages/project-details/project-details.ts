import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly portfolioService = inject(Portfolio);

  readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';

  readonly project = this.portfolioService.getProjectBySlug(this.slug);

  readonly projectImages = this.getProjectImages(this.project);

  readonly selectedImageUrl = signal<string>(this.projectImages[0] ?? '');

  selectImage(imageUrl: string): void {
    this.selectedImageUrl.set(imageUrl);
  }

  private getProjectImages(project: Project | undefined): readonly string[] {
    if (!project) {
      return [];
    }

    if (project.galleryImages && project.galleryImages.length > 0) {
      return project.galleryImages;
    }

    if (project.imageUrl) {
      return [project.imageUrl];
    }

    return [];
  }
}