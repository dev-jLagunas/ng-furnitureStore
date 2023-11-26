import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('slideInAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title) {}

  textArray: string[] = [
    'Leafe crafts sustainable furniture with eco-friendly materials for a greener world',
    'Experience modern design infused with the calming essence of nature at Leafe',
    'Our artisans at Leafe ensure each piece is meticulously crafted with a touch of nature',
    'Elegance meets functionality at Leafe, where our furniture complements your lifestyle',
    'Discover timeless pieces at Leafe, merging style seamlessly with the beauty of nature',
    'About Leafe',
  ];
  currentIndex: number = 0;
  currentText: string | null = 'About Leafe';

  ngOnInit() {
    this.titleService.setTitle('About | Leafe');
    setInterval(() => this.updateText(), 4000);
  }

  updateText() {
    this.currentText = this.textArray[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
  }

  getAnimationState(index: number): string {
    return `state${index}`;
  }
}
