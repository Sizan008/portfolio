import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-education',
  imports: [SectionTitle],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationPage {
  private readonly portfolioService = inject(Portfolio);

  readonly education = this.portfolioService.getEducation();
}
