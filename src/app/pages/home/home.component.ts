import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { Renderer2 } from '@angular/core';
import { DisplayCardComponent } from '../../components/display-card/display-card.component';
import { WishlistFormComponent } from '../../components/wishlist-form/wishlist-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    FeatureCardComponent,
    DisplayCardComponent,
    WishlistFormComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'home-page');
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
          this.renderer.setStyle(cursor, 'display', 'none');
        }
      }, 6000);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'home-page');
    }
  }

  handleWishlist(email: string) {
    console.log('Wishlist recebida:', email);

    //lógica para enviar email.
  }
}
