import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo-component/pipes-demo-component';

@Component({
  imports: [RouterOutlet, PipesDemoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
