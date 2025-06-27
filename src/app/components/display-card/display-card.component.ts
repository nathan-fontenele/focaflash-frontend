import { NgOptimizedImage } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-display-card',
  imports: [NgOptimizedImage],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss',
})
export class DisplayCardComponent {
  @Input() content: string = '';

  @Input() theme: 'light' | 'dark' = 'light';

  @HostBinding('class.dark-theme')
  get darkTheme(): boolean {
    return this.theme === 'dark';
  }
}
