import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [NgOptimizedImage],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconPath: string = "";
}
