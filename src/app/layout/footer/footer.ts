import { Component, inject } from '@angular/core';
import { Portfolio } from '../../core/services/portfolio';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly portfolioService = inject(Portfolio);

  readonly profile = this.portfolioService.getProfile();
  readonly currentYear = new Date().getFullYear();
}