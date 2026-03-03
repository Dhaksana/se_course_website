import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-design-engineering',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './design-engineering.html',
  styleUrls: ['./design-engineering.css']
})
export class DesignEngineering {
  constructor() {}
}

