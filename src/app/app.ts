import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { Subscription, filter } from 'rxjs';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private readonly router = inject(Router);
  private routeAnimationSubscription?: Subscription;

  ngAfterViewInit(): void {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 70,
      delay: 0,
    });

    this.routeAnimationSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        window.setTimeout(() => AOS.refreshHard(), 0);
      });
  }

  ngOnDestroy(): void {
    this.routeAnimationSubscription?.unsubscribe();
  }
}
