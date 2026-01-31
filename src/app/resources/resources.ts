import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  imports: [CommonModule],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})


export class Resources implements OnInit {
  lectureNotes = [
    { title: 'Lecture 3: Introduction to Software Process Models', link: '/resources/SE_03_Notes.pdf' },
    { title: 'Lecture 4: Traditional Process Models', link: '/resources/SE_04_Notes.pdf' },
    { title: 'Lecture 5: More on Evolutionary Models', link: '/resources/SE_05_Notes.pdf' }
    ,
    { title: 'Lecture 6: Requirements Engineering 101', link: '/resources/SE_06_Notes.pdf' }
    ,
    { title: 'Lecture 7: Software Requirements Specification (SRS)', link: '/resources/SE_07_Notes.pdf' }
    ,
    { title: 'Lecture 8: Agile Software Development and Scrum', link: '/resources/SE_08_Notes.pdf' }
    ,
    { title: 'Lecture 9: More on Scrum & Agile', link: '/resources/SE_09_Notes.pdf' }
  ];

  projects = [
    { title: 'Project Guidelines', link: '/resources/SE_Projects.pdf' }
  ];

  loading = true;


  async ngOnInit() {

  }
}

