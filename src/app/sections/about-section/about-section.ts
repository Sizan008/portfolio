import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink, SectionTitle],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
}