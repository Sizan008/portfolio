import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
  private animationObserver?: IntersectionObserver;
  private animationRefreshTimer?: number;

  @ViewChild('pageScroll', { static: true })
  private pageScroll?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // AOS normally watches window scrolling. This portfolio intentionally
    // scrolls inside .page-scroll so the navbar can stay fixed. Use the AOS
    // CSS classes with an IntersectionObserver whose root is that container.
    this.setupScrollAnimations();

    this.routeAnimationSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.pageScroll?.nativeElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        if (this.animationRefreshTimer !== undefined) {
          window.clearTimeout(this.animationRefreshTimer);
        }

        // Wait until the routed component has rendered before observing its
        // data-aos elements.
        this.animationRefreshTimer = window.setTimeout(() => {
          this.setupScrollAnimations();
        }, 0);
      });
  }

  ngOnDestroy(): void {
    this.routeAnimationSubscription?.unsubscribe();
    this.animationObserver?.disconnect();

    if (this.animationRefreshTimer !== undefined) {
      window.clearTimeout(this.animationRefreshTimer);
    }
  }

  private setupScrollAnimations(): void {
    const scrollRoot = this.pageScroll?.nativeElement;

    if (!scrollRoot) {
      return;
    }

    this.animationObserver?.disconnect();

    const elements = Array.from(
      scrollRoot.querySelectorAll<HTMLElement>('[data-aos]'),
    );

    if (elements.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    for (const element of elements) {
      element.classList.add('aos-init');

      const duration = element.dataset['aosDuration'] ?? '750';
      const delay = element.dataset['aosDelay'] ?? '0';

      element.style.transitionDuration = `${duration}ms`;
      element.style.transitionDelay = `${delay}ms`;
      element.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

      if (reduceMotion) {
        element.classList.add('aos-animate');
      }
    }

    if (reduceMotion) {
      return;
    }

    this.animationObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const element = entry.target as HTMLElement;
          element.classList.add('aos-animate');
          this.animationObserver?.unobserve(element);
        }
      },
      {
        root: scrollRoot,
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    for (const element of elements) {
      this.animationObserver.observe(element);
    }
  }
}
