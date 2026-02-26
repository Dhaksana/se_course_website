import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-engineering',
  standalone: true,
  templateUrl: './design-engineering.html',
  styleUrls: ['./design-engineering.css']
})
export class DesignEngineering implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // redirect to static site under public folder
    window.location.href = '/design-engineering/index.html';
  }
}
