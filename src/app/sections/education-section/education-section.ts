import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-education-section',
  imports: [RouterLink, SectionTitle],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSection {
  private readonly portfolioService = inject(Portfolio);

  readonly education = this.portfolioService.getEducation();
}
