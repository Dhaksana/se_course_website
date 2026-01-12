import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App  {

    guidelinesOpen = false;

  toggleGuidelines() {
    this.guidelinesOpen = !this.guidelinesOpen;
  }
}