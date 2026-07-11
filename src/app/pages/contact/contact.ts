import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  imports: [SectionTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
  readonly socialLinks = this.portfolioService.getSocialLinks();
}