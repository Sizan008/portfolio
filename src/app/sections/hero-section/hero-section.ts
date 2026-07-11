import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
  readonly socialLinks = this.portfolioService.getSocialLinks();
}