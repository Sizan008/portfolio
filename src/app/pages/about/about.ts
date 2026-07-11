import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

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
}