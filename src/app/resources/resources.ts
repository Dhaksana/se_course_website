import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})


export class Resources implements OnInit {
  resources: any[] = [];
  loading = true;


  async ngOnInit() {

  }
}

