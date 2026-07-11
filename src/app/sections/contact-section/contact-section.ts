import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';

@Component({
  selector: 'app-contact-section',
  imports: [RouterLink],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
}