import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TruncatePipe } from '../truncate-pipe';
import { TruncateImpurePipe } from '../truncate-impure-pipe';

@Component({
  imports: [CommonModule, TruncatePipe, TruncateImpurePipe],
  selector: 'app-pipes-demo-component',
  styleUrl: './pipes-demo-component.css',
  templateUrl: './pipes-demo-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class PipesDemoComponent {
  sampleDate: Date = new Date('2030-12-31T17:30:00+05:30');
  message: string = 'angular pipes are POWERFUL features';
  price: number = 1234.567;
  completionRate: number = 0.856;
  user: any = { name: 'John Doe', age: 30 };
  description: string =
    'Angular is a powerful framework for building modern web applications with TypeScript and component-based architecture that enables developers to create scalable and maintainable code';
  counter: number = 0;

  incrementCounter(): void {
    this.counter = this.counter + 1;
  }
}
